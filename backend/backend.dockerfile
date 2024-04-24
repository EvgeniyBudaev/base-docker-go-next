# https://docs.docker.com/language/golang/build-images/
# base go image
FROM golang:1.22.1 as builder

WORKDIR /app

# dependencies
COPY ["go.mod", "go.sum", "./"]
RUN go mod download

# build
COPY . .
RUN CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o ./bin/serverApp ./cmd

FROM debian:latest

COPY --from=builder /app/.env /
COPY --from=builder /app/bin/serverApp /

CMD ["/serverApp"]