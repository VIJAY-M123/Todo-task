import React, { useState, useEffect } from "react";
import { NavLink as Link, useNavigate } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem,
  NavLink, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem, NavMenu, Row, Col
} from "reactstrap";
import styled from 'styled-components';
import "../Styles/Login.css";
import { GiLindenLeaf } from "react-icons/gi"
import { FaBars } from "react-icons/fa";





const SidebarNav = styled.nav`
  background: #1d2766;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export default function Navbar1(props) {

  const navigate = useNavigate();

  console.log("Navbar", props.email);

  const [Log, setlog] = useState(false);

  

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  


  useEffect(() => {
    //localStorage.getItem("auth")History.push("/login")
    if (!localStorage.getItem("Data")) navigate("/")
  }, [Log]);


  const logout = () => {
    localStorage.removeItem("Data");
    setlog(true)

  }


  return (
    <div>
      

      <Navbar expand="md">
        <div className="bars">
          <FaBars size={25} color="white" onClick={showSidebar}  />
        </div>

        <NavbarBrand href="/"><GiLindenLeaf size={40} color="white"/></NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/todo">Todo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/image">Image</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/services">Video</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
        
         
        </Nav>

        <div>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
        

      </Navbar>

      <SidebarNav sidebar={sidebar}>
      <Nav className="" navbar>
          <NavItem>
            <NavLink href="/todo">Todo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/image">Image</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/video">Video</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
          
        
        
        </Nav>
      </SidebarNav>

      


    </div>
  )
}