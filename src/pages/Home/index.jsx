import React, { useState } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';

function Home() {
  let [Peso, setPeso] = useState('');
  let [Altura, setAltura] = useState('');
  let [valorIMC, setValorIMC] = useState('');
  let [mensagemIMC, setMensagemIMC] = useState('');

  const CalculaImc = () => {
    const pesoNum = Number(Peso);
    const alturaNum = Number(Altura);

    if (pesoNum > 0 && alturaNum > 0) {
      const soma = pesoNum / (alturaNum * alturaNum);
      setValorIMC(soma.toFixed(2));

      if (soma <= 18) {
        setMensagemIMC('Magreza');
      } else if (soma > 18 && soma <= 25) {
        setMensagemIMC('Normal');
      } else if (soma > 25 && soma <= 30) {
        setMensagemIMC('Sobrepeso');
      } else if (soma > 30 && soma <= 40) {
        setMensagemIMC('Obesidade');
      } else {
        setMensagemIMC('Obesidade grave');
      }
    } else {
      setMensagemIMC('Preencha os campos corretamente');
    }
  };

  const handleReset = () => {
    setPeso('');
    setAltura('');
    setMensagemIMC('');
    setValorIMC('');
  };

  return (
    <div className='container'>
      <form>
        <h1>Calculadora de IMC</h1>
        <input
          type="number"
          name="Peso"
          placeholder='Digite seu peso (kg)'
          id="container--peso"
          value={Peso}
          onChange={evento => setPeso(evento.target.value)}
        />
        <input
          type="number"
          name="Altura"
          placeholder='Digite sua altura (ex: 1.80 )'
          id="container--altura"
          value={Altura}
          onChange={evento => setAltura(evento.target.value)}
        />
        <button type="button" onClick={CalculaImc}>Calcular</button>
      </form>
      <div>
        <div className='resultado'>
          <div>
            <p>Peso: {Peso}kg</p>
          </div>
          <div>
            <p>Altura: {Altura}m </p>
          </div>
          <div>
            <p>Resultado: {valorIMC} </p>
            <p>{mensagemIMC}</p>
            <button id="form-button" onClick={handleReset}>
              <img src={Trash} alt="Trash Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
