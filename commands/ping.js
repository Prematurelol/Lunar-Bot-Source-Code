module.exports = {
    name: 'ping',
    description: "default ping command",
    execute(message, args, text, client){
      setTimeout(function(){ 
        message.author.send('.').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            message.author.send(`Bot latency: ${ping}`);
            }, 10000);
        })

    }
}
