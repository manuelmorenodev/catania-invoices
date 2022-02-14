FROM node:16

WORKDIR /api
COPY package.json .
COPY package-lock.json .
RUN npm install

ENTRYPOINT [ "npm", "start" ]