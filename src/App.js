import React, { useEffect, useState } from 'react'
import './index.css'
import Adicionar from './Assets/adicionar.svg'
import Remover from './Assets/remover.png'
import Logo from './Assets/logo.png'

function App() {
  const [counter, setCounter] = useState(() => {
    return JSON.parse(localStorage.getItem("contador"))
  })


  function handleClick1() {
    setCounter(counter + 1)
  }

  function handleClick2() {
    setCounter(counter - 1)
  }

  useEffect(() => {
    window.localStorage.setItem("contador", JSON.stringify(counter))
  })


  return (
    <div className='container'>

      <div>
        <img src={Logo} alt="" className='logo' />
      </div>

      <div className='pergunta'>
        <h1>quantos pedaços você já comeu?</h1>
      </div>

      <div>
        <h4 className='frase1'>
          não importa, o Lucas vai comer mais que você
        </h4>

        <h5 className='frase2'>
          o William também!
        </h5>
      </div>

      <div className='contador'>
        {counter}
      </div>

      <div className='buttons'>
        <a href={handleClick2} onClick={handleClick1}><img src={Adicionar} alt="" className='adicionar' /></a>
        <a href={handleClick2} onClick={handleClick2}><img src={Remover} alt="" className='remover' /></a>
      </div>

      <div className='hashtag'>
        <h6>
          #praticx10anos
        </h6>
      </div>



    </div>
  );
}

export default App;
