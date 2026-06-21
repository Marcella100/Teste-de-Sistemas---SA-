// ProductCard.jsx
import React from 'react';

export default function ProductCard({ nome, preco, aoAdicionar }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <button onClick={aoAdicionar}>Adicionar ao Carrinho</button>
    </div>
  );
}