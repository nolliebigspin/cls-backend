FROM node:11-alpine

RUN mkdir -p /usr/src/app && mkdir -p /database

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "server.js"]
