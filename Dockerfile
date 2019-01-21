FROM node:10.14
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "server"]
