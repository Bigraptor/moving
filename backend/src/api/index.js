const Router = require('koa-router');
const router = new Router();

const auth = require('api/auth');
const book = require('api/book');

router.use('/auth', auth.routes());
router.use('/book', book.routes());

module.exports = router;