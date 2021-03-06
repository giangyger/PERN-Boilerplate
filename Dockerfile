FROM node:12

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

RUN npm install --only=production

COPY ./lib ./

EXPOSE 8080

CMD [ "node", "server/server.js" ]