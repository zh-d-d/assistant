import schedule from 'node-schedule'
import {getCalendarData} from "../stock/Api.js";
import {getStartTimeAndEndTime} from "../util/TimeUtil.js";


function stockCalendarTask(bot) {
    schedule.scheduleJob('0/10 * * * * ?', async () => {
        let timeParam = getStartTimeAndEndTime();
        let startTime = timeParam.startTime
        let endParam = timeParam.endTime
        let data = await getCalendarData(startTime, endParam)


        console.log('task',data)
    });
}

export {
    stockCalendarTask
}


