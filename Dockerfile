FROM golang:1.6-alpine

EXPOSE 8080

RUN apk --update add --no-cache git nodejs 
RUN npm install --global gulp-cli

ENV GOPATH=/go GOBIN=$GOPATH/bin PATH=$PATH:/go/bin

VOLUME ["/go/src/github.com/jetbasrawi/godev", "/go/pkg", "/go/bin"]

WORKDIR /go/src/github.com/jetbasrawi/godev

RUN npm install --save-dev gulp

CMD ["gulp"]
