const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-parser");

const app = new Koa();
const port = 4000;

app.listen(port);
console.log(`Server is listenng on port ${port}`);
