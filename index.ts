import DiscordJS, { CommandInteraction, Constants, Intents, MessageEmbed, MessageActionRow, MessageButton } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
//dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {
    console.log('The bot has prepared itself.')

    const guildId = '885875564924248114'
    const guild = client.guilds.cache.get(guildId)

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '885875564924248114'
    })
    let commands

    if(guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Attends to your call.',
    })

    /*commands?.create({
        name: '8ball',
        description: 'Magik 8ball.',
        options: [
            {
                name: 'question',
                description: 'The yes or no question that you need to ask to the bot.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
            }
        ],
    })*/

    commands?.create({
        name: 'dadjoke',
        description: 'Cracks a horrible cheesy cringey dadjoke that will probably kill you.'
    })

    commands?.create({
        name: 'funfact',
        description: 'Tells you a cool fun fact!'
    })

    commands?.create({
        name: 'tableflip',
        description: 'Used to show anger, usually playful.',
        options: [
            {
                name: 'teddyflip',
                description: 'Cute teddy tableflip.',
                required: false,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND
            },
            {
                name: 'naniflip',
                description: '**Nani** *tableflips*',
                required: false,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND
            }
        ]
    })
})

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const {commandName, options} = interaction

    if(commandName === 'ping') {
        interaction.reply({
            content: 'Thank you good sire for pinging me, what can I do for you?',
            ephemeral: false,
        })
    }
    
    /*if(commandName === '8ball') {
        const question = options.getString('question')

        interaction.reply({
            //using variables inside strings
            content: `**Question: ${question}?**\nAnswer: ${eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)]}`
        })
    }*/

    if(commandName === 'dadjoke') {
        var dadjokes = [
            `"I'm afraid for the calendar. Its days are numbered."`,
            `"My wife said I should do lunges to stay in shape. That would be a big step forward."`,
            `"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera."`,
            `"What do you call a fish wearing a bowtie? Sofishticated."`,
            `"Dear Math, grow up and solve your own problems."`,
            `"What did one wall say to the other? I'll meet you at the corner."`,
            `"A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop."`,
            `"I asked my dog what's two minus two. He said nothing."`,
            `"What does a sprinter eat before a race?" "Nothing, they fast!"`
        ]

        interaction.reply({
            content: dadjokes[Math.floor(Math.random() * dadjokes.length)]
        })
    }

    if(commandName === 'funfact') {
        var funfacts = [
            `In the USA, there are more Chinese restaurants than all the McDonald’s, KFCs, Burger Kings and Wendy’s put together.`,
            `Butt is actually a British measuring unit equivalent to 125 US gallons or 105 imperial gallons!`,
            `When you say “a million seconds”, it means 11 and a half days. “A billion seconds” would be over 31 years!`,
            `There are more English speakers in China than in the United States!`,
            `When you talk, you spray around 2.5 microscopic saliva droplets per word!`,
            `Rats cannot vomit, and neither can horses!`,
            `620 million years ago, an Earth day was only 21.9 hours long. It is extending a little every year!`,
            `Our ears and our nose never stop growing!`,
            `Bulgarians nod when they want to say NO and shake their heads when they want to say YES!`
        ]

        interaction.reply({
            content: funfacts[Math.floor(Math.random() * funfacts.length)]
        })
    }

    if(commandName === 'tableflip') {
        const embed = new DiscordJS.MessageEmbed()
            .setTitle('Embed')
            .setDescription('hi')

        interaction.reply({
            //content: 'ʕノ•ᴥ•ʔノ ︵ ┻━┻'
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === 'ping') {
        message.reply({
            content: 'Thank you good sire for pinging me, what can I do for you?',
        })
    }
})

client.login(process.env.DJS_TOKEN)