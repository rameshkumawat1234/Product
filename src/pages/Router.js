import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Header' element={<Header/>}/>
        </Routes> 
    </div>
  )
}

export default Router
