# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets.

# Name the node stage "builder"
FROM node:13.12.0-alpine as builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in images
COPY . .
# install node modules and build assets
RUN npm install
RUN npm run build
RUN ls -la

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
COPY internal-nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
