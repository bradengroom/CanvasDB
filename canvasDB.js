var http = require('https');
var request = require("request");

function CanvasDB(url, accessToken) {
    this.url = url;
    this.accessToken = accessToken;
}

CanvasDB.prototype.put = function (collection, key, value, callback) {

    request({
        uri: "https://" + this.url + "/api/v1/users/self/custom_data/" + key + "?access_token=" + this.accessToken + "&ns=" + collection + "&data=" + value,
        method: "PUT",
    }, function (error, response, body) {
        callback(JSON.parse(body));
    });
}

CanvasDB.prototype.get = function (collection, key, callback) {

    request({
        uri: "https://" + this.url + "/api/v1/users/self/custom_data/" + key + "?access_token=" + this.accessToken + "&ns=" + collection,
        method: "GET",
    }, function (error, response, body) {
        callback(JSON.parse(body));
    });
}

module.exports = CanvasDB;