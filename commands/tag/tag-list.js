const { MessageEmbed } = require('discord.js');
const Schema = require('../../models/tagSchema')

module.exports = {
  name: 'tag-help',
  aliases: ["t-h"],
  description: "how 2 use tag",
  run: async(client, message, args) => {

    /*
const data = await Schema.find({
  Guild: message.guild.id
})

    if(!data) return message.channel.send("0 Tags LOL")

    const description = data.map((d, i) => {
      
return [ `${i + 1} • ${d.Tag}` ]
      
    }).join("\n")

if(description.length > 4096) return message.reply('Damn To Many Tags To Show. my developer is trying to add pagination Please wait!')
    
let embed = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(description)
    .setTitle("Tags List")

message.channel.send({ embeds: [embed] })

    */

const embed = new MessageEmbed()
    .setTitle("How To use Tags??1?")
    .setDescription("There are 3 Category of tags.\n\n> stats\n\n> moveset\n\n> info\n\nUse command in `!!<pokemon>-<category>` this syntax!")
  .setThumbnail("https://cdn.discordapp.com/emojis/844156428309495809.png")

    .setColor("BLURPLE")

  message.channel.send({ embeds: [embed] })}
}