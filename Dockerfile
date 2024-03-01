FROM node:16.9.1-slim 

WORKDIR /usr/app

COPY package*.json .

COPY .env .

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/server.js"]