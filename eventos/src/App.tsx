import React, { useState } from 'react';
import './App.css';
const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);
  // Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
  };
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
    };
    const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue3(event.target.value);
      };
  // Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    };
    const handleButtonClick2 = () => {
      setClickCount(clickCount - 1);
      };
      const handleButtonClick3 = () => {
        setClickCount(0);
        };
    return (
    <div>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor='inputField'>Digite seu nome: </label>
        <input
        type='text'
        id='inputField'
        value={inputValue}
        onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='inputField'>Qual sua fruta favorita: </label>
        <input
        type='text'
        id='inputField'
        value={inputValue2}
        onChange={handleInputChange2}
        />
      </div>
      <div>
        <label htmlFor='inputField'>Qual seu hobby favorito: </label>
        <input
        type='text'
        id='inputField'
        value={inputValue3}
        onChange={handleInputChange3}
        />
      </div>

      <div>
        <p>Seu nome: {inputValue}</p>
        <p>Sua fruta favorita: {inputValue2}</p>
        <p>Seu hobby favorito: {inputValue3}</p>
      </div>

      <div>
        <button className="botaoClick" onClick={handleButtonClick}>
          Clique aqui para adicionar
        </button>
      </div>
      <div>
        <button className="botaoClick" onClick={handleButtonClick2}>
          Clique aqui para subtrair
        </button>
      </div>
      <div>
        <button className="botaoClick" onClick={handleButtonClick3}>
          Clique aqui para resetar
        </button>
        <p>O botão foi clicado {clickCount} vezes</p>
      </div>
    </div>
 );
};
function App() {
 return (
 <div className='App'>
 <EventHandlingExample />
 </div>
 );
}
export default App;