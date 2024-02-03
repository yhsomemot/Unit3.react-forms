import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenitcate'
import SignUpForm from './components/SignUpForm'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />

    </>
  )
}

export default App
