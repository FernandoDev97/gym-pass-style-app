# App

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

## Docker

### Comando para criar um container com imagem de forma nativa com o banco postgresql.

``
    docker run --name <nome da imagem> -e POSTGRESQL_USERNAME=<username> -e POSTGRESQL_PASSWORD=<password> -e POSTGRESQL_DATABASE=<databasename> -p 5432:5432 bitnami/postgresql:latest
``

### Comando para subir um container de forma nativa.

``
    docker start <nome do container>
``

### Comando para pausar um container de forma nativa.

``
    docker stop <nome do container>
``

### Comando para excluir um container de forma nativa.

``
    docker rm <nome do container>
``

### Comando para consultar os containers ativos de forma nativa.

``
    docker ps
``

### Comando para consultar todos containers que estão em sua maquina de forma nativa.

``
    docker ps -a
``