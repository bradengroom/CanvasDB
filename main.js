var CanvasDB = require('./canvasDB.js');
var Config = require('./config.json');

var canvasDB = new CanvasDB(Config.schoolURL, Config.accessToken);

canvasDB.put("testCollection", "website", "test", console.log);
canvasDB.get("testCollection", "website", console.log);