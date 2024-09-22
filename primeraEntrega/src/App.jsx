import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/> 
      <ItemListContainer greeting= "Mensaje de prueba"/>
    </>
  )
}

export default App