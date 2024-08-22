const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`4H9hnBLb#Qur3sxU8nc5UvdXbEQrUkhpfWuaFpdGAWC80S0FcJ0Q`,
ALIVE_MSG: process.env.ALIVE_MSG=`Hi I AM ALIVE NOW👋`,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/68d6393c24646149a2a47.jpg",

};
