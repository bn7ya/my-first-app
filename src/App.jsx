
import { useState } from 'react'
import './App.css'
import Button from './Shared/Button'
import Counter from './Shared/Counter'


function App() {
  const titleStyle = { 
    textAlign: 'right', 
    background: 'linear-gradient(170deg, rgba(29, 92, 117, 1) 0%, rgba(87, 182, 199, 1) 50%, rgba(36, 180, 113, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '5%', 
    padding: '1%' 
  }

  const descStyle = { 
    textAlign: 'left', 
    background: 'linear-gradient(90deg, rgba(42, 138, 155, 1) 0%, rgba(100, 199, 87, 1) 50%, rgba(83, 237, 229, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '5%', 
    padding: '1%',
  }

  const [count, setCount] = useState(0)
  return (
    <div className='first'>
      <h1 style={titleStyle}>التطبيق الأول بـ React</h1>
      <p style={descStyle}>العمل الذي سيكون افتتاحية لأفضل الواجهات في العالم بإذن الله</p>
      <Button text={'اضغط'} onClick={() => setCount(count + 1)}></Button>
      <Counter number={count}/>
    </div>
  )
}

export default App
