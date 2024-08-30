import React, { useState } from 'react';
import './App.css';
// Definindo a interface para os itens da lista
interface Item {
 id: number;
 name: string;
 price: number;
 quantity: number;
 
}
// Componente de Lista que renderiza itens com base em uma condição
const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Apple', price: 1, quantity: 7 },
    { id: 2, name: 'Banana', price: 1.5, quantity: 6 },
    { id: 3, name: 'Cherry', price: 1, quantity: 3 },
    { id: 4, name: 'Suggar', price: 8, quantity: 2 },
    { id: 5, name: 'Melon', price: 3, quantity: 3 }
    ]);
    const [showItems, setShowItems] = useState<boolean>(true);
    return (
    <div>
      <h1>Lista de Itens</h1>
      <button onClick={() => setShowItems(!showItems)}>
        {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
      </button>
      {/* Renderização Condicional */}
      {showItems ? (
        <ul>
          {/* Renderizando a lista de itens */}
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) :  
      (
        <p>A lista está oculta</p>
      )}
    </div>
 );
};
function App() {
 return (
 <div className='App'>
  <ItemList />
 </div>
 );
}
export default App;