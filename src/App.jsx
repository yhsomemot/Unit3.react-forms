import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenitcate'
import SignUpForm from './components/SignUpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}

export default App
