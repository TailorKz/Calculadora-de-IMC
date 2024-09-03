import React, { useState } from 'react';
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {


  let [Peso, setPeso] = useState(0);
  let [Altura, setAltura] = useState(0);

  const CalculaImc = () => {
    const soma = Peso / Altura * Altura
    if (soma <= 17 ) {
      return (
        <p>Magro</p>
      )
    } else {
      return (
    <p>Normal</p>
      )
    }
  }

  return (
    <div className='container'>
      <form>
        <h1>Calculadora de IMC</h1>
        <input type="number" name="Peso" placeholder='Digite seu peso (kg)' id="container--peso" onChange={evento => setPeso(evento.target.value)} />
        <input type="number" name="Altura" placeholder='Digite sua altura (ex: 1.80 )' id="container--altura" onChange={evento => setAltura(evento.target.value)} />
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
            <p>Resultado: </p>
            <button id="form-button">
              <img src={Trash} alt="Trash Icon" />
            </button>
          </div>
        </div>
      </div>
      {CalculaImc()}
    </div>
)
}


export default Home
