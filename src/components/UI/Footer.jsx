import React from 'react'
import "../../styles/footer.css";

const quickLinks1 = [{
    path:'#',
    display: "Address",
    icon: "ri-map-pin-line"
},
{
    path:'#',
    display: "Telephone",
    icon:"ri-phone-fill"
},
{
    path:'#',
    display: "Email",
    icon:"ri-mail-line"
},
]

const Footer = () => {
    const year = new Date().getFullYear()
  return <footer className="footer" id="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>EDU GEN</h2>
                <p className="description"></p>

            </div>
            <div className="footer__links">
                <div className="link__title">Contact</div>
                <ul className="quick__links">
                    {
                        quickLinks1.map((item,index)=>(
                            <li className="quick__link-item" key = {index}>
                                <a href={item.path}>{item.display}</a> <span className="footer__icon">
                                <i class={item.icon}></i>
                            </span></li>
                           
                        ))
                    }
                </ul>
            </div>


            

        </div>
        <p className="copyright">copyrights {year}, developed by pooja and ejlan. All rights reserved. {" "}</p>
    </div>
  </footer>
}

export default Footer
