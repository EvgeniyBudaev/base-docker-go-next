FROM node:18.17.0-alpine as build
WORKDIR /app
ADD package.json package.json
RUN npm install
COPY . .
COPY .env .env
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000
