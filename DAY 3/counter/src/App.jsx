import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter the number</h1>
      <div className="card">
        <button className='Count'>{count}
        </button>
        <button class="increment" onClick={() => setCount((count) => count + 1)}>
          Increment by 1
        </button>
        <button class="decrement" onClick={() => setCount((count) => count - 1)}>
          Decrement by 1
        </button>
        <button class="reset" onClick={() => setCount((count) => 0 )}>
          Reset to zero
        </button>
      </div>
    </>
  )
}

export default App;
