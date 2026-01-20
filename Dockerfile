FROM node:18-alpine

WORKDIR /app

COPY nestjs-app/package*.json ./

RUN npm install

COPY nestjs-app/. . 

RUN npm run build

EXPOSE 3000

CMD ["node" "/dist/main"]