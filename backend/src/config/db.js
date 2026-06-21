const { Pool } = require('pg');
require('dotenv').config(); // Carrega as variáveis de ambiente do ficheiro .env

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'floricultura_db',
  password: process.env.DB_PASSWORD || 'sua_senha_aqui',
  port: process.env.DB_PORT || 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool // Exporta o pool para caso precise de encerrar as conexões nos testes
};