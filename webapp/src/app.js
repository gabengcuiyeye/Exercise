const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const test = require('./controller/TaxAccounting')
app.use(test.routes())
app.use(cors());
app.listen(4000);