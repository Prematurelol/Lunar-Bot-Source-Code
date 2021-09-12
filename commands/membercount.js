module.exports = {
    name: 'membercount',
    description: "membercount",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`MEMBER COUNT FOR ${message.guild.name} SERVER`)
        .addFields(
            {name: 'Member Count:', value: `${message.guild.memberCount}`}
        )
        message.channel.send(newEmbed)
    }
}