FROM node:16

WORKDIR /usr/src/app
ADD package.json .
ADD package-lock.json .
RUN npm install

ENTRYPOINT [ "npm", "start" ]