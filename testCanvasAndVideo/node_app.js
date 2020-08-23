var http = require('http');
//导入文件模块
var fs = require("fs");
var path = require('path');

//2. 创建http服务器
var mime = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};

var server = http.createServer(function (request, response) {
    var pathname = request.url;
    var realPath = path.join("./", pathname);
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, "Not Found", { 'Content-Type': 'text/plain' });
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            var ext = path.extname(realPath);
            ext = ext ? ext.slice(1) : 'unknown';
            var contentType = mime[ext] || "text/plain";
            response.setHeader("Content-Type", contentType);
            fs.stat(realPath, function (err, stat) {
                var raw = fs.createReadStream(realPath);
                response.writeHead(200, "Ok");
                raw.pipe(response);
            })
        }
    });
})

//3. 绑定端口
server.listen(3030, 'xxx.xx.xx.xx');

