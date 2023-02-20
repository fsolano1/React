import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn , NavBtnLink} from './NavBarElements'
import shunsuilogo from './shunsuilogo.jpg';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <img src={shunsuilogo} alt="LogoShunsui"/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/products" activeStyle>
                    Products
                </NavLink>
                <NavLink to="/ContactUs" activeStyle>
                    Contact us
                </NavLink>
                <NavLink to="/SignUp" activeStyle>
                    SignUp
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
    //<h1> Hola Mundo </h1>
  )
  }
export default Navbar;