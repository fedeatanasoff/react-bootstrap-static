import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h2>Hello friend</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit porro fuga earum vero deserunt magnam reprehenderit, quam accusamus quo excepturi aut officiis ducimus, quidem numquam vitae laboriosam illo ipsum vel.
          </p>
          <Link to='/about'>
            <Button bsStyle='primary' bsSize='large'>About</Button>
          </Link>
        </Jumbotron>
        <Row className='show-grid text-center'>
          <Col xs={12} md={4} className='person-wrapper'>
            <Image src='assets/person-1.jpg' circle className='profile-pic' />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas dolores dolore maiores sed ea repellat officiis quo vitae molestias?
            </p>
          </Col>
          <Col xs={12} md={4} className='person-wrapper'>
            <Image src='assets/person-2.jpg' circle className='profile-pic' />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas dolores dolore maiores sed ea repellat officiis quo vitae molestias?
            </p>
          </Col>
          <Col xs={12} md={4} className='person-wrapper'>
            <Image src='assets/person-3.jpg' circle className='profile-pic' />
            <h3>Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptas dolores dolore maiores sed ea repellat officiis quo vitae molestias?
            </p>
          </Col>
        </Row>

      </Grid>
    )
  }
}
