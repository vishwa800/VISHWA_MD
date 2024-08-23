//=============BhashiMDSongDL=============

const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎‎*𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*

🎧 ‎𝗧𝗮𝘁𝗶𝗹𝗲 : ${data.title}
⏰ 𝗧𝗶𝗺𝗲 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 : ${data.timestamp}
📤 𝗨𝗽𝗹𝗼𝗮𝗱 𝗢𝗻 : ${data.ago}
🪩 𝗩𝗶𝗲𝘄𝘀 : ${data.views}
‎
Your Song Download Request Uploading Fallowing. You Can See File Audio Type And Document Type.`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:""},{quoted:mek})





}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=============BhashiMDVideoDL=============

cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `‎‎*𝗕𝗛𝗔𝗦𝗛𝗜 𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥*

🎬 ‎𝗧𝗮𝘁𝗶𝗹𝗲 : ${data.title}
⏰ 𝗧𝗶𝗺𝗲 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 : ${data.timestamp}
📤 𝗨𝗽𝗹𝗼𝗮𝗱 𝗢𝗻 : ${data.ago}
🪩 𝗩𝗶𝗲𝘄𝘀 : ${data.views}
‎
Your Video Download Request Uploading Fallowing. You Can See File Video Type And Document Type.`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:""},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
