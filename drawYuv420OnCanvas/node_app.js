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


class FileReadStreams {
    constructor() {
        this._streams = {};
    }

    make(file, options = null) {
        return options ?
            fs.createReadStream(file, options)
            : fs.createReadStream(file);
    }

    get(file) {
        return this._streams[file] || this.set(file);
    }

    set(file) {
        return this._streams[file] = this.make(file);
    }
}





var server = http.createServer(function (request, response) {
    var pathname = request.url;
    var realPath = path.join("./", pathname);

    if (pathname === '/getYUV') {
        const readStreams = new FileReadStreams();
        //version-3
        let reqRange = (request.headers.range) ? request.headers.range.replace(/bytes=/, "").split("-") : [];
        let range = {
            start: parseInt(reqRange[0]),
            end: parseInt(reqRange[1])
        };

        var stat = fs.statSync('./ffmepgDrawVideo/flower_cif.yuv');

        let stream = readStreams.make('./ffmepgDrawVideo/flower_cif.yuv', range);
        //range 响应
        response.writeHead(200, {
            'Content-Type': 'video/x-ogg-yuv',
            'Accept-Ranges': 'bytes',
            'Content-Range': 'bytes ' + range.start + '-' + range.end + '/' + stat.size,
            'Content-Length': range.end - range.start + 1,
        });
        stream.pipe(response);
        return;
    }


    //以下是静态文件
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
server.listen(3030, 'xxxxxx');

//4. 执行
console.log('执行了3030');

