import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './data';
// import images from './images/singlePage'





function Products() {

  return (
    <div className='products'>
      {
        data.map((item,index) => {
        const {name,img,desc} = item;
        return <Row xs={1} md={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top"  alt= '...' className = 'images'src = {img}/>
            <Card.Body>
              <Card.Title className = 'name'>{name}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        })
      }

    
  
  </div>
  )
}

export default Products


  