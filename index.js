function generateEZHtmlReport(HeaderName,ReportContent){
    var fs=require('fs');
    var htmlPageTemplate=fs.readFileSync('./Templates/Pages/BW_Sidebar.html').toString('utf-8');
    htmlPageTemplate=htmlPageTemplate.replace('{HEADER_NAME}',HeaderName);
    htmlPageTemplate=htmlPageTemplate.replace('{REPORT_CONTENT}',ReportContent);
}
module.exports(generateEZHtmlReport)