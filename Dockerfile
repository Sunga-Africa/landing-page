# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_PUBLIC_BASE_URL_PRODUCTION="https://sunga.africa/api"
ENV NEXT_PUBLIC_CONTACT_EMAIL="hello@sunga.africa"

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app
EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_URL_PRODUCTION="https://sunga.africa/api"
ENV NEXT_PUBLIC_CONTACT_EMAIL="hello@sunga.africa"

RUN apk add --no-cache openssl

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "run", "start"]
