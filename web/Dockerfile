FROM node:18.17.0-alpine
WORKDIR /app
ADD package.json package.json
RUN npm install
ADD . .
ADD load-env.sh /app/load-env.sh
RUN chmod +x /app/load-env.sh
RUN /app/load-env.sh
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000