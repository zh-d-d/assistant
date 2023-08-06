function parseMessage(dataArr) {
    if (null === dataArr || dataArr.length === 0) {
        return '今日无新债，恭喜发财'
    }
    let content=''
    dataArr.forEach(item => {

        // message.data.push(item.start + ':' + item.title)
        content+=item.start + ':' + item.title+'            '
    })
    // return message
    return content
}

export {parseMessage}



