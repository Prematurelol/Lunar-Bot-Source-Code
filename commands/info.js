const config = require('../config.json');


        let info1 = `v3.0.0`
        let info2 = `Node v12`
        let info3 = `Discord.js v12`
        let info4 = `˞K#0001`
        let info5 = `10`
        let info6 = `.`

module.exports = {
    name: 'botinfo',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  BOT INFO  |----')
        .setColor('#ff0f00')
        .setDescription('Lunar Bot Info.')
            .addField(`Version:`, info1, true)
            .addField(`Node Version:`, info2, true)
            .addField(`Coded in:`, info3, true)
            .addField(`Prefix:`, info6, true)
            .addField(`Commands:`, info5, true)
            .addField(`Bot By:`, info4, true)
            
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}
