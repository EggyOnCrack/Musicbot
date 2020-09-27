const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    //If the member is not in a voice channel
    if(!message.member.voice.channel) {
        const voic = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Not In Voice Channel')
        .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You are not in a voice channel! <a:error:759197955374317579>')
  
        return message.channel.send(voic)
    }

    //If no music is provided
    if (!args[0]) {
        const kkcqk = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Music Error')
        .setDescription('<a:error:759197955374317579> **DiscordAPI Error:** You must specify a song to play! <a:error:759197955374317579>')

        return message.channel.send(kkcqk)
    }

    const aTrackIsAlreadyPlaying = client.player.isPlaying(message.guild.id);

        //If there's already a track playing 
        if(aTrackIsAlreadyPlaying){

            //Add the track to the queue
            const result = await client.player.addToQueue(message.guild.id, args.join(" ")).catch(() => {});
            if(!result) {
                message.member.voice.channel.leave()
                const proi = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Unkown Error')
                .setDescription('<a:error:759197955374317579> **Unkown Error:** Provided Link is not supported! <a:error:759197955374317579>')

                return message.channel.send(proi)
            };

            if(result.type === 'playlist'){
                message.channel.send(`${result.tracks.length} songs added to the queue ${emotes.music}`);
            } else {
                const addeg = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Queued!')
                .setDescription(`<a:loading:759200778765205554> I have added the following song: ${result.name} to the queue! <a:loading:759200778765205554>`)

                message.channel.send(addeg)
            }

        } else {

            //Else, play the song
            const result = await client.player.play(message.member.voice.channel, args.join(" ")).catch(() => {});
            if(!result) {
                message.member.voice.channel.leave()
                const proiv = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Unkown Error')
                .setDescription('<a:error:759197955374317579> **Unkown Error:** Provided Link is not supported! <a:error:759197955374317579>')

                return message.channel.send(proiv)
            };

            if(result.type === 'playlist'){
                const emb = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Update!')
                .setDescription(`${result.tracks.length} songs added to the queue ${emotes.music}\nCurrently playing ${result.tracks[0].name}`)
            } else {
                const jkjk = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle('Currently Playing!')
                .setDescription(`<a:loading:759200778765205554> **Song Name:** ${result.name} <a:loading:759200778765205554>`)
                .addFields({ name: "Requested By", value: `${message.author.username}`})

                message.channel.send(jkjk)
            }

            const queue = client.player.getQueue(message.guild.id)

            //Events
            .on('end', () => {
                const que = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription('<a:error:759197955374317579> **Empty queue! Please add something to the queue to continue!** <a:error:759197955374317579>')

                message.channel.send(que)
            })
            .on('trackChanged', (oldTrack, newTrack) => {
                const ne = new Discord.MessageEmbed()
                .setTitle('Song Update!')
                .setColor('GREEN')
                .setDescription(`<a:loading:759200778765205554> Now playing: ${newTrack.name} <a:loading:759200778765205554>`)

                message.channel.send(ne)
            })
            .on('channelEmpty', () => {
                message.channel.send(`Music stopped, there are no more members in the voice channel ${emotes.error}`);
            });
        }
    }