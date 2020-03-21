FROM nginx:alpine

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY dist/wirvsvirus-webapp /usr/share/nginx/html

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]