
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';

function Counter() {
  let [cont, setCont] = useState(0);

  const incrementar = () => {
    setCont(cont++);
  };

  const disminuir = () => {
    setCont(cont--);
  };

  return (
    <div className='App' >
      <header className='App-header'>
    
      <Button className='Button' variant="success" onClick={incrementar}>Aumentar ↑</Button>
      <p >CONTADOR:{cont}</p>
      <Button className='Button2' variant="danger" onClick={disminuir}>Disminuir ↓</Button>
      </header>
    </div>

  );
}

export default Counter;