import schedule from 'node-schedule'
import {getCalendarData} from "../stock/Api.js";
import {getStartTimeAndEndTime} from "../util/TimeUtil.js";
import {parseMessage} from "../util/MessageUtil.js";


function stockCalendarTask(bot) {
    // schedule.scheduleJob('0/10 * * * * ?', async () => {
    schedule.scheduleJob('0 0 9 * * ? ', async () => {
        let timeParam = getStartTimeAndEndTime();
        let startTime = timeParam.startTime
        let endParam = timeParam.endTime
        let executeStatus = false
        while (!executeStatus) {
            try {
                let data = await getCalendarData(startTime, endParam)
                let content = parseMessage(data);
                const room = await bot.Room.find({topic: '打新提醒群'})
                await room.say(content)
                executeStatus = true
            } catch (e) {
                console.log('execute schedule job fail.' + e)
            }
        }


    });
}

export {
    stockCalendarTask
}


