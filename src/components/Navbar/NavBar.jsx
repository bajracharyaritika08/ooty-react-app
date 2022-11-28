import React from 'react'
import {NavLink} from 'react-router-dom'
import logo_ooty from '../../images/logo_ooty.png'
import '../../styles/navbar/Navbar.css'
import { FaHeart,FaShoppingCart,FaSearch} from "react-icons/fa";
export const NavBar = () => {
    const allTea =[{
        "heading":"Red Tea",
        "types":"RT Black Tea",
        "types":"Chai Tea",
        "types":"RT Black Tea",
        "types":"RT Black Tea",
    }]
  return (
    <>
        <div className="header">
            
                <div className="navlogo">
                    <NavLink to='/'>
                         <img src={logo_ooty} alt="Ooty logo" className='ooty_logo'/>
                    </NavLink>
                </div>
                <div className="nav-items">
                    <NavLink exact to="./HomePage">Home</NavLink>
                    <NavLink exact to="./HomePage" >All Tea</NavLink>
                    <NavLink exact to="./HomePage">Discover</NavLink>
                    <NavLink exact to="./HomePage">News</NavLink>
                    <NavLink exact to="./HomePage">Pages</NavLink>
            
            </div>
            <div className="icons">
            <FaHeart className='fahearts'/>
            <FaShoppingCart className='fashopping'/>
            <FaSearch className='fasearch'/>
            </div>
        </div>
    </>
  )
}
