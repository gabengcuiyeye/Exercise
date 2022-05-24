var Popup = function (options) {
    this.options = options ? options : {};
    this._init();
};
Popup.prototype = {
    _init: function () {
        var that = this;
        that._create();
        var layer = document.getElementById('layer');
        if (that.options.showSureOption === 1) {
            document.getElementById('sure').addEventListener('click', function () {
                that._sure(layer);
            });
        }
        if (that.options.showCancelOption === 1) {
            document.getElementById('cancel').addEventListener('click', function () {
                that._cancel(layer);
            });
        }
    },
    _create: function (options) {
        var opt = this.options;
        opt.parentDom = opt.parentDom ? opt.parentDom : document.getElementsByTagName('body')[0];
        opt.title = opt.title ? opt.title : "";
        opt.content = opt.content ? opt.content : "";
        opt.showSureOption = opt.showSureOption ? opt.showSureOption : 1;
        opt.showCancelOption = opt.showCancelOption ? opt.showCancelOption : 1;
        opt.callbackEvent = opt.callbackEvent ? opt.callbackEvent : function () { };
        var str = '<h4 id="layer_title">' + opt.title + '</h4>' + '<div class="layer_content" id="layer_content">' + opt.content
            + '</div>' + '<div class="layer_btn_wrap">';
        if (opt.showSureOption === 1) {
            str += '<span class="layer_btn" id="sure">确定</span>';
        }
        if (opt.showCancelOption === 1) {
            str += '<span class="layer_btn" id="cancel">取消</span>';
        }
        str += '</div>';

        var layer = document.createElement('div');
        layer.className = 'layer';
        layer.id = 'layer';
        layer.innerHTML = str;
        var script = document.getElementsByTagName('script')[0];
        // opt.parentDom.insertBefore(layer,script);
        opt.parentDom.appendChild(layer);
    },
    _sure: function (layer) {
        //this指向dom元素
        layer.style.display = 'none';
    },
    _cancel: function (layer) {
        layer.style.display = 'none';
    },
    _changeHtml: function (options) {
        document.getElementById('layer_title').innerHTML = options.title;
        document.getElementById('layer_content').innerHTML = options.content;
    }
};
var getPopup = function () {
    var popup;
    return function (options) {
        if (!popup) {
            popup = new Popup(options);
        }
        return popup;
    }
}();
