FROM node:18.17.0-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "start"]

EXPOSE 3000