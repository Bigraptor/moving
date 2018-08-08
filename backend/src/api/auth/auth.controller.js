const Joi = require('joi');
const Account = require('models/account');

exports.register = async (ctx) => {
    const schema = Joi.object().keys({
        id: Joi.string().alphanum().min(4).max(10).required(),
        nickname: Joi.string().regex(/^[a-zA-Z0-9가-하]{3,7}$/).required(),
        pw: Joi.string().min(4).required()
    });
    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        return;
    }

    let existing = null;
    try{
        existing = await Account.findIdOrUsername(ctx.request.body);
    }catch(e) {
        ctx.throw(500, e);
    }

    if(existing) {
        ctx.status = 409;
        ctx.body = {
            key: existing.id === ctx.request.body.id ? 'id' : 'nickname'
        };

        return;
    }

    let account = null;

    try{
        account = await Account.register(ctx.request.body);
    }catch(e) {
        ctx.throw(500, e);
    }

    let token = null;
    try{
        token = await account.generateToken();
    }catch(e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    ctx.body = account.profile;
};

exports.login = async ctx => {
    const schema = Joi.object().keys({
        id: Joi.string().required(),
        pw: Joi.string().required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400;
        return;
    }

    const { id, pw } = ctx.request.body;
    let exist = null;
    try{
        exist = await Account.findById(id);
    }catch(e) {
        ctx.throw(500, e);
    }
    
    if(!exist || !exist.valipassword(pw)) {
        ctx.status = 403;
        return;
    }

    let token = null;
    try{
        token = await exist.generateToken();
    }catch(e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});

    ctx.body = exist.profile;
};

exports.exists = async ctx => {
    const { key, value } = ctx.params;

    let exists = null;

    try{
        exists = await (key === 'id' ? Account.findById(value) : Account.findByNickname(value));
    }catch(e) {
        ctx.throw(500, e);
    }

    ctx.body = {
        exist: exists !== null
    };
};

exports.check = (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403;
        return;
    }

    ctx.body = user.profile;
};