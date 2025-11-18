# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine AS runtime

LABEL org.opencontainers.image.source="https://github.com/naadirah-kagee/nkassessments" \
      org.opencontainers.image.title="NK Assessments landing page" \
      org.opencontainers.image.description="Containerized static site for NK Assessments" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /usr/share/nginx/html

# Install curl for container healthchecks
RUN apk add --no-cache curl

# Copy the entire static bundle (see .dockerignore for exclusions)
COPY . /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -fsS http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
