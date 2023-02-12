import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import {useDispatch,useSelector } from 'react-redux';
import { restaurantList } from '../actions/restAction';


function RestDetails() {
    const [ restaurantList, setRestaurantsList]=useState([])
    const params = useParams()
    // for modals

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // for collapse

    const [open, setOpen] = useState(false);
  
       
    // async n await
    async function fetchData(){
      await fetch('/restaurants.json')
      .then(results=>results.json()
      .then(data=>{
        setRestaurantsList(data.restaurants) 

      })
      )
    }
  
  
    useEffect(()=>{
         fetchData()
      
        

    },[])
    
     const restaurants=restaurantList.find(restDetail=>restDetail.id==params.id)

    
  return (
    <>
    {
      restaurants?

      (<Row className='my-3'>
        <Col md={4} >
           <Image className='p-3' src={restaurants.photograph} fluid/>

        </Col>

        <Col className='p-3 mb-3' md={8}>
          
        <ListGroup >
      <ListGroup.Item><h2>{restaurants.name}</h2></ListGroup.Item>
      <ListGroup.Item><p>Neighborhood:  {restaurants.neighborhood}</p></ListGroup.Item>
      <ListGroup.Item><p>Cuisine:  {restaurants.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p>Address:  {restaurants.address}</p></ListGroup.Item>
      {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
    </ListGroup>

    {/* Operating modal */}


    <Button  className='p-3 mb-3' variant="info" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday : {restaurants.operating_hours ['Monday']}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {restaurants.operating_hours ['Tuesday']}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {restaurants.operating_hours ['Wednesday']}</ListGroup.Item>
      <ListGroup.Item>Thursday : {restaurants.operating_hours ['Thursday']}</ListGroup.Item>
      <ListGroup.Item>Friday : {restaurants.operating_hours ['Friday']}</ListGroup.Item>
      <ListGroup.Item>Saturday : {restaurants.operating_hours ['Saturday']}</ListGroup.Item>
      <ListGroup.Item>Sunday : {restaurants.operating_hours ['Sunday']}</ListGroup.Item>

      
    </ListGroup>



        </Modal.Body>
        
      </Modal>
      {/* reviews */}

      
      
      
      <Button className=' py-3 mb-3' variant="info"
      
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view the reviews
      </Button>
      
      <Collapse in={open}>
  
        <div className=' py-3 mb-3' id="example-collapse-text">
          {
             restaurants.reviews.map(item=>(
              <div>
                <h6>Name : {item.name} </h6>
                <span> Date : ({item.date})</span>
                <p>Rating : {item.rating}</p>
                <p>Comments :{item.comments}</p>
              
              </div>

            ))
          }
        </div>
      </Collapse>

        </Col>
      </Row>):'null'


    }

    </>
   
  )
}

export default RestDetails