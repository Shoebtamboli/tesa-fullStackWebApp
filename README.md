---
title: tesa scribos / web development task
---

# How to Run 
    git clone https://github.com/Shoebtamboli/tesa-fullStackWebApp.git
    cd tesa-fullStackWebApp
    docker-compose up --build -d
    docker-compose up

    Check that application is running on `localhost:3000`

### How to start my application if docker doesnt work

    git clone https://github.com/Shoebtamboli/tesa-fullStackWebApp.git
    cd tesa-fullStackWebApp
    

### start the server
    
    cd backend
    npm start

### start the frontend
    cd frontend
    npm start 

### database
    psql


### Postgres wirh docker
    create docker image
        docker run --name postgres -e POSTGRES_PASSWORD=password -d postgres
    connect and run quries
        docker exec -it demo psql -U postgres
    To remove image
        docker rm -f demo

    docker run --name demo -v "$PWD"/:/opt/demo -e POSTGRES_PASSWORD=password1 -d postgres
    docker exec -it demo psql -U postgres -c "CREATE DATABASE demo_db2;"
    docker exec -it demo psql -U postgres -f /opt/demo/script_demo1.sql

    docker exec -it 'IMAGE_ID' psql -U postgres 'TABLE_NAME'


### curl commands
    curl -X GET "localhost:5000/api/campaign" -H "accept: application/json"
    curl -X GET "localhost:5000/api/campaign/:id" -H "accept: application/json"
    curl -X POST "localhost:5000/api/campaign" -H "accept: application/json"
    curl -X DELETE "localhost:5000/api/campaign/:id" -H "accept: application/json"
    curl -X POST "localhost:5000/api/campaign/:id" -H "accept: application/json"

docker volume rm $(docker volume ls -q)





