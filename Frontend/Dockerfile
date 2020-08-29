# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm i

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/Frontend /usr/share/nginx/html
EXPOSE 80
