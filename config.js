const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`2Sh1nazZ#b1su7pHW5yMXwsfZ-9f18UuERh6Vl436iUtGw15Ev90`,
ALIVE_MSG: process.env.ALIVE_MSG=`Hi I AM ALIVE NOW👋`,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/68d6393c24646149a2a47.jpg",

};
