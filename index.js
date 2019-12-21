const Discord = require("discord.js");
let bot = new Discord.Client();
bot.on("ready",function(){
    console.log("Ready");
})
bot.on("message",message=>{
    if(message.author.equals(bot.user)) return;
    if (message.author.bot) return; 
    let MessageArr = message.content.split(" ");
    let cmd = MessageArr[0];
    let args = MessageArr.slice(1);
    if(cmd == "!dmall"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have permissions to use that command.");
        let messagee = args.join(" ");
        if(!messagee) return message.channel.send("please give me message for dm all");
        else{
            message.guild.members.forEach(member=>{
                member.send(messagee).then(()=>{
                    console.log("sent mesasge to: "+member.user.tag+" Successfully");
                }).catch(function(){
                    console.log("An error occured to dm: "+member.user.tag+".");
                });
            })
        }
    }
})

bot.login("token_here");
