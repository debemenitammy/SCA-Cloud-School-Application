FROM node:12

#app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]