const DB = require("../utils/query")
exports.getTaxAccountingResult = async function ({ taskId, pageSize = 10, pageNo = 1 }) {
    return await DB.query('SELECT * FROM test WHERE task_id=' + `${taskId} limit ${pageSize} offset ${pageSize * (pageNo - 1)}`)

}