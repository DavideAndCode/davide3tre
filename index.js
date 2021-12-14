const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
})


client.on("guildMemberAdd", async (member) => {
    var embed1 = new Discord.MessageEmbed()
    .setTitle(`Benvenuto in DavideAndCommunity`)
    .setDescription(`Hey ${member}, benvenuto su **${member.guild.name}**!`)
    .setImage(member.user.displayAvatarURL())
    .setFooter("Lo staff ti augura una buona permanenza nel server")

    await client.channels.cache.get("806264322829189130").send({ content: `||${member}||`, embeds: [embed1] })
})

client.on("guildMemberRemove", async (member) => {
    var embed1 = new Discord.MessageEmbed()
    .setTitle(`Addio in DavideAndCommunity`)
    .setDescription(`Hey ${member}, Addio su **${member.guild.name}**!`)
    .setImage(member.user.displayAvatarURL())
    .setFooter("Addio, grazie di essere stato su questo server!")

    await client.channels.cache.get("898217155030581248").send({ content: `||${member}||`, embeds: [embed1] })
})

client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {
        if (message.content.trim() == "!avatar") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }
        if (!utente) {
            message.channel.send("Utente non trovato")
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("L'avatar di questo utente")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
            message.channel.send({embeds: [embed]})
    }
})

    client.login("JLzBKT2K5DglWlhh-Y2maM1V1Rw1Rt39")

   
const ytch = require("yt-channel-info")


setInterval(function(){ 
var canale = client.channels.cache.get("904669878059950121")
ytch.getChannelInfo("UCbc1DmH5T8Dc0vqbasZr2bA")
.then(response => {
    console.log(response)
    canale.setName(`🧑│Subscribers: ${response.subscriberCount}`)
 })
}, 1000 * 60)


client.on("messageCreate", message  => {
    if (message.content == "!lastvideo") {
        const channelId = ("UCbc1DmH5T8Dc0vqbasZr2bA")
        const sortBy = 'newest'
        ytch.getChannelVideos(channelId, sortBy).then((response) => {
                var embed = new Discord.MessageEmbed()
                .setTitle(response.items[0].title)
                .setURL("https://www.youtube.com/watch?v=" + response.items[0].videoId)
                .setThumbnail(response.items[0].videoThumbnails[3].url)
                .addField("Views", response.items[0].viewCount.toString(), true)
                .addField("Duration", response.items[0].durationText, true)
                .addField("Published", response.items[0].publishedText, true)

                message.channel.send({ embeds: [embed] })
        })
    }
})
console.log("Ciao")

client.login(process.env.token)

client.on('ready', () => {
    //Stato classico (Sta guardando..., Sta giocando a...)
    client.user.setActivity('!help', { type: 'WATCHING' }); 

    //Stato online/offine/non disturbare...
    client.user.setStatus('Sta guardando !help') //Oppure idle, dnd, invisible
})


client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    member.roles.add("898201334430462002");
});


