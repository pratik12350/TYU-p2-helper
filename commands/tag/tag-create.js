const Schema = require('../../models/tagSchema')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'tag-create',
  aliases: ["t-c"],
  description: "",
  run: async(client, message, args) => {

let role = message.member.roles.cache.get("931863689882132500") || message.member.roles.cache.get("931863157633347664")

if(!role) return message.reply("HAHAHA You need staff role to use this command!")
    
const tagName = args[0]
const tagRes = args.slice(1).join(" ");

if(!tagName) return message.channel.send(":x: Provide Tag Name!")
if(!tagRes) return message.channel.send(":x: Provide Tag Response!")
    
if(tagName.length > 500) return message.channel.send("Woah, Tag name should be under 500 Characters!")
if(tagRes.length > 500) return message.channel.send("Woah, Tag response should be under 500 Characters!")

const data = await Schema.findOne({
  Guild: message.guild.id,
  Tag: tagName
})

console.log(data)
  
    if(data) return message.channel.send("This Command Already Exists!")

    const newData = new Schema({
      Guild: message.guild.id,
      Tag: tagName,
      Response: tagRes
    })

    await newData.save()

    let doneEmbed = new MessageEmbed()
    .setDescription("Done! New tag created!")
    .setColor(client.config.embedColor)

message.channel.send({ embeds: [doneEmbed] })
  }
}