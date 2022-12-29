
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from './components/AboutMe';
import NavTab from './components/NavTab';
import Products from './components/Products';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container className = 'container' fluid = 'md'>
     <Row>
      <Col>
      <Routes>
      <Route path="/" element={<NavTab/>}>
         <Route path="products" element={<Products/>} />
          <Route path = 'products' element = {<Products />}/>
          <Route path="aboutMe" element={<AboutMe />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </Col>
     </Row>
     </Container>
  </BrowserRouter>
    </div>
  );
}

export default App;

/*
    

          */
