# Start server

node >= 12 is required

### Install dependencies

`$ npm install`

### Run dev environment

`$ npm start`

## Run with docker

### Build image

`$ docker build -t meli-challenge-server .`

### Run container

```
docker run \
-it \
--rm \
-v ${pwd}:/app \
-v /app/node_modules \
-p 4000:4000 \
meli-challenge-server
```

## Start server using docker and docker-compose

`docker` and `docker-compose` is required

`$ docker-compose up --build`
