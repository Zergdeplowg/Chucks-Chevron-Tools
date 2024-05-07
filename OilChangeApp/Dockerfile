FROM node:21-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g ionic
RUN npm install
COPY ./ /app/
RUN ionic build --prod
FROM nginx:alpine
RUN rm -rf /user/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/

