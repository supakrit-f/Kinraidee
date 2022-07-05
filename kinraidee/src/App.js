import { React, useState } from 'react';
import './App.css';
import DataFood from './data/dataF.json';

function App() {
  const [result, setResult] = useState([])
  const handleClick = () =>{
    setResult(DataFood[Math.floor(Math.random() * DataFood.length)]);
  }
  return (
    <div className="App">
      <div className="header">
        <h1>KINRAIDEE</h1>
      </div>
      <div className="container">
        <img src={result.image} />
        <h2>{result.title}</h2>
      </div>
      <div className="box-button">
        <button onClick={handleClick}>RANDOM</button>
      </div>
    </div>
  );
}

export default App;
