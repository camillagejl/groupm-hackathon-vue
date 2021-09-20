# GroupM

## Prototype

https://xd.adobe.com/view/361caf39-ce43-4a03-9c86-d4138f10be7d-634f/

## Services

### Moderator

This repository contains the start on the front end,
which would display the data to the company.

### Webcrawler

Crawls the web with Bing service from Azure.

https://github.com/linhphandk/webscraping_beautiful_soup


### NestJS backend

https://github.com/Paulina-21/GroupMSentiment


### Azure Text analysis service

This is the app that analyzes the data we get.
This uses the Azure Cognitive Services for text analyzing. 

https://github.com/camillagejl/groupm-hackathon-sentiment


### Docker compose

```

version: "3.9"

services:

rabbitmq:

image: rabbitmq:3.9-management

ports:

- 5672:5672

- 15672:15672

db:

image: mysql

command: --default-authentication-plugin=mysql_native_password

restart: always

ports:

- 3306:3306

environment:

MYSQL_ROOT_PASSWORD: example

volumes:

- ./docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d



adminer:

image: adminer

restart: always

ports:

- 8080:8080


```


---------

# groupm-hackathon-vue run

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
