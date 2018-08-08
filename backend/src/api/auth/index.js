const Router = require('koa-router');
const router = new Router();

const authCtrl = require('./auth.controller.js');

router.post('/register', authCtrl.register);
router.get('/exists/:key(id|nickname)/:value', authCtrl.exists);
router.post('/login', authCtrl.login);
router.get('/check', authCtrl.check);

module.exports = router;