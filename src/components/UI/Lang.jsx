import React from 'react'
import "../../styles/language.css"

const langData = [
    {   icon: "ri-reactjs-line",
        title: 'Product Management Basic course',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi rerum ea?"
    }
]

const Services = () => {
  return <section id="course">
    <div className="container">
        <div className="lang__top-content">
            <h6 className='subtitle'>Multilingual Content</h6>
            <h2>This powerful tool combines Gen AI and natural Language processsing to</h2>
            <h2 className="highlight">Generate Multilingual Content</h2>
        </div>
        <div className="lang__item-wrapper">
           {
            langData.map((item,index)=>(
                <div className="lang__item" key = {index}>
               <span className="lang__icon">
               <i class={item.icon}></i>
               </span>
                <h3 className="lang__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
            ))
           }
        </div>
    </div>
  </section>
}

export default Services
