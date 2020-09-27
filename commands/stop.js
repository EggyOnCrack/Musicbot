const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voi = new Discord.MessageEmbed()
      .setTitle('Not In Voice Channel')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **You are not in a voice channel!** <a:error:759197955374317579>')

      return message.channel.send(voi)
    }

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) {
      const musc = new Discord.MessageEmbed()
      .setTitle('No Music!')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(musc)
    }

    //Stop player
    client.player.setRepeatMode(message.guild.id, false);
    client.player.stop(message.guild.id);

    //Message
    const sto = new Discord.MessageEmbed()
    .setTitle('The Music Has Stopped!')
    .setColor('GREEN')
    .setDescription(`<a:loading:759200778765205554> Music has been stopped by: ${message.author.username} <a:loading:759200778765205554>`)

    message.channel.send(sto)

}