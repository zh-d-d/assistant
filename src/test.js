import {getCalendarData} from "./stock/Api.js";
import {getNextThreeDayStartTimeAndEndTime} from './util/TimeUtil.js'

var timeParam = getNextThreeDayStartTimeAndEndTime();
console.log(timeParam.startTime)
console.log(timeParam.endTime)
let data = await getCalendarData(timeParam.startTime,timeParam.endTime)
if (data.length>=0){
    console.log('data',data[0].title)
}


