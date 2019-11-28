const http = require('http');
const port = 30000;
const cuf = require('cuf');
const fs = require('fs');

let index = 0;

let server = http.createServer(function (request, response) {

    cuf.log("[" + index++ + "]" + request.url);

    request.url = request.url.replace(/(\?_=[0-9]+)$/, '');

    // 请求的文件路径
    let filePath = cuf.fullPath(request.url == "/" ? "index.html" : request.url.replace(/^\//, ""));

    let dotName = filePath.match(/\.([^.]+)$/)[1];

    let content = "",
        status = 200,

        // 文件类型
        type = {
            'json': 'application/json',
            'html': 'text/html',
            'js': 'application/javascript',
            'css': 'text/css',
            'png': 'image/png',
            'gif': 'image/gif',
            'ico': 'image/x-icon'
        } [dotName];

    if (!type) {
        throw new Error('unknow type:' + dotName);
    }

    // 如果需要读取的文件存在
    if (fs.existsSync(filePath)) {
        content = fs.readFileSync(filePath);
    } else {
        status = 404;
    }

    response.writeHead(status, {
        'content-type': type
    });
    response.write(content);
    response.end();
});

server.listen(port);
cuf.log('Server running on port:' + port);