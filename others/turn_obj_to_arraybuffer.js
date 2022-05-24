var buffer = new ArrayBuffer(16);//生成16字节的arrayBuffer
var int32View = new Int8Array(buffer);//32位整数视图  16 * 8 / 32 = 4 可以写4个整数  js number 64位双精度存储，int32Array过程中做了转换

for (var i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
}
// console.log(int32View);

//字节序？什么叫大端序/小端序

//obj={a:1}如何转为二进制序列化   =》最简单的就是内存复制



//以下仅考虑简单实现 
function serialize(obj) {
    let buffer = new ArrayBuffer(10000);
    let dataView = new DataView(buffer);
    let pos = 0, dataPos = 101;//前100存key,后一百存数据

    Object.keys(obj).forEach((key, index) => {

        if (typeof obj[key] === 'string') {//默认utf-8编码（1-4字节）
            dataView.setInt8(pos + 1, dataPos);//start
            let len = obj[key].length;
            for (i = 0; i < len; i++) {
                dataView.setInt16(dataPos, obj[key].charCodeAt(i));
                dataPos += 2;
            }
            dataView.setInt8(pos, 1);//type
            dataView.setInt8(pos + 2, dataPos);//end
            pos += 3;

        } else if (typeof obj[key] === 'number') {//字节数和数字实际大小有关，假设255以内整数
            dataView.setInt8(pos + 1, dataPos);//start  
            dataView.setInt8(dataPos, obj[key]);
            dataPos += 8;
            dataView.setInt8(pos, 2);//type
            dataView.setInt8(pos + 2, dataPos);//end
            pos += 3;

        } else if (typeof obj[key] === 'boolean') {

            dataView.setInt8(pos + 1, dataPos);//start
            let val = obj[key] ? 1 : 0;
            dataView.setInt8(dataPos, val);
            dataPos += 1;
            dataView.setInt8(pos, 3);//type
            dataView.setInt8(pos + 2, dataPos);//end
            pos += 3;

        } else if (typeof obj[key] === "undefined") {
            dataView.setInt8(pos + 1, dataPos);//start
            dataView.setInt8(dataPos, 3);
            dataPos += 1;
            dataView.setInt8(pos, 4);//type
            dataView.setInt8(pos + 2, dataPos);//end
            pos += 3;
        }
    })

    return dataView;
}

function deserialize(dataView) {
    var obj = {};
    for (let i = 0; i < 100; i += 3) {
        let type = dataView.getInt8(i);
        let start = dataView.getInt8(i + 1);
        let end = dataView.getInt8(i + 2);
        if (type == 1) {
            let val = "";
            while (start < end) {
                val += String.fromCodePoint(dataView.getInt16(start));
                start += 2;
            }
            obj.a = val;
        } else if (type == 2) {
            obj.b = dataView.getInt8(start);
        } else if (type == 3) {
            obj.c = dataView.getInt8(start) == 1 ? true : false;
        }
    }
    return obj;

}


function run() {
    let encodeData = serialize({ a: 'hello', b: 30, c: false });
    // console.log(encodeData);
    let decodeData = deserialize(encodeData);
    console.log(decodeData);
}

run();
