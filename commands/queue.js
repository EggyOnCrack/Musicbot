const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voichhhh = new Discord.MessageEmbed()
      .setTitle('Not In Voice Channel')
      .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')

      return message.channel.send(voichhhh)
    }

    //Get queue
    const queue = client.player.getQueue(message.guild.id);

    //If there's no music
    if(!queue) {
      const muscikk = new Discord.MessageEmbed()
      .setTitle('No Music!')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(muscikk)
    }

    //Message
    message.channel.send(`**Server queue ${emotes.queue}**\nCurrent - ${queue.playing.name} | ${queue.playing.author}\n`+
    (
        queue.tracks.map((track, i) => {
            return `#${i+1} - ${track.name} | ${track.author}`
        }).join('\n')
    ));

}