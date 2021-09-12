module.exports = {
    name:'download',
    description: "Download Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#baa7ea')
        .setTitle('----| Download Lunar Dev|----')
        .addFields(
            {name: '--Download Link--', value: 'https://www.lunar-dev.tk/hybrid'},
        )
        .setFooter('Thanks for using Lunar Dev.')

    message.author.send(newEmbed)
        
    }
}
