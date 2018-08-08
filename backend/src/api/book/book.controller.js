const request = require('request');
const rp = require('request-promise-native');

exports.getBestseller = async ctx => {
    var options = () => {
        return new Promise(
            (resolve, reject) => {
                const result = rp('http://book.interpark.com/api/bestSeller.api?key=C30C652C41CD9828D54CFC7F7557B8D4F9FB5E366351EDB85C5470BDF3DB3D2B&categoryId=100&output=json');
                resolve(result);
            }
        );
    };

    var wait = await options();
    var result = JSON.parse(wait);

    ctx.body = {
        result: result
    };
};