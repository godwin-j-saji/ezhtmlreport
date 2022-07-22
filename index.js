function generateEZHtmlReport(HeaderName,ReportContent,portableReportLocation){
    var fs=require('fs');
    var path=require('path');
    var htmlPageTemplate=fs.readFileSync(path.resolve(__dirname, './Templates/Pages/BW_Sidebar.html')).toString('utf-8');
    htmlPageTemplate=htmlPageTemplate.replace('{HEADER_NAME}',HeaderName);
    htmlPageTemplate=htmlPageTemplate.replace('{REPORT_CONTENT}',ReportContent);
    fs.writeFileSync(portableReportLocation,htmlPageTemplate);
    return htmlPageTemplate;
}
module.exports=generateEZHtmlReport;