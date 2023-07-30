async function onMessage(msg) {
    console.info('StarterBot', msg.toString())

    if (msg.text() === 'hello') {
        await msg.say('world')
    }
}

export {
    onMessage
}

