const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
const keepAlive = require('./keepAlive.js');

///////////////////////////////// Config.json ///////////////////////////////////

const {prefix, token, bot_age, words_array, bot_info} = require('./config.json');

/////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

///////////////////////////////// Console logs ///////////////////////////////////

client.once('ready', () => {
    console.clear('');
    console.log('------------------------|Bot is online!|------------------------');
    console.log('');
    console.log('Bot has logged in as ' + client.user.tag);
    console.log('');
    console.log(' - Prefix -');
    console.log(prefix)
    console.log('');
    console.log(' - Version -');
    console.log(bot_info.version);
    console.log('');
    console.log('By Pre');
    console.log('')
    client.user.setPresence({ activity: { type: "LISTENING", name: `${prefix} help`}, status: "dnd"})
});

//////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Rules command ///////////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'website'){
        message.reply('Website Sent in **DMS**');
        client.commands.get('website').execute(message, args, Discord);

        
}
});

///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Download command ///////////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'download'){

        client.commands.get('download').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Ticket command ///////////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ticket'){
        message.react('✅');
        message.author.send(`Thank You for Reaching out to support staff. We will be right with you. ${message.author.id}`)
        client.commands.get('ticket').execute(message, args, Discord);
}
});


///////////////////////////////// Member Count command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'members'){
        client.commands.get('membercount').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Say command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'say'){
        client.commands.get('say').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// embed say command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'embeds'){
        client.commands.get('embedsay').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// User info command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// partners command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'partners'){
        client.commands.get('partners').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////  Help command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Bot info command ///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
        client.commands.get('botinfo').execute(message, args, Discord);
}
});

/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Server command 1/2///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'start_servers'){
        message.react('✅');
        message.reply(`Started Servers!`);
        setTimeout(function(){ 

        message.channel.send('Servers started at port: 3000');
        }, 5000);


        setTimeout(function(){ 
        client.commands.get('server').execute(message, args, Discord);
        }, 10000); //time in milliseconds
    }
});

/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// Server command 2/2///////////////////////////////////
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'stop_servers'){
        message.react('❌');
        message.reply(`Stoped Servers!`);
        setTimeout(function(){ 

        message.channel.send('Servers Stopped on port: 3000');
        }, 5000);


        setTimeout(function(){ 
        client.commands.get('serveroff').execute(message, args, Discord);
        }, 10000); //time in milliseconds
    }
});

///////////////////////////////////////////////////////PING COMMAND//////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
         message.react('✅');
         message.reply('Caculating ping...');

         client.commands.get('ping').execute(message, args, Discord);
    }
});



/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
       message.delete()
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`You do not have permission to use this command.`).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
        message.channel.send(`⚠ Clearing Messages.. Please Wait! ⚠️`).then(msg => msg.delete({timeout: 2000}));
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
        }, 1000)
    }
});



/////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////// Token ///////////////////////////////////
  require('./server')();
client.login(process.env.TOKEN);

/////////////////////////////////////////////////////////////////////////// 


















// PING COMMANDS ARGS = 3202@

////////////////////////////////////////////////////////////////////////////////

    //message.react('✅');
   // message.reply('Pong!');
    //setTimeout(function(){

    //  message.author.send('My ping is...' + ping);
    //  message.author.send('My api ping is...' + api);
