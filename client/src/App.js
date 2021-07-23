import React from 'react'
import Header from './components/Header'
import Heading from './components/Heading'
import HeroCard from './components/HeroCard'
import Modal from './components/Modal'

function App() {
  return (
    <div className="container">
      <Modal />
      <Header />
      <Heading />
      <HeroCard />
    </div>
  )
}

export default App
