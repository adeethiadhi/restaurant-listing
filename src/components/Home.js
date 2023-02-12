import React from 'react';
import { useState,useEffect } from 'react';
import  RestaurantCard from './RestaurantCard';
import {Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector }from 'react-redux';
import {restaurantList} from '../actions/restAction';

function Home() {
    
    const dispatch =useDispatch()
    const result=useSelector(state=>state.restReducer)
    let {restaurants}=result
    console.log(restaurants)
    useEffect(()=>{
        // fetchData()
        dispatch(restaurantList())
    },[])
  return (
    <Row>
      {
        restaurants.map(restaurants=>(
          <Col className='py-3 px-2' sm={12} md={6} lg={4} xl={3}>
          <RestaurantCard  data={restaurants}/>
          </Col>
        ))
      }
      </Row>
  )
}
export default Home