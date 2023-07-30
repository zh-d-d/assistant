import {getNextThreeDayStartTimeAndEndTime} from "../util/TimeUtil.js";
import {getCalendarData} from "../stock/Api.js";

async function onMessage(msg) {
    var text = msg.text();
    console.log('text:', text)

    if (text === 'hello') {
        await msg.say('world')
    }
    const room = msg.room()
    var mentionSelf = await msg.mentionSelf();
    var talker = msg.talker();

    console.log('room:', room)
    if (mentionSelf && text.endsWith('打新日历')) {
        var timeParam = getNextThreeDayStartTimeAndEndTime();
        var startTime = timeParam.startTime.getTime() / 1000;
        var endTime = timeParam.endTime.getTime() / 1000;
        console.log(startTime, endTime)
        let data = await getCalendarData(startTime, endTime)
        console.log('data', data)
        await room.say(JSON.stringify(data), talker)
    }
}

export {
    onMessage
}

