/*THIS CODE WAS WRITTEN BY MR vishwa
    - @vishwa
------------------------------------------------------------------
*/
const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📄",
    desc: "cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `

👋 *HELLO ${pushname}*

╭─╰ *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴠɪꜱʜᴡᴀ-ᴍᴅ ᴠ1 」
╰─────────────

╭─「 *Download Menu* = 」
╰──────────────
> ⟡━⟪ *📥* ⟫━⟡
╭────────────◦✘
 ╎ ✗menu1 
╰────────────◦✘

╭─「 *Main Menu* 」
╰──────────────
> ⟡━⟪ *👤* ⟫━⟡
╭────────────◦✘
 ╎ ✗menu2
╰────────────◦✘

╭─「 *Fun Menu* 」
╰──────────────
> ⟡━⟪ *🧘* ⟫━⟡
╭────────────◦✘
 ╎ ✗animegirl
 ╎ ✗dog
 ╎ ✗fact
 ╎ ✗hack 
 ╎ ✗joke
 ╎ ✗quote
 ╎ ✗rvideo 
╰────────────◦✘

╭─「 *Convert Menu* 」
╰──────────────
> ⟡━⟪ *🔄* ⟫━⟡
╭────────────◦✘
 ╎ ✗convert
╰────────────◦✘

╭─「 *Search Menu* 」
╰──────────────
> ⟡━⟪ *🔍* ⟫━⟡
╭────────────◦✘
 ╎ ✗phub
 ╎ ✗srepo
 ╎ ✗yts
╰────────────◦✘

╭─「 *Group Menu* 」
╰──────────────
> ⟡━⟪ *👥* ⟫━⟡
╭────────────◦✘
 ╎ ✗mute
 ╎ ✗unmute
 ╎ ✗promote
 ╎ ✗demote 
 ╎ ✗del
 ╎ ✗remove 
 ╎ ✗add
 ╎ ✗setgoodbye
 ╎ ✗setwelcome
 ╎ ✗getpic
╰────────────◦✘

╭─「 *Owner Menu* 」
╰──────────────
> ⟡━⟪ *🫡* ⟫━⟡
╭────────────◦✘
 ╎ ✗shutdown
 ╎ ✗broadcast
 ╎ ✗setpp
 ╎ ✗block
 ╎ ✗unblock
 ╎ ✗clearchats
 ╎ ✗jid
 ╎ ✗gjid
 ╎ ✗restart
 ╎ ✗setautobio
╰────────────◦✘

╭─「 *News Menu* 」
╰──────────────
> ⟡━⟪ *👤* ⟫━⟡
╭────────────◦✘
 ╎ ╰hiru
 ╎ ✗derana
 ╎ ✗sirasa
 ╎ ✗lankadeepa
 ╎ ✗bbc
╰────────────◦✘

╭─「 *Other Menu* 」
╰──────────────
> ⟡━⟪ *📜* ⟫━⟡
╭────────────◦✘
 ╎ ✗define
 ╎ ✗githubstalk
 ╎ ✗gpass
 ╎ ✗trt
 ╎ ✗weather 
╰────────────◦✘
😼 *ᴠɪꜱʜᴡᴀ-ᴍᴅ*

> Hey ᴛʜɪꜱ ɪꜱ ᴠɪꜱʜᴡᴀ-ᴍᴅ ᴡᴀ ʙᴏᴛ

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
_____________________________________

┌─ 📊 *DASHBOARD* ─┐
│
├─ 🩵 *User*: ${pushname}
├─ 🩵 *Mode*: Public
│
├─ 🤖 *INFO BOT* ─┐
│
├─ ❯ *ɴᴀᴍᴇ ʙᴏᴛ*: 𝙲𝙷𝙰𝙼𝙸 ᴍᴅ ᴠ2
├─ ❯ *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}
├─ ❯ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
├─ ❯ *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
├─ ❯ *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└─ ❯ *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
│
└─ 💐 Thank you for usinʙᴏᴛ *ᴠɪꜱʜᴡᴀ-ᴍᴅ!*✗`
`
await conn.sendMessage(from,{image:{url:"https://i.ibb.co/YhYStZ8/IMG-20240923-WA0006.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})


const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu1",
    react: "📄",
    desc: "cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `

👋 *HELLO ${pushname}*

╭─「 *Welcome ᴛᴏ ᴠɪꜱʜᴡᴀ-ᴍᴅ* 」
╰─────────────

╭─「 *Download Menu* 」
╰──────────────
> ⟡━⟪ *📥* ⟫━⟡
╭────────────◦✘
 ╎ ✗apk
 ╎ ✗fb
 ╎ ✗tiktok
 ╎ ✗twitter 
 ╎ ✗gdrive
 ╎ ✗mediafire 
 ╎ ✗ig
 ╎ ✗movie 
╰────────────◦✘
😼 *ᴠɪꜱʜᴡᴀ-ᴍᴅ✗*

> ʜᴇʏ ᴛʜɪꜱ ɪꜱ ᴠɪꜱʜᴡᴀ-ᴍᴅ ᴡᴀ ʙᴏᴛ

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
_____________________________________

┌─ 📊 *DASHBOARD* ─┐
│
├─ 🩵 *User*: ${pushname}
├─ 🩵 *Mode*: Public
│
├─ 🤖 *INFO BOT* ─┐
│
├─ ❯ *ɴᴀᴍᴇ ʙᴏᴛ*: 𝙲𝙷𝙰𝙼𝙸 ᴍᴅ ᴠ2
├─ ❯ *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}
├─ ❯ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
├─ ❯ *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
├─ ❯ *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└─ ❯ *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
│
└─ 💐 Thank you for using *ᴠɪꜱʜᴡᴀ-ᴍᴅ* ✗`

await conn.sendMessage(from,{image:{url:"https://i.ibb.co/YhYStZ8/IMG-20240923-WA0006.jpg"},caption:madeMenu},{quoted:mek})


cmd({
    pattern: "menu2",
    react: "📄",
    desc: "cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `

👋 *HELLO ${pushname}*

╭─「 *Welcome to ᴠɪꜱʜᴡᴀ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ* 」
╰─────────────
╭─「 *Main Menu* 」
╰──────────────
> ⟡━⟪ *👤* ⟫━⟡
╭────────────◦✘
 ╎ ✗about
 ╎ ✗ai
 ╎ ✗alive
 ╎ ✗menu
 ╎ ✗owner
 ╎ ✗ping
 ╎ ✗repo
 ╎ ✗support
 ╎ ✗system 
╰────────────◦✘
😼𝗩𝗜𝗦𝗛𝗪𝗔-𝗠𝗗
*ʜᴇʏ ᴛʜɪꜱ ᴠɪꜱʜᴡᴀ-ᴍᴅ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ ᴡᴀ ʙᴏᴛ ᴍᴇɴᴜ*♻️

*ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
_____________________________________

┌─ 📊 *DASHBOARD* ─┐
│
├─ 🩵 *User*: ${pushname}
├─ 🩵 *Mode*: Public
│
├─ 🤖 *INFO BOT* ─┐
│
├─ ❯ *ɴᴀᴍᴇ ʙᴏᴛ*: 𝙲𝙷𝙰𝙼𝙸 ᴍᴅ ᴠ2
├─ ❯ *ᴘʟᴀᴛꜰᴏʀᴍ:* ${hostname}
├─ ❯ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
├─ ❯ *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
├─ ❯ *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└─ ❯ *ᴠᴇʀsɪᴏɴs* : ${require("../package.json").version}
│
└─ 💐 Thank you for using *VISHWA-MD✅*`


await conn.sendMessage(from,{image:{url:"https://i.ibb.co/YhYStZ8/IMG-20240923-WA0006.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
