FROM node:10.10.0-alpine

RUN apk update && apk add --no-cache build-base postgresql-dev

RUN mkdir -p /opt/my-service
WORKDIR /opt/my-service

COPY package*.json ./
RUN npm install

COPY . ./

CMD npm start