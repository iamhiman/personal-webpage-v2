FROM node:17.9.1-alpine3.15 AS builder

WORKDIR /app

COPY . .

#RUN npm install --omit=dev
RUN npm install

RUN npx next build

FROM node:17.9.1-alpine3.15

WORKDIR /app

RUN addgroup -g 1001 -S nextjs && adduser -S nextjs -u 1001 nextjs

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

RUN chown -R nextjs:nextjs ./.next

USER nextjs

EXPOSE 3000

CMD ["npx", "next", "start"]