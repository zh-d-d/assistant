/**
 * 获取今天或者指定时间的 起始结束时间 秒
 */
function getStartTimeAndEndTime(time) {
    time = time ? new Date(time) : new Date();
    return {
        startTime: new Date(time.setHours(0, 0, 0, 0)).getTime() / 1000,
        endTime: new Date(time.setHours(23, 59, 59, 0)).getTime() / 1000,
    };
}

/**
 * 获取今天到三天后的 起始结束时间 秒
 */
function getNextThreeDayStartTimeAndEndTime() {
    //一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24
    let today = new Date()
    let nextThreeDay = new Date(today.getTime() + 3 * millisecond)
    return {
        startTime: new Date(today.setHours(0, 0, 0, 0)).getTime() / 1000,
        endTime: new Date(nextThreeDay.setHours(23, 59, 59, 0)).getTime() / 1000,
    }
}

export {
    getNextThreeDayStartTimeAndEndTime,
    getStartTimeAndEndTime
}
