# Produto API

Este é um projeto de API para gerenciar produtos utilizando Express e PostgreSQL, configurado com Docker.

## Tecnologias Usadas

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose

## Pré-requisitos

Antes de começar, você precisará ter instalado:

 - NPM
 - Docker
 - PostgreSQL


## Configuração do Ambiente

### Clonando o Repositório

Clone este repositório para sua máquina local:

```
git clone https://github.com/AndreBaretta/produto-api.git
```

### Configure a pasta .env

Ao clonar o repositório, será necessário configurar a pasta .env para que o banco de dados rode e se conecte corretamente.
Dentro desse arquivo será necessário colocar as suas informações do postgreSQL, como nome de usuário e senha.

### Executando

Com tudo pronto, basta executar o projeto e testá-lo no Client API escolhido.
Primeiro, entre no diretório onde o projeto foi copiado.
```
cd produto-api
```
Instale as dependencias
```
npm i
```
Execute a API
```
npm run dev
```
Ao executar a API, a tabela de produtos e o seeding do banco de dados serão feitos automaticamente.

### Docker

Para executar o Docker, basta abrir o terminal e executar os seguintes comandos:
```
docker-compose up --build
```

Com a API rodando, basta testar as requisições no seu Client API.

### GET
#### Retorna todos os produtos.
```
http://localhost:3000/produto
```
#### Retorna o produto com o Id da URL.
```
http://localhost:3000/produto/3
```

### POST
#### Cria um novo produto com as informações do corpo da requisição
```
http://localhost:3000/produto
```
### PUT
#### Atualiza um produto já existente
```
http://localhost:3000/produto/1
```
### DELETE
#### Apaga um produto 
```
http://localhost:3000/produto/2
```
Apaga o produto com o ID presente na URL.



