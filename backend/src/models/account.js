const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { generateToken } = require('lib/token');

function hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
};

const Account = new Schema({
    profile: {
        nickname: String,
        thumbnail: {type: String, default: '/images/default_thumbnail.png'}
    },
    id: String,
    pw: String,
    createdAt: {type: Date, default: Date.now}
});

Account.statics.findById = function(id) {
    return this.findOne({id}).exec();
};

Account.statics.findByNickname = function(nickname) {
    return this.findOne({'profile.nickname': nickname}).exec();
};

Account.statics.findIdOrUsername = function({id, nickname}) {
    return this.findOne({
        $or: [
            {'profile.nickname': nickname},
            {id}
        ] 
    }).exec();
};

Account.statics.register = function({id, nickname, pw}) {
    const account = new this({
        profile: {
            nickname
        },
        id,
        pw: hash(pw)
    });

    return account.save();
};

Account.methods.valipassword = function(password) {
    const hashed = hash(password);
    return this.pw === hashed;
};

Account.methods.generateToken = function() {
    const payload = {
        _id: this._id,
        profile: this.profile
    };

    return generateToken(payload, 'account');
};

module.exports = mongoose.model('Account', Account);