FROM node:10-alpine
WORKDIR /app
ADD . .
RUN npm install
EXPOSE 2020
CMD node server.js