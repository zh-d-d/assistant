import {getNextThreeDayStartTimeAndEndTime} from "../util/TimeUtil.js";
import {getCalendarData} from "../stock/Api.js";

async function onMessage(msg) {
    if (msg.self()) {
        console.log('this message is sent by myself!')
        return
    }

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
        var startTime = timeParam.startTime
        var endTime = timeParam.endTime
        let data = await getCalendarData(startTime, endTime)
        console.log('data', data)
        await room.say(JSON.stringify(data), talker)
    }
}

export {
    onMessage
}

