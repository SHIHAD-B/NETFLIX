

import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Account } from './pages/Account'
import { AuthContextProvider } from './context/AuthContext'
import { ProtectedAccount } from './components/ProtectedAccount'

function App() {


  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/account' element={<ProtectedAccount><Account /></ProtectedAccount>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
