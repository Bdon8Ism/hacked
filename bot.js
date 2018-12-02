const Discord = require('discord.js');
const bot1 = new Discord.Client();

   const ID2 = '474573718967025665';

bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


bot1.on('message', message => {
  if (!ID2.includes(message.author.id)) return;
 
   let command = message.content.split(" ")[0];
   let args = message.content.split(" ").slice(1);
   if(!args) return message.channel.send(`say <words>`);
 if (command == "say") {
 message.channel.send(args.join("  ")).then(msg => msg.delete(3000));
   }
 });





bot1.login(process.env.FB1);
