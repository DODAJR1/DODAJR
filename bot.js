const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("605200269525123075")
setInterval(function() {
channel.send(`DODAJR DODAJR DODAJR DODAJR`);
}, 30)
})

client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "345215607417077761") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.login(process.env.BOT_TOKEN);
