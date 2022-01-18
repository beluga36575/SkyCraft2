const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

let botname = "Teszt bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "!help",
        "SkyCraft",
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}ping`){
        message.channel.send("pong");
    }


    if(cmd === `${prefix}szerver`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Szerver útmutatóBOT")
        .addField("Szerver:", "Sziasztok.\nÉn vagyok a szerver útmutatóBOT-ja.\nNekem az a feladatom hogy a játékosoknak tudjak seíteni hogy mi is ez a szerver.")

        message.channel.send(TesztEmbed)
    }
    if(cmd === `${prefix}help`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Szerver útmutatóBOT")
        .addField("Parancsok:", "!ping\n!szerver\n!ticket\n!Szabályok")

        message.channel.send(TesztEmbed)
    }
    if(cmd === `${prefix}ticket`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Szerver útmutatóBOT")
        .addField("Ticket:", "A ticket az arra való hogyha esetleg valami bug van vagy problémád van a szerverrel kapcsolatba akkor ott tudj írni a csapattagoknak.")

        message.channel.send(TesztEmbed)
    }
    if(cmd === `${prefix}szabályok`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Szerver útmutatóBOT")
        .addField("Szabályok:", "Szabályok\n- Nincs 18+ tartalmak\n- Nincs spamelés, áradás vagy láncolás\n- Nincsenek kiskapuk\n- Nincs káromkodás\n- Nincs toxicitás, tiszteletlenség, káros tartalom vagy zaklatás\n- Nincs rajtaütés vagy kizsákmányolás\n- Nincs reklám\n- Nincs csatorna visszaélés\n- Nincs hangos zaj vagy hangos zene\n- Nincs más személyi adata\n- Nincsenek gyanús vagy rosszindulatú linkek")

        message.channel.send(TesztEmbed)
    }    
    
    if (cmd === `${prefix}cigi`) {
        message.channel.send(`${message.author.username} cigi szünetet tart!`).then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 2000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 3500);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 4000);
            setTimeout(() => {
                msg.edit(`${message.author.username} végzett a tüdőt károsító szórakozásával! **Cigizni nem megoldás!**`);
            }, 4500);
        });
    };  
    
})
       
bot.login(tokenfile.token);
