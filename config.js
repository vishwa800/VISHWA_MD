const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`xicjjTIT#HbW5AbxElSMc6EIZDBre8ygBOaJPuBXsPrBC1aDMw9g`,
ALIVE_MSG: process.env.ALIVE_MSG=`Hi I AM ALIVE NOW👋

♤𝐈 𝐀𝐌 𝐕𝐈𝐒𝐇𝐖𝐀-𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓♢🐰

𝐎𝐖𝐍𝐄𝐑 𝐕𝐈𝐒𝐇𝐖𝐀 𝐊𝐎𝐃𝐈𝐓𝐇𝐔𝐖𝐀𝐊𝐊𝐔☘
https://chat.whatsapp.com/EEDH68vR6YT4WE7Otu4kqD

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴋᴏᴅɪᴛʜᴜᴡᴀᴋᴋᴜ☠`,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/68d6393c24646149a2a47.jpg",

};
