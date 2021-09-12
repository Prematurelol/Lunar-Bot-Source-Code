module.exports = {
    name: 'partners',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  Lunar Dev PARTNERS  |----')
        .setColor('#ff0f00')
        .setDescription('List of partners.')
        .addFields(
            {name: 'FORTTIME', value: 'discord.gg/vwVxSM5Jrq' , inline: true},

            {name: 'INVERTED', value: '**NO INVITE** **REAL COMPANY**' , inline: true},

            {name: 'TEAM SLXSHY', value: 'discord.gg/jPDGTWXJnU'   ,   inline: true},

           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}
