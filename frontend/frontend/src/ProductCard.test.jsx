/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('Testando o Componente Visual de Flores', () => {

  test('Deve exibir o nome da flor e o preço na tela', () => {
    render(<ProductCard nome="Girassol" preco="12.90" />);

    // Verifica se o texto "Girassol" está aparecendo na tela
    expect(screen.getByText('Girassol')).toBeInTheDocument();
    expect(screen.getByText('Preço: R$ 12.90')).toBeInTheDocument();
  });

  test('Deve clicar no botão de adicionar e disparar a ação', () => {
    const funcaoSimulada = jest.fn(); // Cria uma função "espiã"
    render(<ProductCard nome="Girassol" preco="12.90" aoAdicionar={funcaoSimulada} />);

    const botao = screen.getByRole('button', { name: /Adicionar ao Carrinho/i });
    fireEvent.click(botao); // Simula o clique do cliente

    // Verifica se a função foi chamada exatamente 1 vez
    expect(funcaoSimulada).toHaveBeenCalledTimes(1);
  });

});