const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voicc = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('Not In Voice Channel')
      .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')

      return message.channel.send(voicc)
    }

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) {
      const music = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle('No Music!')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(musci)
    }

    const track = await client.player.pause(message.guild.id);

    //Message
    const paused = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Song Paused!')
    .setDescription(` ${track.name} has been paused! ${emotes.pause}`)
    .addFields({ name: 'Paused By:', value: `${message.author.username}`})

    message.channel.send(paused)

}