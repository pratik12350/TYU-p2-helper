const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "get soms help!",
  run: async(client, message, args) => {

const embed = new MessageEmbed()
    .setTitle("Stop It, Get Some Help!")
    .setDescription("```\nPrefix: y?\nParameters:\n<> - Required\n[] - Optional```")
    .setColor(client.config.embedColor)
    .addField("INFO [2]", ">>> `ping` : **Shows Bot Latency**\n`help` : **Stop It, Get some help!**")
    .addField("TAG SYSTEM [3]", ">>> `tag-create <name> <response>` : **Create Custom Tags**\n`tag-delete <name>` : **Delete a tag**\n`tag-help` : **Learn how to use tags!**")
    .setThumbnail("https://cdn.discordapp.com/emojis/844156428309495809.png")

message.reply({ embeds: [embed] })

  }
}