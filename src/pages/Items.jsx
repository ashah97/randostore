import React, { useEffect, useState,useContext,memo } from "react";
import axios from "axios";
import AppNavbar from "../components/AppNavbar";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import {Store} from '../store/Store';
import {addToCart} from '../actions'

const Items = memo(() => {
  const { state, dispatch } = useContext(Store);
  const [items, setItems] = useState([]);
  const handleAddToCart= (item) => {
  addToCart(item,dispatch)
};

  useEffect(() => {
    axios
      .get("http://localhost:3000/items")
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <AppNavbar />

      <Container>
        <h3>All Items</h3>
       
        <Row>
          {items.map((item) => (
            <Col md={4} style={{ marginBottom: 25 }}>
              <Card style={{ width: "18rem" }} id={item.id}>
                <Card.Img
                  variant="top"
                  width={286}
                  height={150}
                  src={`http://localhost:3000/img/${item.img.split("/")[2]}`}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <h4>Price: {item.price}</h4>
                  </Card.Text>
                  
                  <Button variant="primary" onClick={()=>{handleAddToCart(item)}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
})

export default Items;
