import React from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Container from "./components/Container/Container"
function App() {
  return (
    <div className='main-container'>
      <NavBar/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App