const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605200269525123075")
setInterval(function() {
channel.send(`DODAJR DODAJR DODAJR DODAJR`);
}, 30)
})

client.login(process.env.BOT_TOKEN);