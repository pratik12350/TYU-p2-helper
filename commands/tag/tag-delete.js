const Schema = require('../../models/tagSchema')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'tag-delete',
  aliases: ["t-d"],
  description: "",
  run: async(client, message, args) => {

if(!message.member.roles.cache.get("839794402674343946")) return message.reply("HAHAHA You need staff role to use this command!")
    
const tagName = args.join(" ");
// const tagRes = args.slice(1).join(" ");

 if(!tagName) return message.channel.send("Provide a tag name dumbass")

const data = await Schema.findOne({
  Guild: message.guild.id,
  Tag: tagName
})

if(!data) return message.channel.send("That Command Doesn't Exists you sussy baka")
    
await Schema.findOneAndDelete({
  Guild: message.guild.id,
  Tag: tagName
})

    message.channel.send(`Successfully Deleted **${tagName}**`)
 }
}