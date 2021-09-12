# Discord.js Bot Template

Hello, This is my Discord.js bot template I created. I will update this template often. Anyone can use this code to create your bot.

## Installation

Go to the `secrets` tab and create a new secret with `TOKEN` as its `key` and your bot's token as the `value`

Go to `config.json` and change the prefix

## Add new commands


Create a new file in the `commands` folder and type this:

```
module.exports = {
    name: '',
    description: "",
    execute(message, args, text, client){
    //bot function

    }
}
```

## Add new wait commands

```
module.exports = {
    name: '',
    description: "",
    execute(message, args, text, client){
    setTimeout(function(){ 
    // bot funtion
            }, 10000);
        })

    }
}
```

## UptimeRobot

Register in [UptimeRobot.](https://uptimerobot.com) select http(s) option and paste `{repl name}.{your name}.repl.co`