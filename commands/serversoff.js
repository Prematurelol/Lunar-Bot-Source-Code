module.exports = {
    name: 'serveroff',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  LUNAR DEV SERVER LIST  |----')
        .setColor('#ff0f00')
        .setDescription('List of Servers.')
        .addFields(
            {name: 'SEASON 1', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 2', value: 'OFFLINE' , inline: true},
            
            {name: 'SEASON 3', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 4', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 5', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 6', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 7', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 8', value: 'OFFLINE' , inline: true},

            {name: 'SEASON 9', value: 'OFFLINE' , inline: true},

            {name: 'SEASON X', value: 'OFFLINE' , inline: true},

           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}
