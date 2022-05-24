function SpritePng() {

}
SpritePng.prototype = {
    init: function () {
        var self = this;
        document.getElementById('js_download').addEventListener('click', function () {
            self.download_img();
        })
    },
    canvas_to_data_url: function (src, callback) {//步骤1，转为base64编码
        let img = new Image();
        img.crossOrigin = 'Anonymous';//使用跨域图像
        img.onload = function () {
            let canvas = document.createElement('CANVAS');
            let ctx = canvas.getContext('2d');
            let dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL();
            callback(dataURL);
        };
        img.src = src;
    },

    turn_to_binary: function (base64Img) {//步骤2.转为2进制
        let byteString;
        if (base64Img.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(base64Img.split(',')[1]);
        else
            byteString = unescape(base64Img.split(',')[1]);
        // separate out the mime component
        let mimeString = base64Img.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        let blob = new Blob([ia], { type: mimeString });
        return blob;
    },
    download_img: function () {//步骤3.下载
        let img_src = 'https://g.mdcdn.cn/pc/img/kaoker_web/kaoker_banner.jpg';
        let blob_return,
            self = this;
        self.canvas_to_data_url(img_src, function (base64Img) {
            blob_return = self.turn_to_binary(base64Img);
            let a = document.createElement('a');
            let url = window.URL.createObjectURL(blob_return);
            let filename = 'sarah_test.jpg';
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        });
    },
};
let sprite_png = new SpritePng();
sprite_png.init();
