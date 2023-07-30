import QrTerminal from 'qrcode-terminal'

function onScan(qrcode, status) {
    const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode),
    ].join('')
    console.info('StarterBot', 'onScan: %s(%s) - %s', status, qrcodeImageUrl)

    QrTerminal.generate(qrcode, {small: true})
}


export {
    onScan
}
