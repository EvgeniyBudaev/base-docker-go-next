FROM node:18.17.0-alpine
ENV NEXT_PUBLIC_API_URL=http://backend:8000
ENV NEXT_PUBLIC_NODE_ENV=development
WORKDIR /app
ADD package.json package.json
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000