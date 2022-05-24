const router = require('koa-router')();
const queryTaxAccounting = require("../db/taxAccounting")
router.get('/test', async (ctx, next) => {
    var results = await queryTaxAccounting.getTaxAccountingResult({ taskId: '1524312958478950402', pageNo: 1, pageSize: 10 })
    ctx.body = results
});
module.exports = router;



