import { useState } from 'react'
import './index.css'
import AddTask from './components/addTask'
import DisplayTask from './components/displayTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTask/>
    <DisplayTask />
    </>
  )
}

export default App
