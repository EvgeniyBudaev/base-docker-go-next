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

Установка Node.js на сервере ubuntu
https://selectel.ru/blog/tutorials/how-to-install-node-js-on-ubuntu-20-04/
```
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
вариант 1)
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | sudo bash
. .bashrc
если не сработает вариант 1, то вариант 2) 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm --help
nvm install 18.17.0
```

Установка Git
```
sudo apt update
sudo apt-get install git
git --help
```

Удаление директории с файлами
```
rm -rf go1.21.1.linux-amd64.tar.gz
```

Установка Docker
https://selectel.ru/blog/docker-install-ubuntu/
```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce -y
sudo systemctl start docker
sudo systemctl enable docker
docker -v
```

Установка Docker compose
https://docs.docker.com/compose/install/linux/
```
вариант 1)
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker–compose –version
вариант 2)
sudo apt-get update
sudo apt-get install docker-compose-plugin
docker compose version
```

Установка Make
```
sudo apt update
sudo apt-get install build-essential
make --version
```

Удаление директории с файлами
```
rm -rf base-docker-go-next/
```

Клонирование
```
git clone https://github.com/EvgeniyBudaev/base-docker-go-next
```

Docker
Список контейнеров
```
docker ps -a
```
Список всех образов
```
docker image ls
```

Удаление контейнера
```
docker rm container_id
```
Удаление всех контейнеров
```
docker rm -f $(docker ps -a -q)
```
Удаление всех образов
```
docker rmi -f $(docker images -q)
```

Сборка docker-образа
```
docker build . # Соберёт образ на основе Dockerfile
docker image ls # Отобразит информацию обо всех образах
```

SSH-ключ для доступа на сервер
Создание новго ключа
```
ssh-keygen -t rsa
Enter passphrase (empty for no passphrase): жмем Enter
cat ~/.ssh/id_rsa.pub
```

Добавление публичного ключа на удаленный сервер
```
cat ~/.ssh/id_rsa.pub
ssh-copy-id -i ~/.ssh/id_rsa.pub root@158.160.90.159
```
Добавление приватного ключа на удаленный сервер
```
cat ~/.ssh/id_rsa
```

Зайти на удаленный сервер
```
ssh budaev799@158.160.90.159
```

Отредактируйте файл nginx.conf и в строке server_name впишите свой IP

Скопируйте файлы docker-compose.yaml и nginx.conf из проекта на сервер (на локальной машине в терминале по месту
нахождения файла, нужно создать на сервере mkdir nginx):
```
scp docker-compose.yml budaev799@158.160.90.159:/home/budaev799/docker-compose.yml
scp default.conf budaev799@<host>:/home/budaev799/nginx/default.conf
```

Удаление директории с файлами
```
rm -rf docker-compose.yml
rm -rf nginx
```
