# build environment
FROM node:lts-alpine as build

WORKDIR /app

COPY ./src/ ./src
COPY ./public/ ./public
COPY ./package.json .

RUN npm install
RUN npm run build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
