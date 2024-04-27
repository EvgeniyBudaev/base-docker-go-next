FROM node:18.17.0-alpine

WORKDIR /app

ADD package.json package.json

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000