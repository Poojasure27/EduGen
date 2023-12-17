import React from 'react'
import "../../styles/about.css";

const aboutData = [
  {
    icon: "ri-microsoft-fill",
    desc: 'Automatically monitors through class surviellance camera'

  },
  {
    icon: "ri-group-fill",
    desc: 'Marks attendance and computes analytics'

  },
  {
    icon: "ri-qr-code-line",
    desc: 'QR code, biometric options included as well'

  },

]

const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
            <h6 className='subtitle'>Automated Attendance</h6>
            {
            aboutData.map((item,index)=>(
                <div className="about__item" key = {index}>
                <span className="about__icon">
                <i class={item.icon}></i>
                
                </span>
                <h3 className="about__description">{item.desc}</h3>
                
            </div>
            ))
           }
            </div>

            <div className="about__img"></div>
        </div>
    </div>
  </section>
}

export default About
