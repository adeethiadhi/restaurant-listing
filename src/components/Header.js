import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Dine In
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header