const Koa = require('koa');
const app = new Koa();
const test = require('./controller/TaxAccounting')
app.use(test.routes())
app.listen(4000);