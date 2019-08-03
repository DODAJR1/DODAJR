const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "601331176418050074"; // ايدي السررفر
var channel = "601362400079380510";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** محمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمدمحمد **')
    },305);
})



client.on('ready', async() => {
var server = "601331176418050074"; // ايدي السررفر
var channel = "601362400079380510";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "601331176418050074"; // ايدي السررفر
var channel = "601362400079380510";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "306464381775118336") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 
client.on('message', message => {
	if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	if(message.content === '2'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
	if(message.content === '3'){
        message.channel.send('#rep <@306464381775118336>')
    }
});

client.on('message', message => {
     if(message.content === '4'){
        message.member.voiceChannel.join();
    }
});




client.login(process.env.BOT_TOKEN); 
