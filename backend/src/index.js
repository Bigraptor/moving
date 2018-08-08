require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const app = new Koa();
const router = new Router();

const bodyparser = require('koa-bodyparser');
const api = require('api');
const { jwtMiddleware } = require('lib/token');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('mongoDB is connected...');
}).catch((e) => {
    console.error(e);
});

app.use(bodyparser());
app.use(jwtMiddleware);
app.use(serve('./static'));

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(port + ' is running....');
});
