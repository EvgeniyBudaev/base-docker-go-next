Инициализация зависимостей

```
go mod init github.com/EvgeniyBudaev/base-docker-go-next/backend
```

Сборка

```
go build -v ./cmd/
```

Удаление неиспользуемых зависимостей

```
go mod tidy -v
```

Библиотека для работы с переменными окружения ENV
https://github.com/joho/godotenv

```
go get -u github.com/joho/godotenv
```

ENV Config
https://github.com/kelseyhightower/envconfig

```
go get -u github.com/kelseyhightower/envconfig
```

Логирование
https://pkg.go.dev/go.uber.org/zap

```
go get -u go.uber.org/zap
```

Fiber
https://github.com/gofiber/fiber

```
go get -u github.com/gofiber/fiber/v2
```

CORS
https://github.com/gorilla/handlers

```
go get -u github.com/gorilla/handlers
```

Errors

```
go get -u github.com/pkg/errors
```

Check container
```
apk add curl
curl http://127.0.0.1:8080/api/v1/user/add
```

Stop process
```
sudo lsof -i :15672
sudo lsof -i :5432
sudo lsof -i :3000
sudo lsof -i :80
sudo kill -9 $(sudo lsof -t -i:80)
sudo kill PID_number
```

--- SERVER ---

Установка Go на сервере ubuntu
https://timeweb.cloud/tutorials/go/ustanovka-go-na-ubuntu
```
wget https://go.dev/dl/go1.21.1.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.1.linux-amd64.tar.gz
sudo nano ~/.profile
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/goproject
export PATH=$PATH:$GOPATH/bin
source ~/.profile
mkdir $HOME/goproject
go version
```

Удаление директории с файлами
```
rm -rf go1.21.1.linux-amd64.tar.gz
```

Установка Node.js на сервере ubuntu
https://selectel.ru/blog/tutorials/how-to-install-node-js-on-ubuntu-20-04/
```
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | sudo bash
. .bashrc
nvm --help
nvm install 21.7.3
```