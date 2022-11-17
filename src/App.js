import React, { useState } from 'react'
import './index.css'

function App() {
  const [counter, setCounter] = useState(0)

  function handleClick1() {
    setCounter(counter + 1)
  }

  function handleClick2() {
    setCounter(counter - 1)
  }


  return (
    <div className='container'>

      <div>
        <h1>quantos pedaços você já comeu?</h1>
      </div>

      <div>
        <h4>
          não importa, o Lucas vai comer mais que você
        </h4>

        <h5>
          o William também!
        </h5>
      </div>

      <div>
        {counter}
      </div>


      <h6>
        #praticx10anos
      </h6>

      <div>
        <button className='adicionar' onClick={handleClick1}>+</button>
        <button className='remover' onClick={handleClick2}>-</button>
      </div>


    </div>
  );
}

export default App;
