import React from 'react'
import "../../styles/Hero.css";
import HeroDark from "../../images/looo.png";

const Hero = () => {
  return (<section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                <h1>Adapted to Gen AI</h1>
                
               
                <h2 className="highlight"></h2>
                </div>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam tempore odio et magni. Eveniet, rem?</p>

                <div className="hero__btns">
                    <button className="primary__btn">Explore Path</button>
                   
                </div>
            </div>
            <div className="hero__img">
            <img src={HeroDark} alt="hero-image" />
            </div>
        </div>
    </div>
  </section>
  );
}

export default Hero
