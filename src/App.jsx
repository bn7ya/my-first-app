
import { useState } from 'react'
import './App.css'
import Button from './Button'


function App() {
  const titleStyle = { 
    textAlign: 'center', 
    background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '5px', 
    padding: '5px' 
  }

  const descStyle = { 
    textAlign: 'center', 
    background: 'linear-gradient(90deg, rgba(42, 138, 155, 1) 0%, rgba(100, 199, 87, 1) 50%, rgba(83, 237, 229, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '5px', 
    padding: '5px' 
  }

  const [count, setCount] = useState(0)
  return (
    <div className='first'>
      <h1 style={titleStyle}>التطبيق الأول بـ React</h1>
      <p style={descStyle}>العمل الذي سيكون افتتاحية لأفضل الواجهات في العالم بإذن الله</p>
      <Button text={'اضغط'} onClick={() => setCount(count + 1)}></Button>
      <h1 className='counter'>{count}</h1>
    </div>
  )
}

export default App
