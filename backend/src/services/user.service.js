// user.service.js
// Esta função simula a verificação de um usuário no banco de dados da floricultura

async function autenticarUsuario(email, senha) {
  // Regra simples: Se o e-mail for do administrador e a senha for "flora123"
  if (email === "admin@flora.com" && senha === "flora123") {
    return { login: true, usuario: "Gerente da Floricultura" };
  }
  
  // Se errar a senha ou o e-mail, gera um erro
  throw new Error("E-mail ou senha incorretos!");
}

module.exports = { autenticarUsuario };