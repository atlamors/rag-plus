FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json tsconfig.json next.config.js next-env.d.ts mdx-components.tsx ./
COPY app ./app
COPY content ./content
COPY public ./public

RUN pnpm install --no-frozen-lockfile
RUN pnpm build

EXPOSE 3001

CMD ["pnpm", "start"]
