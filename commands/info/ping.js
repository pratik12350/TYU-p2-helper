const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
     //   message.channel.send(`${client.ws.ping} ws ping`);

      const msg = await message.channel.send("Pinging...");

      msg.edit(`🏓 Pong!\nWebstock Connection: ${client.ws.ping} ms\nMessage Response Time: ${msg.createdTimestamp - message.createdTimestamp} ms`)
      
    },
};
