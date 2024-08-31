// import React from 'react'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Forgetpassword from './Components/Forgetpassword.jsx'
import Resetpassword from './Components/Resetpassword.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

<Route path='/signup' element={<Signup/>}/>

<Route path='/login' element={<Login/>}/>

<Route path='/dashboard' element={<Dashboard/>}/>

<Route path='/forgetpassword' element={<Forgetpassword/>}/>

<Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/>

<Route path='*' element={<Login/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App