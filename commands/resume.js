const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voicv = new Discord.MessageEmbed()
      .setTitle('Not In Voice Channel')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')

      return message.channel.send(voicv)
    }

    //Get song
    const song = await client.player.resume(message.guild.id);

    //If there's no music
    if(!song) {
      const muscicc = new Discord.MessageEmbed()
      .setTitle('No Music!')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(muscicc)
    }

    //Message
    const resumed = new Discord.MessageEmbed()
    .setTitle('Song Resumed!')
    .setColor('GREEN')
    .setDescription(`<a:loading:759200778765205554> ${song.name} has been resumed! <a:loading:759200778765205554>`)
    .addFields({ name: 'Resumed By:', value: `${message.author.username}`})

    message.channel.send(resumed)

}