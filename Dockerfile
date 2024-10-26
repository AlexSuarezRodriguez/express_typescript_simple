FROM node:23.0.0-alpine3.19

WORKDIR /app

RUN apk add --no-cache bash
RUN npm install -g typescript

CMD ["tail", "-f", "/dev/null"]