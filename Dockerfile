FROM node:20-alpine

WORKDIR /app

CMD sh -c "npm install && tail -f /dev/null"
