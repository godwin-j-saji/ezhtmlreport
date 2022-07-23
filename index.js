function generateEZHtmlReport(HeaderName,ReportContent,portableReportLocation){
    var fs=require('fs');
    var path=require('path');
    var htmlPageTemplate=fs.readFileSync(path.resolve(__dirname, './Templates/Pages/BW_Sidebar.html')).toString('utf-8');
    htmlPageTemplate=htmlPageTemplate.replace('{HEADER_NAME}',HeaderName);
    htmlPageTemplate=htmlPageTemplate.replace('{REPORT_CONTENT}',ReportContent);
    makedirRecursiveSync(portableReportLocation+'EZHtmlReport-Helpers/');
    copyRecursiveSync(path.resolve(__dirname, './EZHtmlReport-Helpers'),portableReportLocation+'EZHtmlReport-Helpers/');
    fs.writeFileSync(portableReportLocation+"index.html",htmlPageTemplate);
    return htmlPageTemplate;
}
var makedirRecursiveSync=function(dest){
  const dirPath = dest;
  var fs=require('fs');
  dirPath.split('/').reduce(
  (directories, directory) => {
    directories += `${directory}/`;

    if (!fs.existsSync(directories)) {
      fs.mkdirSync(directories);
    }

    return directories;
  },
  '',
);
}
var copyRecursiveSync = function(src, dest) {
    var fs=require('fs');
    var path=require('path');
    var exists = fs.existsSync(src);
    var destEsists=fs.existsSync(dest);
    var stats = fs.statSync(src);
    var isDirectory = stats.isDirectory();
   console.log("isExist="+destEsists+"::isDir="+stats.isDirectory()+"::src="+src+"::dest="+dest) 
    
   if (isDirectory) {
    if(!destEsists){
      console.log("creeating Dir..."+dest)
        fs.mkdirSync(dest);
      }
      fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                          path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
module.exports=generateEZHtmlReport;