import React from 'react'
import "../../styles/services.css"

const serviceData = [
    {
        title: 'Assignment',
        desc: "Observes the method of assignment answering"
    },
    {
        title: 'Tests',
        desc: "Analysis the Tests with accuracy"
    },
    {
        title: 'AutoGrading',
        desc: "AutoGrads the assignments,tests and projects"
    },
    {
        title: 'Attendance',
        desc: "Analyzes based on smartFace Recognition"
    }
]

const Services = () => {
  return <section id="service">
    <div className="container">
        <div className="service__top-content">
            <h6 className='subtitle'>Smart Analysis</h6>
            <h2>Analyzes the students individually</h2>
            <h2 className="highlight">Generates custom learning path based on thr analysis</h2>
        </div>
        <div className="service__item-wrapper">
           {
            serviceData.map((item,index)=>(
                <div className="services__item" key = {index}>
               
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
            ))
           }
        </div>
    </div>
  </section>
}

export default Services
