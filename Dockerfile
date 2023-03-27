FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
WORKDIR /usr/src/app/client
RUN npm install --production 
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
RUN chown -R node /usr/src/app/client
USER node
CMD ["npm","start"]
