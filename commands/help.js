const config = require('../config.json');

module.exports = {
    name: 'help',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  Lunar Dev Commands  |----')
        .setColor('#ff0f00')
        .setDescription('List of Commands.')
        .addFields(
            {name: `${config.prefix}download`, value: 'Sends you the download in dms' , inline: true},


            {name: `${config.prefix}website`, value: 'Sends you the website in dms' , inline: true},


            {name: `${config.prefix}help`, value: 'Gives the help list' , inline: true},


            {name: `${config.prefix}userinfo`, value: 'Shows the users info' , inline: true},


            {name: `${config.prefix}membercount`, value: 'Shows the member count for the server ||MODS ONLY||' , inline: true},


            {name: `${config.prefix}embed`, value: 'Repeates a message but embeded' , inline: true},


            {name: `${config.prefix}say`, value: 'Repeats whatever is said' , inline: true},


            {name: `${config.prefix}ticket`, value: 'Ticket-system' , inline: true},


            {name: `${config.prefix}partners`, value: 'Sends you our partners list + invite'  ,  inline: true},


            {name: `${config.prefix}info`, value: 'Bot info' , inline: true},


            {name: `${config.prefix}start_servers`, value: 'Starts the servers ||MODS ONLY||' , inline: true},

            {name: `${config.prefix}stop_servers`, value: 'Stops the servers ||MODS ONLY||' , inline: true},

            {name: `${config.prefix}clear`, value: 'Clears Messages ||MODS ONLY||' , inline: true},

           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}
