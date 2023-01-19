FROM node:alpine

WORKDIR /backnode

COPY package*.json /backnode/
RUN npm install --force
COPY . .
EXPOSE 3700
CMD npm run start:dev