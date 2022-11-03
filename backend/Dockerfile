FROM node:16.18-alpine as build
RUN corepack enable
WORKDIR /app

COPY ./package.json .
COPY ./pnpm-lock.yaml .
COPY ./pnpm-workspace.yaml .
COPY . .

RUN pnpm -F database i
RUN pnpm -F backend i

RUN pnpm -F database gen
RUN pnpm -F backend build
RUN pnpm -F backend --prod deploy ./pruned

FROM node:16.18-alpine

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE ${PORT}

COPY --from=build /app/pruned /backend

CMD [ "node", "/backend/dist/server.js" ]
