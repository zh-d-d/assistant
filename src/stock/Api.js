import axios from "axios";



export function getCalendarData(startTime, endTime) {
    let url = `https://www.jisilu.cn/data/calendar/get_calendar_data/?qtype=CNV&start=${startTime}&end=${endTime}&_=1690680005375`
    return axios.get(url, {
        timeout: 5000
    })
        .then(function (res) {
            return res.data
        })
        .catch(function (err) {
            console.log(err);
        })
}
