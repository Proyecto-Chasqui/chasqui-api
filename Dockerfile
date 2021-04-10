FROM node:14.15-alpine

WORKDIR /app/

COPY package*.json ./
RUN npm install

COPY . .
#RUN rm .env

EXPOSE 3030
CMD [ "npm", "start" ]
