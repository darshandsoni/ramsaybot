'use strict';

var RamsayBot = require('../lib/ramsaybot');

var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var norrisbot = new RamsayBot({
    token: token,
    dbPath: dbPath,
    name: name
});

norrisbot.run();
