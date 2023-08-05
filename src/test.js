import {getCalendarData} from "./stock/Api.js";
import {getNextThreeDayStartTimeAndEndTime} from './util/TimeUtil.js'
import {Config} from "./config.js";

// var timeParam = getNextThreeDayStartTimeAndEndTime();
// console.log(timeParam.startTime)
// console.log(timeParam.endTime)
// let data = await getCalendarData(timeParam.startTime,timeParam.endTime)
// if (data.length>=0){
//     console.log('data',data[0].title)
// }
let config =new Config()
console.log(config.token)

