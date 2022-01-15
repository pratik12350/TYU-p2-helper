const client = require("../index");
const Schema = require('../models/tagSchema');

client.on("messageCreate", async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLowerCase().startsWith(client.config.prefix)
  )
    return;

  const [cmd, ...args] = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);

const data = await Schema.findOne({ Guild: message.guild.id, Tag: cmd})

if (data) {
  message.channel.send(`${data.Response}`)
} // else return;
  
  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases ?.includes(cmd.toLowerCase()));

  if (!command) return;
  await command.run(client, message, args);
});
