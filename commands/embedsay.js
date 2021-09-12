const Discord = require('discord.js');

module.exports = {
  name: 'embedsay',
  description: 'repeates a message but embeded',
  execute(message, args){
  if (args.length > 0)
				var embedtext = new Discord.MessageEmbed()
			.setColor('#ff0f00')
			.setDescription(args.join(' '));
			else
			message.reply('send a message to make it as an embed');
				       
			message.channel.send(embedtext);
  }
}