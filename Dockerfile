FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install --save --legacy-peer-deps

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]