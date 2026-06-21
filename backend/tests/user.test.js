// user.test.js
const { autenticarUsuario } = require('../src/services/user.service');

describe('Testando o sistema de Login da Floricultura', () => {

  // Teste 1: Cenário onde tudo dá certo
  test('Deve logar com sucesso se colocar o e-mail e a senha certos', async () => {
    const resultado = await autenticarUsuario("admin@flora.com", "flora123");
    
    // O que nós esperamos que aconteça? Que o login seja verdadeiro!
    expect(resultado.login).toBe(true);
    expect(resultado.usuario).toBe("Gerente da Floricultura");
  });

  // Teste 2: Cenário onde o usuário erra a senha
  test('Deve dar erro se colocar a senha errada', async () => {
    // Nós esperamos que essa função quebre/rejeite com o erro esperado
    await expect(autenticarUsuario("admin@flora.com", "senha-errada"))
      .rejects
      .toThrow("E-mail ou senha incorretos!");
  });

});