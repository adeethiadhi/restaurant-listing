import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function RestaurantCard({data}) {

    console.log(data);
  return (


   <Link  style={{textDecoration:'none',color:'white'}}  to={`restaurants/${data.id} `}>
   <Card>
      <Card.Img  style={{height:"450px"}} src={data.photograph} variant="top" className='p-3' />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        <p> Cuisine :      {data.cuisine_type}  </p>
        </Card.Text>
        <Card.Text>
        <p> Neighborhood  : {data.neighborhood}  </p>
        </Card.Text>
        {/* <Button variant="info">View More...</Button> */}
      </Card.Body>
    </Card>
   </Link>
  )
}


export default RestaurantCard