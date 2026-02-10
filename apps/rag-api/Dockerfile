FROM node:22-alpine

WORKDIR /app

COPY package.json tsconfig.json ./
COPY src ./src

RUN npm install -g pnpm && pnpm install --no-frozen-lockfile
RUN pnpm build

EXPOSE 3002

CMD ["pnpm", "start"]
