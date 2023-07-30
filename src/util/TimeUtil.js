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
    let nextThreeDay = new Date(today.getTime() + 3 * millisecond)
    return {
        startTime: new Date(today.setHours(0, 0, 0, 0)),
        endTime: new Date(nextThreeDay.setHours(23, 59, 59, 0)),
    }
}

export {
    getNextThreeDayStartTimeAndEndTime,
    getStartTimeAndEndTime
}
