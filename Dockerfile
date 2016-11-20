FROM nginx:1.11-alpine
MAINTAINER Jaynarol <docker@jaynarol.com>

COPY dist /var/www/html/

RUN echo '\
worker_processes auto;\
events {\
    worker_connections  1024;\
    multi_accept        on;\
}\
http {\
    include		mime.types;\
    default_type	text/html;\
    server {\
        root		/var/www/html/;\
	index		index.html index.htm;\
        charset		utf-8;\
        location / {\
           try_files $uri /index.html;\
        }\
    }\
}\
'\
> /etc/nginx/nginx.conf