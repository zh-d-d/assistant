import {WechatyBuilder} from 'wechaty'

import {Config} from './config.js';
import {onScan} from './listener/ScanListener.js'
import {onMessage} from './listener/MessageListener.js'
import {stockCalendarTask} from "./schedule/StockCalendarTask.js"

const config = new Config()

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
    .then(() => {
        stockCalendarTask(bot)
    })
    .catch(e => console.error('StarterBot', e))
