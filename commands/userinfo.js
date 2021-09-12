module.exports = {
    name: 'userinfo',
    description: "user info",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000066')
        .setTitle(`USER INFO FOR ${message.author.username}`)
        .addFields(
            {name: 'Username:', value: `${message.author.username}`},
            {name: 'User-ID:', value: `${message.author.id}`},
            {name: 'Time Created:', value: `${message.author.createdAt}`},
            {name: 'Bot:', value: `${message.author.bot}`},
        )
        message.author.send(newEmbed)
    }
}