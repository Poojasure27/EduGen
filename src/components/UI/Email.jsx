import React from 'react'
import"../../styles/email.css";

const Email = () => {
  return <section className="newsletter">
    <div className="container">
      <div className="newsletter__wrapper">
        <div className="newsletter__content">
          <h6 className="subtitle"></h6>
          <h2>Explore the <span className="highlight"></span>hidden ideas</h2>
        </div>
        <div className="newsletter__form">
          <input type="email" placeholder='Email' />
          <button className="secondary__btn">subscribe Now</button>
        </div>
      </div>
    </div>
  </section>
}

export default Email
