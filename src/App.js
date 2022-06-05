import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddItems from './pages/AddItems'
import Items from './pages/Items'
import Checkout from './pages/Checkout'
import AppNavbar from './components/AppNavbar'
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-items" element={<AddItems />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (<><AppNavbar/>
  <Container>
    <h1>Welcome to Rando Store</h1>
    <h3>An amazing place for online shopping</h3>
  </Container>  
  </>
  
  );
}


export default App;