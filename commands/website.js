module.exports = {
    name:'website',
    description: "Download Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('----| Lunar Dev Website|----')
        .addFields(
            {name: '--Website--', value: 'https://www.lunar-dev.tk/'},
        )
        .setFooter('Thanks for using Lunar Dev.')

    message.author.send(newEmbed)
        
    }
}
