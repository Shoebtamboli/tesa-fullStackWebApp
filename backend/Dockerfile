# Create image based on node image
FROM node:12.18.2-stretch-slim

# create app directory where app will be placed
RUN mkdir -p /usr/src/app

# change directory
WORKDIR /usr/src/app

# install dependencies
COPY package.json /usr/src/app
#RUN npm cache clean
RUN npm install
COPY . /usr/src/app
EXPOSE 5000
CMD ["npm","start"]

# bundle app source
# VOLUME /usr/src/app/

# psql
# RUN apt-get update && apt-get install -y postgresql-client
