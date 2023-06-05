FROM golang AS Production

ENV GO_ENV=production

WORKDIR /usr/src/api

COPY go.mod .
RUN go mod download

COPY . .
RUN go build resume

CMD ["/resume"]