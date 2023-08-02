import request from "../util/request.js"



export function getCalendarData(startTime, endTime) {
    let url = `/data/calendar/get_calendar_data/?qtype=CNV&start=${startTime}&end=${endTime}&_=1690680005375`
    return request(url)
}
