import { useState } from 'react'
import './App.scss'
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero'
import { Main } from './components/main/main'
import { OtherFilm } from './components/otherfilm/otherfilm'
import { Footer } from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <OtherFilm />
      <Footer />
    </>
  )
}

export default App



