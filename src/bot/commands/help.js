const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "auda"],
 
run: async (bot, message, args) => { //async
      //--------------------------------------S T A R T--------------------------------------//
 
      message.react('887650847327158343');


                const embed = new Discord.MessageEmbed()
                .setTitle(`From Minnal Craft`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`_**Click On the Select Menu Below to __Swap__ help Pages**_\n🏠 - Home Page\n🎟️ - Commands ( tickets )\n🏠 - About MINNALCRAFT\n📔 - About Me`)
                .setColor(`#0x2F3136`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Bot Commands`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Here Are My Commands:__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
                .setColor(`#0x2F3136`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`ABOUT MINNAL CRAFT`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**MINNAL CRAFT IS A MINECRAFT SERVER WITH 200+ MEMBERS**`)
                .setColor(`#0x2F3136`)

                // Last embed
                const embed4 = new Discord.MessageEmbed()
                .setTitle(`About Me`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**I was Made by, \`𝓢𝓜𝓞𝓞𝓣𝓗#1789\`!\n\nJoin my support [server](https://discord.gg/DAkSpgH4rn)**`)
                .setColor(`#0x2F3136`)

                //-----------------------------OPTIONS----------------------
        //examples .setLabel('Put What You Want to put')
        //.setValue('')
        //.setDescription('put what u wantnto put')
 
        let option1 = new MessageMenuOption()
        .setLabel('Home Page')
        .setValue('option1')
        .setEmoji("🏠")
        .setDescription('Home Page')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("🎫")
        .setDescription('View Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Minnal Craft')
        .setValue('option3')
        .setEmoji("🏠")
        .setDescription('Where I Come From')
  
      let option4 = new MessageMenuOption()
        .setLabel('About Me')
        .setValue('option4')
        .setEmoji("📔")
        .setDescription('View My About')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Choose From Here')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type the help command\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("This help menu is expired! Please retype the \`Help Command\`")
        .setFooter("MINNAL CRAFT"))
    })

    }
}