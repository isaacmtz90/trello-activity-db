FROM node:8.2.1-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install -g nodemon
COPY package.json package-lock.json ./
COPY src/config/loggly.js.sample src/config/loggly.js
COPY src/config/sequelize.js.sample src/config/sequelize.js
RUN npm install


# Bundle app source
COPY . .
RUN npm run build
EXPOSE 8000 9229
CMD [ "npm", "start" ]