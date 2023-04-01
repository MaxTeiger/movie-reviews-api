FROM node:19

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY index.js index.js
COPY server.js	server.js
COPY dao dao
COPY api api

ENTRYPOINT [ "npm" ]
CMD ["run", "start"]
