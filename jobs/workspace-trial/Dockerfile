FROM node:16.18-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

RUN corepack enable

WORKDIR /app
COPY . .

RUN pnpx turbo prune --scope=workspace-trial --docker

FROM node:16.18-alpine AS installer

RUN apk add --no-cache libc6-compat
RUN apk update

RUN corepack enable

WORKDIR /app
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN pnpm turbo run build --filter=workspace-trial
RUN pnpm -F workspace-trial --prod deploy ./pruned

FROM node:16.18-alpine

ENV NODE_ENV=production

COPY --from=installer /app/pruned .

CMD [ "node", "./dist/index.js" ]
