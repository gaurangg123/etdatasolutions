# ── Stage 1: Dependencies ───────────────────────────────────────────────────
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# ── Stage 2: Builder ────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── Stage 3: Runner (minimal production image) ──────────────────────────────
FROM node:18-alpine AS runner
WORKDIR /app

# Install wget for HEALTHCHECK — not present in node:18-alpine by default
RUN apk add --no-cache wget

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Non-root user — never run as root in production
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

# Only copy the standalone output — minimal attack surface
COPY --from=builder /app/public                                ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static     ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check — verifies the app is responding before traffic is routed to it
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
