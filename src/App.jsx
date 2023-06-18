import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <Experience/>
        <Projects/>
        <Footer/> 
    </>
  )
}

export default App