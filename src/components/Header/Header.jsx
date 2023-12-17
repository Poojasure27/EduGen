import React, {useRef, useEffect}from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

const nav__links = [{
    path: '#home',
    display: 'Home'
},
{
path: '#course',
display: 'Course'
},
{
    path: '#service',
    display: 'About'
    },
    {
        path: '#footer',
        display: 'Contact'
        },


]

const Header = () => {
  

    const handleClick = e =>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left:0,
            top: location - 80,
        });
    };

    
  return (
    <header className="header" id="home"> 
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>EDU GEN</h2>
                    <p></p>
                </div>
                {/* navigation */}
                <div className="navigation"  > 
                    <ul className="menu">
                        {
                            nav__links.map((item,index)=>(
                                <li className="menu__item" key={index}>
                                    <a href={item.path} onClick={handleClick}className="menu__links">{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <span className="mobile__menu"> 
                    <i class="ri-menu-line"></i>
                </span>
                {/* Login */}
                <div className="login__btn">
                    <Link to="/Dashboard"> 
                    <button className="login_button">Login</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
