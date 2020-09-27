const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
        const erro = new Discord.MessageEmbed()
        .setTitle('Not In Voice Channel')
        .setDescription('<a:error:759197955374317579> **Error:** You are not in a voice channel! <a:error:759197955374317579>')
        .setFooter(`Try again! ${message.author.username}`)

        return message.channel.send(erro)
    }

    //If there's no music
    if(!client.player.isPlaying(message.guild.id)) {
        const nun = new Discord.MessageEmbed()
        .setTitle('No Music!')
        .setDescription('<a:error:759197955374317579> **Error:** No music is currently playing! <a:error:759197955374317579>')
        .setFooter(`Try again! ${message.author.username}`)

        return message.channel.send(nun)
    }

    const song = await client.player.nowPlaying(message.guild.id);

    //Message
    const embed = new Discord.MessageEmbed()
    .setTitle('Currently Playing')
    .setDescription(`Song: ${song.name} ${emotes.music}\n **Progress:** [${client.player.createProgressBar(message.guild.id)}]`)
    .setFooter(`Requested By ${message.author.username}`)

    message.channel.send(embed)

}