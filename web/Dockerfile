FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules &&  npm install

COPY . .

EXPOSE 3000

CMD npm run start