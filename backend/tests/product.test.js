// product.test.js
const { cadastrarFlor } = require('../src/services/product.service');

describe('Testando o Gerenciamento de Produtos (Floricultura)', () => {

  // Teste 1: Cenário Feliz (Tudo certo)
  test('Deve cadastrar uma flor com sucesso se os dados forem válidos', async () => {
    const flor = await cadastrarFlor("Rosa Vermelha", 5.90, 50);
    
    expect(flor).toHaveProperty("id");
    expect(flor.nome).toBe("Rosa Vermelha");
    expect(flor.preco).toBe(5.90);
  });

  // Teste 2: Cenário de Erro (Preço inválbido)
  test('Deve barrar o cadastro se o preço for menor ou igual a zero', async () => {
    await expect(cadastrarFlor("Orquídea Rara", -10.00, 5))
      .rejects
      .toThrow("O preço da flor deve ser maior que zero!");
  });

});