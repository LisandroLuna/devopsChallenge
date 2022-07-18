FROM node:16-alpine

WORKDIR /app
COPY ./js ./

RUN npm install -ci

CMD ["node", "index.js"]

EXPOSE 80