const Discord = require("discord.js")

const TOKEN = "OTg5MTI1NTUwMjY0MTcyNTc0.Gx_rQz.TVml2Ngxu3_lmWnOS98kgNs45WcRAwS7Pz3UFQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(TOKEN)