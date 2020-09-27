const config = require ("../config/bot.json");
const emotes = require ("../config/emojis.json");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  await message.delete()
    const help = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTimestamp(new Date())
    .setDescription('**My Prefix:** `!`')
    .addField("<a:loading:759200778765205554> Join The Server! <a:loading:759200778765205554>", "👉 [[**Support Server**](https://discord.gg/DgTdGff)] 👈")
    .addField("<:bot:759649155063742465> Add Bot to your server! <:bot:759649155063742465>", "👉 [[**Click here**](https://discord.com/oauth2/authorize?client_id=759326141222879293&scope=bot&permissions=8)] 👈")
    .setTitle("Providing Help <a:steps:759200778752753665>")
    .addField("🎵 **Music - (11) 🎵**", "`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`")
    .addField("**Filters - (18)**", "`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`")
    .addField("<a:info:759649555763036240> **Informations - (1) <a:info:759649555763036240>**", "`ping`")
    .setFooter(`To use filters, ${config.prefix}filter (the filter). Example: ${config.prefix}filter 8D.`)
    .setColor("BLUE")

    await message.author.send(help).catch(() => {
      return message.reply("Your DM is still locked. Unlock your DM first.")
      .then(i => i.delete({timeout: 10000}));
    })

    //Message
    const bo = new Discord.MessageEmbed()
    .setTitle('<a:loading:759200778765205554> Help has arrived! <a:loading:759200778765205554>')
    .setDescription('📧**I have sent you a private message!**📧')

    return message.channel.send(bo).then(i => i.delete({timeout: 10000}));

}