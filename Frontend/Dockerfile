FROM node:18 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM node:18 AS production-stage
WORKDIR /app
RUN npm install -g http-server
COPY --from=build-stage /app/dist/frontend /app
EXPOSE 8080
CMD ["http-server", "/app", "-p", "8080"]
