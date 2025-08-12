FROM node:20-alpine3.20 AS base

# Stage 1
FROM base AS deps

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
# Stage 2
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN cat eslint.config.mjs
ARG NEXT_PUBLIC_SERVER_URL
RUN echo "NEXT_PUBLIC_SERVER_URL is set to ${NEXT_PUBLIC_SERVER_URL}"
RUN npm run build


# Stage 3
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
RUN apk add --no-cache curl

EXPOSE 3001
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]