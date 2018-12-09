const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = 'd'
const developers = ["الاي دي حق حسابك"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`:white_check_mark: Changing The Playing Mode To **${argresult}** :white_check_mark:  `)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark: Successfully Changing The Watching Mode To **${argresult}** :white_check_mark: `)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark: Successfully Changing The Listening Mode To **${argresult}** :white_check_mark: `)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`:white_check_mark: Successfully Changing The Streaming Mode To **${argresult}** :white_check_mark: `)
  }
  if (message.content.startsWith(adminprefix + 'setn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'seta')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515919593710288937");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To __𝓗𝓞𝓣 𝓡𝓮𝔀𝓪𝓻𝓭𝓼__ Server ** :rose: `), 4000)        
}
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء