#FROM node:18.17.0-alpine3.18
FROM registry.cn-hangzhou.aliyuncs.com/dogbody/node:18.17.0-alpine3.18

#定义时区参数，因为alpine镜像默认不含时区数据包,导致时区和时间配置无法生效
ENV TZ=Asia/Shanghai
#安装时区数据包
RUN apk add tzdata
#设置时区
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo '$TZ' > /etc/timezone


WORKDIR /home/app

COPY package.json .
RUN npm install
COPY src ./src

CMD [ "node", "src/index.js"]
