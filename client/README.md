# Meli Challenge - Franklin Lugo @franklinlugo2805@gmail.com

## Run with node

node >= 12 is required

### Install dependencies

`$ npm install`

### Run dev environment

`$ npm start`

### Production build

`$ npm run build`

and serve the `dist` folder

## Run with docker

### Build image

`$ docker build -t meli-challenge .`

### Run container

```
docker run \
-it \
--rm \
-v ${pwd}:/app \
-v /app/node_modules \
-p 3000:3000 \
meli-challenge
```

### Build image and run container with docker-compose

`$ docker-compose up --build`
