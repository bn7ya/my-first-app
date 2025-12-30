
import { useState } from 'react'
import './App.css'
import Button from './Shared/Button'
import Counter from './Shared/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='first'>
      <h1 className='title'>التطبيق الأول بـ React</h1>
      <p className='description'>العمل الذي سيكون افتتاحية لأفضل الواجهات في العالم بإذن الله</p>
      <Button text={'اضغط'} onClick={() => setCount(count + 1)}></Button>
      <Counter number={count}/>
    </div>
  )
}

export default App
