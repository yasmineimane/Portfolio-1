import React from 'react'
import './header.css'
import CTA from './CTA'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>
            Hello I'm
          </h5>
          <h1>
            Mesbahi Imane Yasmine 
          </h1>
          <h5>
            Web Developer
          </h5>
          <CTA/>

        <a href="#experience" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header