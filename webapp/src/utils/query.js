
var mysql = require('mysql');

// 建立链接
function __connection() {
    var connection = mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });
    connection.connect();
    return connection;
};

exports.query = function (sql, parmas = null) {
    // 获取数据库链接对象
    var connection = __connection();
    return new Promise(function (reject, resolve) {
        // 执行SQL语句
        connection.query(sql, parmas, function (error, results, fields) {
            if (error) throw error;
            reject(results);
        });
        // 关闭链接
        connection.end();
    })
}

