module.exports = {
    name: 'server',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  LUNAR DEV SERVER LIST  |----')
        .setColor('#ff0f00')
        .setDescription('List of Servers.')
        .addFields(
            {name: 'SEASON 1', value: 'ONLINE' , inline: true},

            {name: 'SEASON 2', value: 'ONLINE' , inline: true},
            
            {name: 'SEASON 3', value: 'ONLINE' , inline: true},

            {name: 'SEASON 4', value: 'ONLINE' , inline: true},

            {name: 'SEASON 5', value: 'ONLINE' , inline: true},

            {name: 'SEASON 6', value: 'ONLINE' , inline: true},

            {name: 'SEASON 7', value: 'ONLINE' , inline: true},

            {name: 'SEASON 8', value: 'ONLINE' , inline: true},

            {name: 'SEASON 9', value: 'ONLINE' , inline: true},

            {name: 'SEASON X', value: 'ONLINE' , inline: true},

           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}
