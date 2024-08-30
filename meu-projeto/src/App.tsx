/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [soma, setSoma] = useState(0)
  const [sub, setSub] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setSoma((soma) => soma + 1)}>
          + count is
        </button>
        <button onClick={() => setSub((sub) => sub - 1)}>
          - count is
        </button>
        <button onClick={() => setCount((Count) => soma + sub)}>
          count is
        </button>
      <div>
        <span> Soma {soma}</span> <div></div>
        <span> Sub {sub} </span>  <div></div>
        <span>Count {count} </span>
      </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import React from 'react';
import './App.css';
// Definindo uma interface para as props
interface WelcomeProps {
 name: string;
 age: number;
 job: string;
 careerTime: number;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, job, careerTime }) => {
 return (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old, you been working as a {job} for {careerTime} years.</p>
  </div>
  );
 };
 function App() {
  return (
  <div className='App'>
    <Welcome name='Alice' age={27} job='Psychologist' careerTime={5} />
    <Welcome name='Bob' age={30} job='Chef' careerTime={12}/>
    <Welcome name='Charlie' age={25} job='Attendant' careerTime={4}/>
    <Welcome name='Josh' age={38} job='Military' careerTime={20}/>
  </div>
  );
 }
 export default App;
 