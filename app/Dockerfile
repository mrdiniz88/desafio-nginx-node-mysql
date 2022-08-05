FROM node

WORKDIR /app

COPY . /app

RUN npm install

RUN npx prisma generate

CMD [ "npx", "prisma", "migrate", "deploy" ]

ENTRYPOINT [ "npm", "start" ]

EXPOSE 3000