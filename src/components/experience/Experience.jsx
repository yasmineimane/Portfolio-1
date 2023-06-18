import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skils I Have</h5>
      <h2>My Experiance</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <AiFillCheckCircle className='experience__details-icons'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          <h3 className='Mobile'>Mobile Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <AiFillCheckCircle className='experience__details-icons'/>
                <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience