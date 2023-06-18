import React from 'react'
import './projects.css'
import Ecomerce from '../../assets/Ecomerce.png'
import TicTacToe from '../../assets/TicTacToe.png'
import Newsletter from '../../assets/Newsletter.png'
import AgeCalculator from '../../assets/AgeCalculator.png'
import Naghamat from '../../assets/Naghamat.jpg'
const Services = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={Ecomerce} alt="" />
          </div>
          <h3>E-comerce Website Using Node JS</h3>
          <a href="https://github.com/yasmineimane/E-Comerce" className='btn' target='blank'>Github</a>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={TicTacToe} alt="" />
          </div>
          <h3>TIC-TAC-TOE Using Flutter</h3>
          <a href="https://github.com/yasmineimane/tic_tac_toe" className='btn' target='blank'>Github</a>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={Newsletter} alt="" />
          </div>
          <h3>Newsletter using HTML CSS JS</h3>
          <a href="https://github.com/yasmineimane/Newsletter-sign-up-form-with-success-message" className='btn' target='blank'>Github</a>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={AgeCalculator} alt="" />
          </div>
          <h3>AgeCalculator using HTML CSS JS</h3>
          <a href="https://github.com/yasmineimane/Age-calculator-app" className='btn' target='blank'>Github</a>
        </article>
        <article className='projects__item'>
          <div className="projects__item-image">
            <img src={Naghamat} alt="" />
          </div>
          <h3>Naghamati using Flutter</h3>
          <a href="https://github.com/yasmineimane/Naghamat" className='btn' target='blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Services