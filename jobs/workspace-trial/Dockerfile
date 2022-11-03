FROM node:16.18-alpine as build
RUN corepack enable
WORKDIR /app

COPY ./package.json .
COPY ./pnpm-lock.yaml .
COPY ./pnpm-workspace.yaml .
COPY . .

RUN pnpm -F database i
RUN pnpm -F workspace-trial i

RUN pnpm -F database gen
RUN pnpm -F workspace-trial build
RUN pnpm -F workspace-trial --prod deploy ./pruned

FROM node:16.18-alpine

ENV NODE_ENV=production

COPY --from=build /app/pruned /workspace-trial

CMD [ "node", "/workspace-trial/dist/index.js" ]
