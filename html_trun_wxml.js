
function map_title(htmlStr) {
    var tag_arr = ['h1','h2','h3','h4','h5','h6','p','div','span','button','ol','ul','li','strong'];
    for(var i=0,len=tag_arr.length;i<len;i++){
        switch (tag_arr[i]){
            case 'h1':
                var reg = /<h1.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h1>/;
                break;
            case 'h2':
                var reg = /<h2.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h2>/;
                break;
            case 'h3':
                var reg = /<h3.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h3>/;
                break;
            case 'h4':
                var reg = /<h4.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h4>/;
                break;
            case 'h5':
                var reg = /<h5.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h5>/;
                break;
            case 'h6':
                var reg = /<h6.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/h6>/;
                break;
            case 'span':
                var reg = /<span.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/span>/;
                break;
            case 'div':
                var reg = /<div.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/div>/;
                break;
            case 'p':
                var reg = /<p.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/p>/;
                break;
            case 'button':
                var reg = /<button.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/button>/;
                break;
            case 'ul':
                var reg = /<ul.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/ul>/;
                break;
            case 'ol':
                var reg = /<ol.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/ol>/;
                break;
            case 'li':
                var reg = /<li.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/li>/;
                break;
            case 'strong':
                var reg = /<strong.*?(class=("(.*?)"|'(.*?)'))?>(.*?)<\/strong>/;
                break;
        }
        var arr = htmlStr.match(reg);
        while (arr){
            var cls = "";
            if(arr[3]){
                cls=arr[3];
            }else if(arr[4]){
                cls=arr[4];
            }
            var obj = {
                cls:cls,
                type:tag_arr[i],
                content:arr[5]?arr[5]:""
            };
            htmlStr = htmlStr.replace(reg,JSON.stringify(obj));
            arr = htmlStr.match(reg);
        }
    }
    return htmlStr;
}
function map_img(htmlStr) {
    var reg = /<img.*?src="(.*?)"|'(.*?)'.*?>/,//匹配SRC，因为不知道顺序？
        arr = htmlStr.match(reg);

    while(arr){
        var  src = arr[2]?arr[2]:arr[1],
            reg2 = /<img.*?class=("(.*?)"|'(.*?)')?.*?>/,
            arr2 = htmlStr.match(reg2),cls="";
        if(arr2&&arr2[3]){
            cls=arr2[3];
        }else if(arr2&&arr2[4]){
            cls=arr2[4];
        }

        var obj = {
            cls:cls,
            type:'img',
            src:src,
            content:''
        };
        htmlStr = htmlStr.replace(reg,JSON.stringify(obj));
        arr = htmlStr.match(reg);
    }

    console.log(htmlStr);
    return htmlStr;
}

function map_ul(htmlStr) {

}
function map_a() {//需要匹配class,href

}

function map_input() {

}
function turn_arr(htmlStr){
    htmlStr = htmlStr.replace(/\\+/g,"").replace(/\s/g,"").replace(/}\{/g,"},{").replace(/}"}/g,'}]}').replace(/}"}/g,'}]}')
        .replace(/content":"\{/g,'content":[{').replace(/^\{/g,'[{').replace(/}$/g,'}]');
    return htmlStr;
}
var init = function(htmlStr) {
    htmlStr = map_title(htmlStr);
    htmlStr = map_img(htmlStr);
    var htmlArr = turn_arr(htmlStr);
    return htmlArr
};
module.exports = {
    init: init
};

