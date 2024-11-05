# Produto API

Este é um projeto de API para gerenciar produtos utilizando Express e PostgreSQL, configurado com Docker.

## Tecnologias Usadas

- Node.js
- Express
- PostgreSQL
- Docker

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

### Configure o arquivo .env

Ao clonar o repositório, será necessário criar o arquivo .env para que o banco de dados rode e se conecte corretamente.
Esse arquivo deve seguir o seguinte padrão:
```
PGUSER={usuario}
PGPASSWORD={senha}
PGHOST=localhost
PGDATABASE={nome_do_banco_de_dados}
PGPORT=5433
```

### Docker

Para executar o Docker, execute o comando:
```
docker compose up -d
```

Com a API rodando, basta testar as requisições no seu Client API.

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
### GET
#### Retorna todos os produtos.
```
http://localhost:3000/produto
```
#### Retorna o produto com o Id da URL.
```
http://localhost:3000/produto/1
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
http://localhost:3000/produto/1
```



