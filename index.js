const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("uwu")
})

app.listen(3000, () => {
  console.log('webserver ready!!!!')
})
const { Client, Collection, MessageEmbed } = require("discord.js")

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.on('messageCreate', (message) => {
  if(message.author.bot) return;
  if(message.content === `<@${client.user.id}>`) {
    let embed = new MessageEmbed()
    .setTitle("HELLO!")
    .setDescription(`<:Yveltal:841132745278226442> Hello ${message.author}!\n<:Yveltal:841132745278226442> Im Poketwo Helper For ${message.guild.name}\n<:Yveltal:841132745278226442> Prefix: \`y?\``)
      /*
      .addField("How To Use Tags?", "There are 3 Category of tags.\n\n> stats\n\n> moveset\n\n> info\n\nUse command in `y?<pokemon>-<category>` this syntax!")
  */
      // .setThumbnail("https://cdn.discordapp.com/emojis/844156428309495809.png")
    .setFooter("Use y?tag-help to learn about tags!")
.setColor("RED")
        message.channel.send({ embeds: [embed] })
  }
  
})

client.login(process.env.TOKEN);