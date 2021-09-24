import { ICommand } from "wokcommands";
import { MessageEmbed } from "discord.js";

var eightBallResponses = [
    "🟢It is certain.",
    "🟢It is decidedly so.",
    "🟢Without a doubt.",
    "🟢Yes definitely.",
    "🟢You may rely on it.",
    "🟢As I see it, yes.",
    "🟢Most likely.",
    "🟢Outlook good.",
    "🟢Yes.",
    "🟢Signs point to yes.",
    "🟡Reply hazy, try again.",
    "🟡Ask again later.",
    "🟡Better not tell you now.",
    "🟡Cannot predict now.",
    "🟡Concentrate and ask again.",
    "🔴Don't count on it.",
    "🔴My reply is no.",
    "🔴My sources say no.",
    "🔴Outlook not so good.",
    "🔴Very doubtful.",
]

export default {
    category: 'test',
    description: 'test',

    slash: 'both',
    testOnly: true,
    permissions: ['ADMINISTRATOR'],

    callback: ({message, text, interaction}) => {
        const {options} = interaction
        const embed = new MessageEmbed()
            .setTitle('Test')
            //.setDescription(`**Question: ${question}?**\nAnswer: ${eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)]}`)

        return embed
    }
} as ICommand