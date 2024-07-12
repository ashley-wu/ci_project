FROM node:20-alpine as build

ENV NEXT_PUBLIC_API_HOST_URL = ""

WORKDIR /app

COPY package*.json ./

RUN if [ ! -f "$npm_package_root" ]; then echo "Package.json file not fount at $npm_package_root" exit 1 fi
RUN if [ ! -f "$npm_package_lock_file" ]; then echo "Package.lock.json file not fount at $npm_package_lock_file" exit 1 fi

RUN npm install --production

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]