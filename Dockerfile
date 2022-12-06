FROM node:18-alpine3.16 as base

RUN corepack enable

FROM base as build

WORKDIR /app

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm i

FROM base as application

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY ./ ./

RUN pnpm run build

FROM nginx:mainline-alpine

WORKDIR /app

COPY --from=application /app/dist ./dist/

COPY --from=application /app/nginx.conf /etc/nginx/conf.d/default.conf

# ENTRYPOINT ["node", "build/index.js"]