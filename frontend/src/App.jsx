import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Layout from './comonents/Layout'
import Home from './comonents/Home'
import Insert from './comonents/Insert'
import Display from './comonents/Display'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path='home' element = {<Home/>}/>
       <Route path='insert' element = {<Insert/>}/>
      <Route path='display' element = {<Display/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App