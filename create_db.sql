CREATE DATABASE produto-api

\c produto-api

CREATE TABLE produto(
   id SERIAL PRIMARY KEY,
   descricao VARCHAR(100),
   preco MONEY,
   estoque NUMERIC,
   data DATE
);
