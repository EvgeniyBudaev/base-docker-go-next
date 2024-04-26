FROM node:18.17.0-alpine as build
WORKDIR /app
ADD package.json package.json
RUN npm install
COPY . .
ENV NEXT_PUBLIC_NODE_ENV production
ENV NEXT_PUBLIC_API_URL http://backend:8000
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000