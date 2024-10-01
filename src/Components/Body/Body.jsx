import React from 'react'
import Login from '../Login/Login'
import Browse from '../Browse/Browse'
import { Route,Routes } from 'react-router-dom'

function Body() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/browse' element={<Browse/>}></Route>
        </Routes>
    </div>
  )
}

export default Body