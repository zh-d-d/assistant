import schedule from 'node-schedule'
import {getCalendarData} from "../stock/Api.js";
import {getStartTimeAndEndTime} from "../util/TimeUtil.js";


const stockCalendarTask = () => {
    schedule.scheduleJob('0/10 * * * * ?', async () => {
        var timeParam = getStartTimeAndEndTime(1690771031000);
        var startTime = timeParam.startTime.getTime() / 1000;
        console.log(startTime)
        var endParam = timeParam.endTime.getTime() / 1000;
        console.log(endParam)

        let data = await getCalendarData(startTime, endParam)
        console.log("data:", data)
    });
}

stockCalendarTask();


