const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "get soms help!",
  run: async(client, message, args) => {

const embed = new MessageEmbed()
    .setTitle("Stop It, Get Some Help!")
    .setDescription("```\nPrefix: !!\nParameters:\n<> - Required\n[] - Optional```")
    .setColor(client.config.embedColor)
    .addField("INFO [2]", ">>> `ping` : **Shows Bot Latency**\n`help` : **Stop It, Get some help!**")
    .addField("TAG SYSTEM [0]", "Coming Soon!")
    .setThumbnail("https://cdn.discordapp.com/emojis/844156428309495809.png")

message.channel.send({ embeds: [embed] })

  }
}