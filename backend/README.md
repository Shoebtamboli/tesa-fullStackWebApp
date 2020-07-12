## build docker image
    docker build -t tesa-backend .

    docker run -it -p 6000:5000 tesa-backend

    docker run -d -p 6000:5000 tesa-backend