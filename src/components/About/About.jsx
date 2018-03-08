import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap'
import './About.css'

export default class About extends Component {
  render () {
    return (
      <div>
        <Image src='assets/dog-people.jpg' className='header-image' />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src='assets/person-2.jpg'
              rounded
              className='about-profile-pic'
            />
            <h3>Name Pic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reiciendis dolore ullam nulla numquam similique omnis nisi expedita vel molestiae, saepe natus odit nostrum aperiam delectus sint deleniti vitae ex voluptatibus, beatae accusamus. Magni ratione quia voluptate deserunt culpa ipsa corporis non quidem odit consequuntur tempore quae facilis earum fugit a alias consectetur eveniet nulla, labore dolor pariatur aut id totam soluta. Consequuntur, odio minus quam, facere culpa maiores beatae consectetur, error aperiam autem harum!
            </p>
          </Col>
        </Grid>
      </div>
    )
  }
}
