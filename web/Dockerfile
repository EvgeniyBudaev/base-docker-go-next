FROM node:18.17.0-alpine as build
WORKDIR /app
ADD package.json package.json
RUN npm install
COPY . .
ENV NEXT_PUBLIC_NODE_ENV $(grep NEXT_PUBLIC_NODE_ENV .env | cut -d '=' -f2)
ENV NEXT_PUBLIC_API_URL $(grep NEXT_PUBLIC_API_URL .env | cut -d '=' -f2)
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000