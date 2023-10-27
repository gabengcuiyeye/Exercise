const router = require("koa-router")();
const queryTaxAccounting = require("../db/taxAccounting");
const result = require("../utils/result").result;
router.get("/starms/costing/costingResult/list", async (ctx, next) => {
  try {
    var res = await queryTaxAccounting.getTaxAccountingResult({
      taskId: "1524312958478950402",
      pageNo: 1,
      pageSize: 10,
    });
    ctx.response.set("Access-control-Allow-Origin", "*");
    ctx.response.set(
      "Access-Control-Allow-Methods",
      "GET,POST,OPTIONS,PUT,DELETE"
    );
    ctx.response.set("Access-Control-Allow-Headers", "*");
    ctx.response.set("Access-Control-Allow-Credentials", "true");
    ctx.response.body = result.ok({ result: res });
  } catch (error) {
    ctx.response.body = result.error({ message: error });
  }
});
module.exports = router;
