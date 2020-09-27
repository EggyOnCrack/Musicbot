const Discord = require("discord.js")
const emotes = require('../config/emojis.json')

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voiceee = new Discord.MessageEmbed()
      .setTitle('Not In Voice Channel')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')

      return message.channel.send(voiceee)
    }

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) {
      const musciii = new Discord.MessageEmbed()
      .setTitle('No Music!')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(musciii)
    }

    const track = await client.player.skip(message.guild.id);

    //Message
    const ski = new Discord.MessageEmbed()
    .setTitle('Skipped!')
    .setColor('GREEN')
    .setDescription(`<a:loading:759200778765205554> ${track.name} has been skipped! <a:loading:759200778765205554>`)
    .addFields({ name: "Skipped By:", value: `${message.author.username}`})

    message.channel.send(ski)

}