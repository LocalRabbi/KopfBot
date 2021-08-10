require('dotenv').config();

const { Client, MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs')
const client = new Client();
// Corinna Kopf
const attachment1 = new MessageAttachment('./kopf/1.png');
const attachment2 = new MessageAttachment('./kopf/2.png');
const attachment3 = new MessageAttachment('./kopf/3.jpg');
const attachment4 = new MessageAttachment('./kopf/4.jpg');
const attachment5 = new MessageAttachment('./kopf/5.jpg');
const attachment6 = new MessageAttachment('./kopf/6.jpg');
const attachment7 = new MessageAttachment('./kopf/7.jpg');
const attachment8 = new MessageAttachment('./kopf/8.jpg');
const attachment9 = new MessageAttachment('./kopf/9.jpg');
const attachment10 = new MessageAttachment('./kopf/10.jpg');
const attachment11 = new MessageAttachment('./kopf/11.jpg');
const attachment12 = new MessageAttachment('./kopf/12.jpg');
const attachment13 = new MessageAttachment('./kopf/13.jpg');
const attachment14 = new MessageAttachment('./kopf/14.jpg');
const attachment15 = new MessageAttachment('./kopf/15.jpg');
const attachment16 = new MessageAttachment('./kopf/16.jpg');
const attachment17 = new MessageAttachment('./kopf/17.jpg');
const attachment18 = new MessageAttachment('./kopf/18.jpg');
const attachment19 = new MessageAttachment('./kopf/19.jpg');
const attachment20 = new MessageAttachment('./kopf/20.jpg');
const attachment21 = new MessageAttachment('./kopf/21.jpg');
const attachment22 = new MessageAttachment('./kopf/22.jpg');
const attachment23 = new MessageAttachment('./kopf/23.jpg');
const attachment24 = new MessageAttachment('./kopf/24.jpg');
const attachment25 = new MessageAttachment('./kopf/25.jpg');
const attachment26 = new MessageAttachment('./kopf/26.jpg');
const attachment27 = new MessageAttachment('./kopf/27.jpeg');
const attachment28 = new MessageAttachment('./kopf/28.jpeg');
const attachment29 = new MessageAttachment('./kopf/29.jpg');
const attachment30 = new MessageAttachment('./kopf/30.jpg');
const attachment31 = new MessageAttachment('./kopf/31.jpg');
const attachmentv1 = new MessageAttachment('./kopf/v1.mp4');
//Tana Mongeau
const attachmentt1 = new MessageAttachment('./tana/1.jpg');
const attachmentt2 = new MessageAttachment('./tana/2.jpg');
const attachmentt3 = new MessageAttachment('./tana/3.jpeg');
const attachmentt4 = new MessageAttachment('./tana/4.jpg');
const attachmentt5 = new MessageAttachment('./tana/5.jpg');
const attachmentt6 = new MessageAttachment('./tana/6.jpg');
const attachmentt7 = new MessageAttachment('./tana/7.jpg');
const attachmentt8 = new MessageAttachment('./tana/8.jpg');
const attachmentt9 = new MessageAttachment('./tana/9.jpg');
const attachmentt10 = new MessageAttachment('./tana/10.jpg');
const attachmentt11 = new MessageAttachment('./tana/11.jpg');
const attachmentt12 = new MessageAttachment('./tana/12.jpg');
const attachmentt13 = new MessageAttachment('./tana/13.jpg');
const attachmenttv1 = new MessageAttachment('./tana/v1.mp4');
const attachmenttv2 = new MessageAttachment('./tana/v2.mp4');
const attachmenttv3 = new MessageAttachment('./tana/v3.mp4');
const attachmenttv4 = new MessageAttachment('./tana/v4.mp4');
const attachmenttv5 = new MessageAttachment('./tana/v5.mp4');
//Belle Delphine
const attachmentttt1 = new MessageAttachment('./belle/2.jpg')
const attachmentttt3 = new MessageAttachment('./belle/4.jpg')
const attachmentttt4 = new MessageAttachment('./belle/5.jpg')
const attachmentttt5 = new MessageAttachment('./belle/6.jpg')
const attachmentttt6 = new MessageAttachment('./belle/7.jpg')
const attachmentttt7 = new MessageAttachment('./belle/8.jpg')
const attachmentttt8 = new MessageAttachment('./belle/9.jpg')
const attachmentttt9 = new MessageAttachment('./belle/10.jpg')
const attachmentttt11 = new MessageAttachment('./belle/12.jpg')
const attachmentttt12 = new MessageAttachment('./belle/13.jpg')
const attachmentttt13 = new MessageAttachment('./belle/14.jpg')
const attachmentttt14 = new MessageAttachment('./belle/15.jpg')
const attachmentttt15 = new MessageAttachment('./belle/16.jpg')
const attachmentttt16 = new MessageAttachment('./belle/17.jpg')
const attachmentttt17 = new MessageAttachment('./belle/18.jpg')
const attachmentttt18 = new MessageAttachment('./belle/19.jpg')
const attachmentttt19 = new MessageAttachment('./belle/20.jpg')
const attachmentttt20 = new MessageAttachment('./belle/21.jpg')
const attachmentttt21 = new MessageAttachment('./belle/22.jpg')
const attachmentttt22 = new MessageAttachment('./belle/23.jpg')
const attachmentttt23 = new MessageAttachment('./belle/24.jpg')
const attachmentttt24 = new MessageAttachment('./belle/25.jpg')
const attachmentttt25 = new MessageAttachment('./belle/26.jpg')
const attachmentttt26 = new MessageAttachment('./belle/27.jpg')
const attachmentttt27 = new MessageAttachment('./belle/28.jpg')
const attachmentttt28 = new MessageAttachment('./belle/29.jpg')
const attachmentttt29 = new MessageAttachment('./belle/30.jpg')
const attachmentttt30 = new MessageAttachment('./belle/31.jpg')
const attachmentttt31 = new MessageAttachment('./belle/32.jpg')
const attachmentttt32 = new MessageAttachment('./belle/33.jpg')
const attachmentttt33 = new MessageAttachment('./belle/34.jpg')
const attachmentttt34 = new MessageAttachment('./belle/35.jpg')
const attachmenttttv1 = new MessageAttachment('./belle/v1.webm')
const attachmenttttv2 = new MessageAttachment('./belle/v2.mp4')
const attachmenttttv3 = new MessageAttachment('./belle/v3.mp4')
const attachmenttttv4 = new MessageAttachment('./belle/v4.mp4')

let times = 4677;
let kickable = 0;
let strTimes = 4677;
let numAuths = 349;
let strNumAuths = 349;
let list = fs.readFile('./recent.txt', 'utf8', function() {
    console.log("")
});
let user = null;
let temp = null;
let temp2 = null;

//ad links
    //belle
    let links3 = ["https://link-to.net/329764/epiccontent3"]
    //tana
    let links2 = ["https://link-to.net/329764/epiccontent2"]
    //cor
    let links1 = ["https://link-to.net/329764/epiccontent1"]


//remove lines special const thingy
const removeLines = (data, lines = []) => {
    return data
        .split('\n')
        .filter((val, idx) => lines.indexOf(idx) === -1)
        .join('\n');
}
//end
client.once('ready', () => {
    console.log('READY!');
})

client.on("message", message => {
    //Belle
    if(message.content.startsWith("!belle")) {
        if(message.channel.name == "down-bad-stuff-here") {
            //payershithere
            if (message.member.roles.cache.some(role => role.name === 'Weirdos who payed lol')) {
                message.author.send(attachmentttt1)
                message.author.send(attachmentttt3)
                message.author.send(attachmentttt4)
                message.author.send(attachmentttt5)
                message.author.send(attachmentttt6)
                message.author.send(attachmentttt7)
                message.author.send(attachmentttt8)
                message.author.send(attachmentttt9)
                message.author.send(attachmentttt11)
                message.author.send(attachmentttt12)
                message.author.send(attachmentttt13)
                message.author.send(attachmentttt14)
                message.author.send(attachmentttt15)
                message.author.send(attachmentttt16)
                message.author.send(attachmentttt17)
                message.author.send(attachmentttt18)
                message.author.send(attachmentttt19)
                message.author.send(attachmentttt20)
                message.author.send(attachmentttt21)
                message.author.send(attachmentttt22)
                message.author.send(attachmentttt23)
                message.author.send(attachmentttt24)
                message.author.send(attachmentttt25)
                message.author.send(attachmentttt26)
                message.author.send(attachmentttt27)
                message.author.send(attachmentttt28)
                message.author.send(attachmentttt29)
                message.author.send(attachmentttt30)
                message.author.send(attachmentttt31)
                message.author.send(attachmentttt32)
                message.author.send(attachmentttt33)
                message.author.send(attachmentttt34)
                message.author.send(attachmenttttv1)
                console.log(message.author + "bypassed because of payment")
            }
            else {
            //payerendhere
            //liststuffstart
            user = (message.member.user.tag + '\n')
            temp = fs.readFileSync('./recent.txt', 'utf8')
            temp2 = user + temp;
            fs.writeFile('./recent.txt', "", (err) => {
                if (err) throw err;
                console.log("clear")
            })
            fs.writeFile('./recent.txt', temp2, {
                flag: 'a'
            }, (err) => {
                if (err) throw err;
                console.log("add")
            })
            list = fs.readFileSync('./recent.txt', 'utf8')
            //liststuffend
            //ad shit start here
            fs.writeFile(('./auths/' + `${message.member.user.tag + '3.txt'}`), message.member.id, function (err) {
                console.log(message.member.user.tag);
            })
            
            //adshitend
            times = times + 1;
            strTimes = times.toString();
            console.log(times)
            message.author.send('**click here --> (' + links3[Math.floor(Math.random() * links3.length)] + ') to get epic down bad content!**\n\nTHE LINK IS AN AD! You have to follow the steps to get the content\nDesktop Tutorial: https://youtu.be/c_MJzMFTVis\nMobile Tutorial: https://youtu.be/JAGKe1KI8r8')
    
            message.reply("Sent you the down bad material!").then(message => {
                message.delete({ timeout: 3500 }).catch((error) => {
                    console.error("");
                })
            });
            message.delete({ timeout: 3500 }).catch((error) => {
                console.error("");
            })
        }
    }
    if (message.channel.name == "thats-all-folks") {
        message.delete({ timeout: 0100 }).catch((error) => {
            console.error("");
        })
    }
    }
    //belle+
    if(message.content.startsWith("!downbadbelle")) {
        if(message.channel.name == "down-bad-stuff-here") {
            if (message.member.roles.cache.some(role => role.name === 'DownBad+')) {
                message.author.send("https://video-cdn.ziggeo.com/v1/applications/332db03d91e933e3e31396ab3365ea58/videos/ad648d955dc37d8718d9ee1434b2d96a/video.mp4?force_refresh=1623787917752")
                message.author.send("https://video-cdn.ziggeo.com/v1/applications/332db03d91e933e3e31396ab3365ea58/videos/ad648d955dc37d8718d9ee1434b2d96a/video.mp4?force_refresh=1623788285866&refresh=1623788288")
                message.author.send("Thank you so much for supporting my server!\n-TheLocalRabbi")
            }
        }
    }
    //Corinna
        if(message.content.startsWith("!corinna")) {
            if(message.channel.name == "down-bad-stuff-here") {
                if (message.member.roles.cache.some(role => role.name === 'Weirdos who payed lol')) {
                    message.author.send(attachment1)
                    message.author.send(attachment2)
                    message.author.send(attachment3)
                    message.author.send(attachment4)
                    message.author.send(attachment5)
                    message.author.send(attachment6)
                    message.author.send(attachment7)
                    message.author.send(attachment8)
                    message.author.send(attachment9)
                    message.author.send(attachment10)
                    message.author.send(attachment11)
                    message.author.send(attachment12)
                    message.author.send(attachment13)
                    message.author.send(attachment14)
                    message.author.send(attachment15)
                    message.author.send(attachment16)
                    message.author.send(attachment17)
                    message.author.send(attachment18)
                    message.author.send(attachment19)
                    message.author.send(attachment20)
                    message.author.send(attachment21)
                    message.author.send(attachment22)
                    message.author.send(attachment23)
                    message.author.send(attachment24)
                    message.author.send(attachment25)
                    message.author.send(attachment26)
                    message.author.send(attachment27)
                    message.author.send(attachment28)
                    message.author.send(attachment29)
                    message.author.send(attachment30)
                    message.author.send(attachment31)
                    message.author.send(attachmentv1)
                    console.log(message.author + "bypassed because of payment")
                }
                else {
                //liststuffstart
                user = (message.member.user.tag + '\n')
                temp = fs.readFileSync('./recent.txt', 'utf8')
                temp2 = user + temp;
                fs.writeFile('./recent.txt', "", (err) => {
                    if (err) throw err;
                    console.log("clear")
                })
                fs.writeFile('./recent.txt', temp2, {
                    flag: 'a'
                }, (err) => {
                    if (err) throw err;
                    console.log("add")
                })
                list = fs.readFileSync('./recent.txt', 'utf8')
                //liststuffend
                //ad shit start here
                fs.writeFile(('./auths/' + `${message.member.user.tag + '1.txt'}`), message.member.id, function (err) {
                    console.log(message.member.user.tag);
                })
                
                //adshitend
                times = times + 1;
                strTimes = times.toString();
                console.log(times)
                message.author.send('**click here --> (' + links1[Math.floor(Math.random() * links2.length)] + ') to get epic down bad content!**\n\nTHE LINK IS AN AD! You have to follow the steps to get the content\nDesktop Tutorial: https://youtu.be/c_MJzMFTVis\nMobile Tutorial: https://youtu.be/JAGKe1KI8r8')
        
                message.reply("Sent you the down bad material!").then(message => {
                    message.delete({ timeout: 3500 }).catch((error) => {
                        console.error("");
                    })
                });
                message.delete({ timeout: 3500 }).catch((error) => {
                    console.error("");
                })
            }
            }
        }
        if (message.channel.name == "thats-all-folks") {
            message.delete({ timeout: 0100 }).catch((error) => {
                console.error("");
            })
        }
        
    //Tana
        if(message.content.startsWith("!tana")) {
            if(message.channel.name == "down-bad-stuff-here") {
                if (message.member.roles.cache.some(role => role.name === 'wierdos who payed lol')) {
                    message.author.send(attachmentt1)
                    message.author.send(attachmentt2)
                    message.author.send(attachmentt3)
                    message.author.send(attachmentt4)
                    message.author.send(attachmentt5)
                    message.author.send(attachmentt6)
                    message.author.send(attachmentt7)
                    message.author.send(attachmentt8)
                    message.author.send(attachmentt9)
                    message.author.send(attachmentt10)
                    message.author.send(attachmentt11)
                    message.author.send(attachmentt12)
                    message.author.send(attachmentt13)
                    message.author.send(attachmenttv1)
                    message.author.send(attachmenttv2)
                    message.author.send(attachmenttv3)
                    message.author.send(attachmenttv4)
                    message.author.send(attachmenttv5)
                    console.log(message.author + "bypassed because of payment")
                }
                else {
                    //liststuffstart
                user = (message.member.user.tag + '\n')
                temp = fs.readFileSync('./recent.txt', 'utf8')
                temp2 = user + temp;
                fs.writeFile('./recent.txt', "", (err) => {
                    if (err) throw err;
                    console.log("clear")
                })
                fs.writeFile('./recent.txt', temp2, {
                    flag: 'a'
                }, (err) => {
                    if (err) throw err;
                    console.log("add")
                })
                list = fs.readFileSync('./recent.txt', 'utf8')
                //liststuffend
                //ad shit start here
                fs.writeFile(('./auths/' + `${message.member.user.tag + '2.txt'}`), message.member.id, function (err) {
                    console.log(message.member.user.tag);
                })
                
                //adshitend
                message.author.send('**click here --> (' + links2[Math.floor(Math.random() * links1.length)] + ') to get epic down bad content!**\n\nTHE LINK IS AN AD! You have to follow the steps to get the content\nDesktop Tutorial: https://youtu.be/c_MJzMFTVis\nMobile Tutorial: https://youtu.be/JAGKe1KI8r8')
                times = times + 1;
                strTimes = times.toString();
                console.log(times)
    
                message.reply("Sent you the down bad material!").then(message => {
                    message.delete({ timeout: 3500 }).catch((error) => {
                        console.error("");
                    })
                })
                message.delete({ timeout: 3500 }).catch((error) => {
                    console.error("");
                })
            }
        }
            
        }
        if (message.channel.name == "thats-all-folks") {
            message.delete({ timeout: 0100 }).catch((error) => {
                console.error("");
            })
        
        }
    //Help
    if(message.content.startsWith(`!help`)) {
        let embedhelp = new Discord.MessageEmbed()
            .setColor("#FF00FF")
            .setAuthor('DownBadBot', 'https://i.ibb.co/m0ZCZm7/1594396905-11bgto9i75s80f9dl9-mp4-00002.jpg')
            .setTitle('The Help Page for MrShortBot')
            .addFields(
                { name: '!tana', value: 'Sends you the Tana Mongeau only fans leaks!', inline: true },
                { name: '!corinna', value: 'Sends you the Corinna Kopf only fans leaks!', inline: true },
            )
            .addField('!help', 'Shows this page lol.')
            .setFooter('Made by RabbiShorty#4501')
            .setTimestamp();
        message.author.send(embedhelp)
        message.delete({ timeout: 3500 }).catch((error) => {
            console.error("");
        })
        
    }
    if(message.channel.name == "checker") {
        message.delete({ timeout: 5000 }).catch((error) => {
            console.log("");
        })
    }
    client.user.setActivity("!help | OF Leaks");
    if(message.channel.name == "down-bad-stuff-here") {
        message.delete({ timeout: 1000 }).catch((error) => {
            console.error("");
        })
    }
    if (message.channel.type == "text") {
        if(message.content.includes("http")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes("www")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes(".com")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes(".net")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes(".org")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes(".co")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
        if(message.content.includes(".us")) {
            message.delete({ timeout: 0500 }).catch((error) => {
                console.error("");
            })
        }
    
    } 
})


const express = require("express");
const { text, response } = require('express');
const app = express();
const bodyParser = require('body-parser')
let epicvariablepog = null;
let epicvariablepog1 = null;
let epicvariablepog2 = null;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);
let passFail = null;

app.get("/", (req, res) => res.render('index', {downBadList: list, totalDownBadders: strTimes, numberOfAuths: strNumAuths}));
app.get("/redirect1", (req, res) => res.render('redirect1', {}));
app.get("/redirect2", (req, res) => res.render('redirect2', {}));
app.get("/redirect3", (req, res) => res.render('redirect3', {}));
app.get("/log", (req, res) => res.render('log', {}));


app.use(bodyParser.urlencoded({extended: false}))

app.post('/sending2', (req, res) => {
    if(fs.existsSync('./auths/' + req.body.create_first_name2 + "2.txt")) {
        epicvariablepog1 = fs.readFileSync('./auths/' + req.body.create_first_name2 + '2.txt', 'utf8')
        client.users.fetch(epicvariablepog1, false).then((user) => {
        console.log(req.body.create_first_name2 + ' just PASSED auth')
        passFail = "You PASSED the auth! Check discord!"
        user.send(attachmentt2)
        user.send(attachmentt3)
        user.send(attachmentt4)
        user.send(attachmentt5)
        user.send(attachmentt6)
        user.send(attachmentt7)
        user.send(attachmentt8)
        user.send(attachmentt9)
        user.send(attachmentt10)
        user.send(attachmentt11)
        user.send(attachmentt12)
        user.send(attachmentt13)
        user.send(attachmenttv1)
        user.send(attachmenttv2)
        user.send(attachmenttv3)
        user.send(attachmenttv4)
        user.send(attachmenttv5).then((finsihed) => {
            console.log("finished sending")
        })
        numAuths = numAuths + 1;
        strNumAuths = numAuths.toString();
        })
        fs.unlinkSync('./auths/' + req.body.create_first_name2 + "2.txt")
    }
    else {
        client.users.fetch('335895757683032066', false).then((user) => {
            console.log(req.body.create_first_name2 + ' just FAILED auth')
            passFail = ("You FAILED the auth, remember to include your discord tag (The # and then the 4 numbers at the end of your username)\n If the problem persists, @RabbiShorty#4501 in \"thats-all-folks\"")
            })
    }
    res.end("If you failed the auth, the discord bot won't send you anything! Remember to include your discord tag (The # and then the 4 numbers at the end of your username)\n If the problem persists, @RabbiShorty#4501 in \"thats-all-folks\"")
})
app.post('/sending3', (req, res, next) => {
    if(fs.existsSync('./auths/' + req.body.create_first_name3 + "3.txt")) {
        epicvariablepog2 = fs.readFileSync('./auths/' + req.body.create_first_name3 + '3.txt', 'utf8')
        client.users.fetch(epicvariablepog2, false).then((user) => {
        console.log(req.body.create_first_name3 + ' just PASSED auth')
        passFail = "You PASSED the auth! Check discord!"
        user.send("Here you go:", attachmentttt1)
        user.send(attachmentttt3)
        user.send(attachmentttt4)
        user.send(attachmentttt5)
        user.send(attachmentttt6)
        user.send(attachmentttt7)
        user.send(attachmentttt8)
        user.send(attachmentttt9)
        user.send(attachmentttt11)
        user.send(attachmentttt12)
        user.send(attachmentttt13)
        user.send(attachmentttt14)
        user.send(attachmentttt15)
        user.send(attachmentttt16)
        user.send(attachmentttt17)
        user.send(attachmentttt18)
        user.send(attachmentttt19)
        user.send(attachmentttt20)
        user.send(attachmentttt21)
        user.send(attachmentttt22)
        user.send(attachmentttt23)
        user.send(attachmentttt24)
        user.send(attachmentttt25)
        user.send(attachmentttt26)
        user.send(attachmentttt27)
        user.send(attachmentttt28)
        user.send(attachmentttt29)
        user.send(attachmentttt30)
        user.send(attachmentttt31)
        user.send(attachmentttt32)
        user.send(attachmentttt33)
        user.send(attachmentttt34)
        user.send(attachmenttttv1).then((finsihed) => {
            console.log("finished sending")
        })
        numAuths = numAuths + 1;
        strNumAuths = numAuths.toString();
        })
        fs.unlinkSync('./auths/' + req.body.create_first_name3 + "3.txt")
    }
    else {
        client.users.fetch('335895757683032066', false).then((user) => {
            console.log(req.body.create_first_name3 + ' just FAILED auth')
            passFail = "You FAILED the auth, remember to include your discord tag (The # and then the 4 numbers at the end of your username)\n If the problem persists, @RabbiShorty#4501 in \"thats-all-folks\""
            })
    }
    res.end("If you failed the auth, the discord bot won't send you anything! Remember to include your discord tag (The # and then the 4 numbers at the end of your username)\n If the problem persists, @RabbiShorty#4501 in \"thats-all-folks\"")
})
app.post('/sending1', (req, res) => {
    if(fs.existsSync('./auths/' + req.body.create_first_name1 + "1.txt")) {
        epicvariablepog = fs.readFileSync('./auths/' + req.body.create_first_name1 + '1.txt', 'utf8')
        client.users.fetch(epicvariablepog, false).then((user) => {
        console.log(req.body.create_first_name1 + ' just PASSED auth')
        passFail = "You PASSED the auth! Check discord!"
        user.send("Here you go:", attachment1)
        user.send(attachment2)
        user.send(attachment3)
        user.send(attachment4)
        user.send(attachment5)
        user.send(attachment6)
        user.send(attachment7)
        user.send(attachment8)
        user.send(attachment9)
        user.send(attachment10)
        user.send(attachment11)
        user.send(attachment12)
        user.send(attachment13)
        user.send(attachment14)
        user.send(attachment15)
        user.send(attachment16)
        user.send(attachment17)
        user.send(attachment18)
        user.send(attachment19)
        user.send(attachment20)
        user.send(attachment21)
        user.send(attachment22)
        user.send(attachment23)
        user.send(attachment24)
        user.send(attachment25)
        user.send(attachment26)
        user.send(attachment27)
        user.send(attachment28)
        user.send(attachment29)
        user.send(attachment30)
        user.send(attachment31)
        user.send(attachmentv1).then((finsihed) => {
            console.log("finished sending")
        })
        numAuths = numAuths + 1;
        strNumAuths = numAuths.toString();
        })
        fs.unlinkSync('./auths/' + req.body.create_first_name1 + "1.txt")
    }
    else {
        client.users.fetch('335895757683032066', false).then((user) => {
            console.log(req.body.create_first_name1 + ' just FAILED auth')
            })
    }
    res.end("If you failed the auth, the discord bot won't send you anything! Remember to include your discord tag (The # and then the 4 numbers at the end of your username)\n If the problem persists, @RabbiShorty#4501 in \"thats-all-folks\"\nALSO USE THE BACK BUTTON ON YOUR BROWSER TO TRY PUTTING YOUR USERNAME IN AGAIN!")
})


app.listen(5555, () => console.log("Server listening on port 5555!"));

client.login("ODU0ODYxNDY0OTg3NjMxNjM2.YMqFxw.MKfgvZSp3r5L4a8xj-nHE6-lQns")
