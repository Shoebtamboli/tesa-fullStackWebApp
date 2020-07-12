# How to Run 
    git clone 
    cd 
    docker-compose up --build -d
    docker-compose up

    Check that application is running on localhost:3000

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


---
title: tesa scribos / web development task
---

# Web development task for full stack web dev position

## The web application

    It just shows a list of promotion campaigns - as the texts are in German, I provide a quick translation below:

    - Title: Campaigns
    - Column headers: Campaign title, Status, Creation date, Creation user

    The campaign title is obviously the name of the campaign. 
    The status shows if a campaign is planned (= geplant), running (= laufend), in processing (= in Bearbeitung) or has finished (= abgelaufen).
    Creation date and creation user need no further explanation, I guess.
    The icons at the right show some actions that can be performed on the campaign.

    A campaign in the states 'planned', 'in processing' can be edited or deleted.
    A 'running' campaign can be edited or stopped.
    A 'finished' campaign can be edited.

IMPORTANT: We focus only on displaying campaigns - YOU DON'T NEED TO IMPLEMENT THE ACTIONS, SHOWING THE POSSIBLE ACTIONS IS ENOUGH.

## The frontend
    React JS
    MaterialUI, AntUI, Bootstrap

## The backend

    django, flask, nodejs
    a simple SQLite db is sufficient - but you can also add a full fledged MySQL or PostgreSQL.
    The backend should provide a REST- or a GraphQL-API.

## Infrastructure

We would prefer a container-based implementation that allow us to fire up the application with a simple
`docker-compose up`.
But if you are not familiar with docker giving us some 'How to start my application' docs is also fine.

## Source code

    git clone
    npm install
    npm start

## How we will run the web application

    We would like to run your web application with a simple `git clone` + `docker-compose up` + 'open webrowser with localhost:3000'.

