import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Featured Products</h1>
      {
        data.products.map(product => (<div>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>))
      }
    </div>
  )
}

export default App
