import React from 'react';
import './NavBar.scss'
import { GoLocation } from 'react-icons/go';
import {NavLink} from "react-router-dom";

import Logo from'../../asset/logo.png';




export const NavBar = () => {
  
    return (
      <>
      
       <div className='navbar'>
             <div className='navLogo'>
                   <NavLink to="/"> <img src={Logo} alt="Logo" /></NavLink>
                </div>
              <div className='containerNav'>
                
              <div className='nav'>
                  <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/ourWorks">SERVICES</NavLink>
                <NavLink to="/services">OUR WORK</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
              </div>
              
               <div className='navLok'>
                   <NavLink to="/contact"><GoLocation />Zurich</NavLink>
                </div>
                  
              </div>
           
               </div>
         
    
      </>
         
         
    
          
    
          
          
       

)


}