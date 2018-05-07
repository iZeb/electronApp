import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Component/Home'


const Routers = () => (
  <Route path='/' component={Home}></Route>
)
export default Routers