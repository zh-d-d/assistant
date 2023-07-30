import schedule from 'node-schedule'
import {getCalendarData} from "../stock/Api.js";

function getStartTimeAndEndTime(time) {
    time = time ? new Date(time) : new Date();
    return {
        startTime: new Date(time.setHours(0, 0, 0, 0)),
        endTime: new Date(time.setHours(23, 59, 59, 0)),
    };
}

function getNextThreeDayStartTimeAndEndTime() {
    //一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24
    let today = new Date()
    let nextThreeDay = new Date(today + 3 * millisecond)
    return {
        startTime: new Date(today.setHours(0, 0, 0, 0)),
        endTime: new Date(nextThreeDay.setHours(23, 59, 59, 0)),
    }
}


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

// var timeParam = getTodayStartTimeAndEndTime();
// var startTime = timeParam.startTime.getTime() / 1000;
// console.log(startTime)
// var endParam = timeParam.endTime.getTime() / 1000;
// console.log(endParam)
//
// let data = await getCalendarData(startTime, endParam)
// console.log("data:", data)
