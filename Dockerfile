FROM node:10.14
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "server"]
