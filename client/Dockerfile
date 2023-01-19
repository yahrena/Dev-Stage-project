FROM node:alpine

WORKDIR /frontnode

COPY package*.json /frontnode/
RUN npm install --force
COPY . .
EXPOSE 3700
CMD npm run start:dev