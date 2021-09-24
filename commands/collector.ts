import { ICommand } from "wokcommands";
import { Message } from "discord.js";

export default {
    category: 'Testy',
    description: 'tess',

    callback: ({ message, channel }) => {
        message.reply('Enter usename:')

        const filter = (m: Message) => {
            return m.author.id === message.author.id
        }

        const collector = channel.createMessageCollector({
            filter,
            max: 2,
            time: 1000 * 5
        })

        collector.on('collect', message => {
            message.delete()
        })

        collector.on('end', collected => {
            if(collected.size === 0) {
                message.reply('You failed me')
                return
            }

            let text = 'Collected:\n'

            collected.forEach(message => {
                text += `${message.content}\n`
            })

            message.reply(text)
        })
    }
} as ICommand