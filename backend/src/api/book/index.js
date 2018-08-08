const Router = require('koa-router');
const router = new Router();

const bookCtrl = require('api/book/book.controller');

router.get('/getBestseller', bookCtrl.getBestseller);

module.exports = router;