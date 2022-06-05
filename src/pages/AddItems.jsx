import React,{useState} from "react";
import AppNavbar from "../components/AppNavbar";
import axios from "axios";
import {
  Container,
  Form,
  FloatingLabel,
  Accordion,
  ListGroup,
  Card,
  Button,
  Row,
  Col,
  Alert
} from "react-bootstrap";

const AddItems = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [show, setShow] = useState(false);
  
  const handleSubmit=()=>{
    let body={
      name:name,
      price:price,
      img:imageUrl
    }
    axios.post("http://localhost:3000/items",body).then((data)=>{
       if(data.status===200){
         setShow(true)
         setImageUrl("")
         setName("")
         setPrice("")
       }
     
    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
    <div>
      <AppNavbar />
      <Container>
       {show?<Alert  variant='success'>Item submited sucessfully</Alert>:null} 
        <Row className="m-6">
          <Col sm={6}>
            <Card className={"w-100 mx-auto"}>
              <Card.Body>
                <Card.Title>Put Items up for Sale</Card.Title>
                <Form onSubmit={e => e.preventDefault()}>
                  <FloatingLabel
                    controlId="floatingName"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control type="text"  value={name}  onChange={(e)=>{
                      setName(e.target.value)
                    }} name="name" required />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPrice"
                    label="Price"
                    className="mb-3"
                  >
                    <Form.Control type="number" value={price} onChange={(e)=>{
                      setPrice(e.target.value)
                    }} name="price" required />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingImgUrl"
                    label="Image URL"
                    className="mb-3"
                  >
                    <Form.Control type="text" value={imageUrl} onChange={(e)=>{
                      setImageUrl(e.target.value)
                    }} name="imageUrl" required />
                  </FloatingLabel>
                  <Button variant="primary" onClick={()=>{
                    handleSubmit()
                  }} type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddItems;
