const config = require('../config')
const {cmd , commands} = require('../command')
const os = requre("os")
const {runtime} = requre('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","info"],
    react: "🪄",
    desc: "Check up time, ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*Uptime:*  ${runtime(process.uptime())}
*Ram Usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*Host Name:* ${os.hostname()}
*Owner:* OFC vishwa
`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
