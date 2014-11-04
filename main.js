var CanvasDB = require('./canvasDB.js');
var Config = require('./config.json');

var canvasDB = new CanvasDB(Config.schoolURL, Config.accessToken);
canvasDB.put("testCollection", "testKey", "testValue", console.log);
canvasDB.get("testCollection", "testKey", console.log);