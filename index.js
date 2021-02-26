const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("e")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "^help" } })
})

client.on("message", message => { 
if(message.content === "^jobs") {
  message.channel.send("job list:")
  message.channel.send("miner -- 500 :poop: pay day-not avalible yet")
  message.channel.send("police officer-- 550 :poop: pay day")
  message.channel.send("internet troll-- 600 :poop: payday")
  message.channel.send("robber-- 1000 :poop: payday")
}
  if(message.content === "^help") {
    message.channel.send("List of commands:")
    message.channel.send("^jobs -- list of jobs to do")
    message.channel.send("^fish-- fishes for food")
    message.channel.send("^shop-- shop to buy items")
    message.channel.send("^work-- make that :poop:")
}
  if(message.content === "^fish") {
    message.channel.send("you dont have a fishing hook buy one in the shop")
    message.channel.send("do ^shop for the shop")
  }
  if(message.content === "^buy fishingrod") {
    message.channel.send ("fishing unlocked")
    message.channel.send ("wanna fish?")
    message.channel.send ("prefix ^yes")
  }
  if(message.content === "^yes") {
    message.channel.send("you have unlocked a basic fish")
  }
if(message.content === "^shop") {
  message.channel.send ("fishing rod- 100 :poop:")
  message.channel.send ("xtra inv slot-10 :poop: each")
}
 if(message.content === "^choose job internettroll") {
   message.channel.send ("now you can earn money with internet troll")
   message.channel.send ("unscramble the words: ETRONIVNMNE")
 }
if(message.content === "^work") {
  message.channel.send ("Choose which job you want")
  message.channel.send ("internet troll 600 :poop: payday")
  message.channel.send ("robber 1000 :poop: payday")
  message.channel.send ("Police officer 550 :poop: payday")
  message.channel.send ("prefix: ^choose job --the job you want--")
}
if(message.content === "ENVIORMENT") {
  message.channel.send ("good job here is 600 :poop:")
  message.channel.send (":poop: dont tell anyone else but idk how to script really :poop:")
}
  if(message.content === "^choose job robber") {
    message.channel.send ("find the code onthreto")
}
  if(message.content === "Code:69420") {
    message.channel.send ("good job robbing the bank you stole 1000 :poop:")
}
  if(message.content === "^bal") {
    message.channel.send (":poop:I checked your bank and all you have is a grass hopper that walked in on its own :poop:")
}
  if(message.content === "^choose job policeofficer") {
    message.channel.send ("Quick rush the building what would you use?")
    message.channel.send ("A: a fire")
    message.channel.send ("B: the door knomb")
    message.channel.send ("C: riot sheild")
    message.channel.send ("D: THE DAM RUSHER")
}
  if(message.content === "D: THE DAM RUSHER") {
    message.channel.send ("GOOD JOB RECRUIT HERE IS THE DAM 550 :poop:") 
  }
  if(message.content === "bruh") {
    message.channel.send ("https://tenor.com/view/bruh-bye-ciao-gif-5156041")
  }
  if(message.content === "bss") {
    message.channel.send ("https://tenor.com/view/bee-swarm-hacker-gif-19050936")
  }
  if(message.content === "^pog") {
    message.channel.send ("POGGGGGGGGGGERRRRRRRRSSSSSSS")
  }
  if(message.content === "Better than poop bot LOL what a noob") {
    message.channel.send ("!ban @Dyno#3861")
  }
  if(message.content === "start the raid") {
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
    message.channel.send ("@everyone")
  }
  if(message.content === "stop the raid") {
    message.content.send ("k boss")
  }
})

client.login("ODE0MzE5NDAzNzM0MjY5OTkz.YDcICw.dd47NsD_Byd6rkHuE-bre54YzmE")
  