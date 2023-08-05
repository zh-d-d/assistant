class Config{
    //机器人名称
    name='dogbody';
    //群聊
    room={
        //群名:群ID
    };
    constructor(){
        let token=process.env.WECHATY_PUPPET_PADLOCAL_TOKEN
        if (!token) {
            throw new Error('you need config token.')
        }
        this.token=process.env.WECHATY_PUPPET_PADLOCAL_TOKEN
    }
}
export {Config}
