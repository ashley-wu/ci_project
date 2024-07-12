FROM node:20-alpine as build

ENV NEXT_PUBLIC_API_HOST_URL = ""

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]