import { useState } from 'react'
import './componentes/Card';
import './App.css'  
import Card from './componentes/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cr-Cards'>
        <Card userName='shakira' name='Shakira Lamas'></Card>
        <Card userName='maluma' name='luis Velasquez'></Card>
        <Card userName='sandra' name={'sandra marcela'}></Card>
        <Card/>
      </div>  
    </>
  )
}

export default App
