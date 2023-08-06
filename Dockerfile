#FROM node:18.17.0-alpine3.18
FROM registry.cn-hangzhou.aliyuncs.com/dogbody/node:18.17.0-alpine3.18

WORKDIR /home/app

COPY package.json .
RUN npm install
COPY src ./src

CMD [ "node", "src/index.js"]
