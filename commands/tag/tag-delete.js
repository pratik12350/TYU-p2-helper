const Schema = require('../../models/tagSchema')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'tag-delete',
  aliases: ["t-d"],
  description: "",
  run: async(client, message, args) => {

let role = message.member.roles.cache.get("931863689882132500") || message.member.roles.cache.get("931863157633347664")

if(!role) return message.reply("HAHAHA You need staff role to use this command!")
    
    
const tagName = args.join(" ");
// const tagRes = args.slice(1).join(" ");

 if(!tagName) return message.reply("Provide a tag name bruh")

const data = await Schema.findOne({
  Guild: message.guild.id,
  Tag: tagName
})

if(!data) return message.reply("That Command Doesn't Exists you sussy baka")
    
await Schema.findOneAndDelete({
  Guild: message.guild.id,
  Tag: tagName
})

    message.reply(`Successfully Deleted **${tagName}**`)
 }
}