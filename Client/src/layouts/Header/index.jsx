import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className="header-left">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="image" />
                <span>COURSE</span>
            </div>
            <div className="header-middle">
                <ul>

                        <li><NavLink to={"/home"}>Home</NavLink></li>
                         
                        <li><NavLink to={"/aboutus"}>About Us</NavLink></li>
                    
                        <li><NavLink to={"/courses"}>Courses</NavLink></li>
                    
                        <li><NavLink to={"/elements"}>Elements</NavLink></li>
                   
                        <li><NavLink to={"/news"}>News</NavLink></li>
                    
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    
                </ul>
            </div>
            <div className="header-right">
            <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="phoneimg" /> <span>+43 4566 7788 2457</span>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header