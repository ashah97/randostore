import React, { useContext, memo } from "react";
import AppNavbar from "../components/AppNavbar";
import {
  Container,
  Accordion,
  ListGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Store } from "../store/Store";
import { addToCart, removeFromCart } from "../actions";

const CheckOut = memo(() => {
  const { state, dispatch } = useContext(Store);
  return (
    <div>
      <AppNavbar />

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Order Summary</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {state.cartList.map((item) => (
                  <ListGroup.Item>
                    <Row><Col>{item.name}</Col><Col>Price: {item.price}</Col><Col><Button onClick={()=>{
                      removeFromCart(item.id,dispatch)
                    }}>Remove</Button></Col></Row>                     
                    </ListGroup.Item>
                ))}
                {state.cartList.length<1?<>Please add some thing to the Cart</>:<Button className="mt-20">Place Order</Button>}
                               
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
});

export default CheckOut;
