# Start client

node >= 12 is required

## Install dependencies

`$ npm install`

## Run dev environment

`$ npm start`

## Run with docker

### Build image

`$ docker build -t meli-challenge-client .`

### Run container

```
docker run \
-it \
--rm \
-v ${pwd}:/app \
-v /app/node_modules \
-p 3000:3000 \
meli-challenge-client
```

## Start client using docker and docker-compose

`docker` and `docker-compose` are required

`$ docker-compose up --build`
