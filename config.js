const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID=`bO4DXDBI#pfskUH_gJJ3TPyRqBcO7ya4orsQXFJ2rS8EFxbBzmA4`,
ALIVE_MSG: process.env.ALIVE_MSG=`Hi I AM ALIVE NOW👋

♤𝐈 𝐀𝐌 𝐕𝐈𝐒𝐇𝐖𝐀-𝐌𝐃 𝐌𝐔𝐋𝐓𝐈𝐃𝐄𝐕𝐈𝐂𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓♢🐰 https://chat.whatsapp.com/EEDH68vR6YT4WE7Otu4kqD

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴋᴏᴅɪᴛʜᴜᴡᴀᴋᴋᴜ☠`,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/68d6393c24646149a2a47.jpg",

};
