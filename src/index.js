import {WechatyBuilder} from 'wechaty'

import {config} from './config.js';
import {onScan} from './listener/ScanListener.js'
import {onMessage} from './listener/MessageListener.js'

const bot = WechatyBuilder.build({
    name: config.name,
    puppet: 'wechaty-puppet-padlocal',
    puppetOptions: {
        token: config.token
    }
})

bot.on('scan', onScan)
    .on('message', onMessage)
    .start()
    .then(()=>console.log('StarterBot', 'Starter Bot Started.'))
    .catch(e => console.error('StarterBot', e))
