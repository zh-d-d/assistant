const token = process.env.WECHATY_PUPPET_PADLOCAL_TOKEN
console.log('token:', token)
if (!token) {
    throw new Error('you need config token.')
}

const config = {
    token: token,
    //机器人名称
    name: 'dogbody',
    //群聊
    room: {
        //群名:群ID

    }
}
export {
    config
}

