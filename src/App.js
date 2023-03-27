
import './App.css';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Contador de Vocales</h1>
      <form onSubmit={presion}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Ingrese el texto:</Form.Label>
        <Form.Control  type="text" name="texto" placeholder="Escribe..." />
      </Form.Group>
          <Button  type="submit">Mostrar</Button>
        <p>
         
        </p>
      </form>
      </header>
    </div>
    
  );
}

function presion(e) {
  e.preventDefault();
  const texto=(e.target.texto.value);
  let cont=0;
  let vocales= 'aeiouAEIOU';
  for(let i = 0; i < texto.length; i++) {
    if(vocales.indexOf(texto[i]) !== -1) {
      cont ++;
    }   
  }
  alert("Hay un total de "+cont);
  return cont;
}

export default App;