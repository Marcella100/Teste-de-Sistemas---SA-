// product.service.js

// Simulando um banco de dados na memória para as flores
let estoqueDeFlores = [];

async function cadastrarFlor(nome, preco, quantidade) {
  // Regra de Negócio: O preço não pode ser menor ou igual a zero
  if (preco <= 0) {
    throw new Error("O preço da flor deve ser maior que zero!");
  }

  // Se estiver tudo certo, cria a flor com um ID fictício
  const novaFlor = {
    id: estoqueDeFlores.length + 1,
    nome: nome,
    preco: preco,
    quantidade: quantidade
  };

  estoqueDeFlores.push(novaFlor);
  return novaFlor;
}

module.exports = { cadastrarFlor };