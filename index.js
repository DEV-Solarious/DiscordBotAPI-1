const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjIzMDE0MTM5NjQzNjkxMDA4.XX8veA.j4KDWOghk-05JjHRlOTkloVgqyQ';

const PREFIX = '$';

var version = 'Ver 1.47 inst 39'

bot.on('ready', () =>{
    console.log('bot init complete');
})

bot.on('message', message=>{
     
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
        break;
        case 'website':
            message.channel.sendMessage('Github:REDACTED');
        break;
        case 'getinfo':
            if(args[1] === 'name'){
                message.channel.sendMessage('my name is Nickname Police BOT!');
            }else{
                message.channel.sendMessage('Argument invalid: ERROR CODE/Pandalily')
            }
        break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('PlayerCard')
            .addField('Honorary N-Word', message.author.username)
            .addField('version', version)
            .setColor(0xf1c40f)
            .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed);
        break;
        if (message.content.startsWith('$kick')) {
            // Assuming we mention someone in the message, this will return the user
            // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
            const user = message.mentions.users.first();
            // If we have a user mentioned
            if (user) {
              // Now we get the member from the user
              const member = message.guild.member(user);
              // If the member is in the guild
              if (member) {
                /**
                 * Kick the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 */
                member.kick('Optional reason that will display in the audit logs').then(() => {
                  // We let the message author know we were able to kick the person
                  message.reply(`Successfully kicked ${user.tag}`);
                }).catch(err => {
                  // An error happened
                  // This is generally due to the bot not being able to kick the member,
                  // either due to missing permissions or role hierarchy
                  message.reply('I was unable to kick the member');
                  // Log the error
                  console.error(err);
                });
              } else {
                // The mentioned user isn't in this guild
                message.reply('That user isn\'t in this guild!');
              }
            // Otherwise, if no user was mentioned
            } else {
              message.reply('You didn\'t mention the user to kick!');
            }
          }
        
    }

    }
)
    

bot.login(token);
// kill terminal to kill bot
//init bot:  node .
//Error code pandalily:invalid argument
//