# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## Docker

### Comando para criar um container com imagem de forma nativa com o banco postgresql.

``
    docker run --name <nome da imagem> -e POSTGRESQL_USERNAME=<username> -e POSTGRESQL_PASSWORD=<password> -e POSTGRESQL_DATABASE=<databasename> -p 5432:5432 bitnami/postgresql:latest
``

### Comando para subir um container de forma nativa.

``
    docker start <nome da imagem>
``

### Comando para pausar um container de forma nativa.

``
    docker stop <nome da imagem>
``

### Comando para excluir um container de forma nativa.

``
    docker rm <nome da imagem>
``

### Comando para consultar os containers ativos de forma nativa.

``
    docker ps
``

### Comando para consultar todos containers que estão em sua maquina de forma nativa.

``
    docker ps -a
``

### Comando para criar e subir um container com docker compose e com o banco postgresql.

``
    docker-compose up -d
``

### Comando para pausar um container com docker compose .

``
    docker-compose stop
``

### Comando para excluir todos os container com docker compose (sempre evitar esse comando).

``
    docker-compose down
``


[Link para instalar o docker e docker-compose no ubunto 22.04](https://rosnertech.com.br/instalando-o-docker-no-ubuntu-22-04/)

[Link da doc explicando sobre as permiçoes no docker](https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket)

## Prisma ORM (Camandos em ordem)

### Comando para instalar o Prisma

``
    npm i prisma - D
``

### Comando pra inicializar o Prisma

``
    npx prisma init
``

### Comando para instalar o Prisma Client

``
    npm i @prisma/client
``

### Comando para gerar as models integrando ao typesripyt

``
    npx prisma generate
``

### Comando para criar uma migration

``
    npx prisma migrate dev
``

### Comando para rodar localmente o studio do prisma client

``
    npx prisma studio
``
