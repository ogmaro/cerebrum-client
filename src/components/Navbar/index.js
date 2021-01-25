import React from 'react';
import {FaBars}from 'react-icons/fa';
import { 
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	
} from './NavbarElement';

const Navbar = ({toggle}) =>   {
	return (
     <>
     <Nav>
     <NavbarContainer>
     <NavLogo to ='/'>LOGO</NavLogo>
     <MobileIcon onClick={toggle}>
     <FaBars />
     </MobileIcon >
    
     <NavMenu>
     <NavItem>
     <NavLinks to='Features'>Features</NavLinks>

     </NavItem>
      <NavItem>
     <NavLinks to='Pricing'>Pricing</NavLinks>

     </NavItem>

      <NavItem>
     <NavLinks to='Courses'>Courses</NavLinks>

     </NavItem>

      <NavItem>
     <NavLinks to='About'>About Us</NavLinks>

     </NavItem>

     
      </NavMenu>
      <NavBtn>
     <NavBtnLink to='/Login'>Login</NavBtnLink>

     </NavBtn>
       <NavBtn>
     <NavBtnLink to='/signin'>Sign In</NavBtnLink>

     </NavBtn>
     
         </NavbarContainer>
     </Nav>
     </>
		);
};

export default Navbar;