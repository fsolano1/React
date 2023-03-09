import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn , NavBtnLink} from './NavBarElements'
import shunsuilogo from './shunsuilogo.jpg';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <img src={shunsuilogo} alt="LogoShunsui"height={75} width={75}/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/products" activeStyle>
                    Products
                </NavLink>
                <NavLink to="products/Pokemon" activeStyle>
                    Pokemon
                </NavLink>
                <NavLink to="/products/DemonSlayer" activeStyle>
                    DemonSlayer
                </NavLink>
                <NavLink to="/products/Varios" activeStyle>
                    Varios
                </NavLink>
                <NavLink to="/ContactUs" activeStyle>
                    Contact us
                </NavLink>
                <NavLink to="/SignUp" activeStyle>
                    SignUp
                </NavLink>
                <NavLink to="/Checkout" activeStyle>
                    <ShoppingCart />
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