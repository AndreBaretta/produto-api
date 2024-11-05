const express = require('express');
require('dotenv').config();
const produtoRoutes = require('./routes/produto');

const app = express();

app.use(express.json());

app.use('/produto', produtoRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

