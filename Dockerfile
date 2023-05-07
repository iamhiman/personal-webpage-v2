FROM node:17.9.1-alpine3.15

WORKDIR /app

RUN addgroup -g 1001 -S nextjs && adduser -S nextjs -u 1001 nextjs

COPY package*.json ./

RUN npm install --production

COPY . .

USER nextjs

RUN npx next build

EXPOSE 3000

CMD ["npx", "next", "start"]
