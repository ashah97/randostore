import React, { useEffect, useState,useContext,memo } from "react";
import { Link } from "react-router-dom";
import { Container,Navbar,Nav, Row, Col } from "react-bootstrap";
import {Store} from '../store/Store'


const AppNavbar = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">RandoStore</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link > <Link to="/" style={{textDecoration: 'none',color:"black"}}>Home</Link></Nav.Link>
        <Nav.Link >   <Link to="/items" style={{textDecoration: 'none',color:"black"}}>List items</Link></Nav.Link>
        <Nav.Link >   <Link to="/add-items" style={{textDecoration: 'none',color:"black"}}>Add Items</Link></Nav.Link>
        <Nav.Link >   <Link to="/checkout" style={{textDecoration: 'none',color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>{state.cartList.length}</Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar
