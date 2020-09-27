const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
      const voicec = new Discord.MessageEmbed()
      .setTitle('Not In Voice Channel')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')

      return message.channel.send(voicec)
    }

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) {
      const muscice = new Discord.MessageEmbed()
      .setTitle('No Music!')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **There is no music playing in this server!** <a:error:759197955374317579> ')

      return message.channel.send(muscice)
    }

    //Args
    if(!args[0]) {
      const ent = new Discord.MessageEmbed()
      .setTitle('Error')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Enter a number!** <a:error:759197955374317579>')
    }

    //Security modification
    if(isNaN(args[0])) {
      const cou = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(cou)
    }
    if(100 < args[0]) {
      const couc = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(couc)
    }
    if(args[0] <=0) {
      const couch = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(couch)
    }

    //Cannot put (-), (+), (,) or (.)
    if(message.content.includes("-")) {
      const couh = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(couh)
    }
    if(message.content.includes("+")) {
      const coucc = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(coucc)
    }
    if(message.content.includes(",")) {
      const coujj = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(coujj)
    }
    if(message.content.includes(".")) {
      const couhhh = new Discord.MessageEmbed()
      .setTitle('Invalid Number')
      .setColor('RED')
      .setDescription('<a:error:759197955374317579> **Please enter a valid number!** <a:error:759197955374317579>')

      return message.channel.send(couhhh)
    }

    //Set volume
    client.player.setVolume(message.guild.id, parseInt(args.join(" ")));

    //Message
  const jjjj = new Discord.MessageEmbed()
  .setTitle('Volume Updated!')
  .setColor('GREEN')
  .setDescription(`🔊 ${message.author.username} has set the volume to \`${args.join(" ")}\`🔊`)

  message.channel.send(jjjj)

}