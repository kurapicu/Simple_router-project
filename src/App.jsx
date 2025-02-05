import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { lazy,Suspense } from 'react'  

import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import Welcome from './pages/Welcome'
const Welcome_one= lazy(()=> import ('./pages/Welcome_one'))
const Welcome_two= lazy(()=> import ('./pages/Welcome_two'))
const More_info= lazy(()=> import ('./pages/More_info'))
const Loader= lazy(()=> import ('./assets/loading'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      // fontSize:'100px'
    }}><Loader/></div>}>
      <Routes>
        <Route path='/' element={<Sign_in/>}/>
        <Route path='/home' element = {<Navigate to= '/'/>} />

        <Route path='/sign_in' element={<Sign_in/>}/>
        <Route path='/sign_up' element={<Sign_up/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/welcome/one' element={<Welcome_one/>}/>
        <Route path='/welcome/two' element={<Welcome_two/>}/>
        <Route path='/More_info/:id' element={<More_info/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App