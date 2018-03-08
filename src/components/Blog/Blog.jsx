import React, { Component } from 'react'
import { Grid, Col, Image, Row } from 'react-bootstrap'
import './Blog.css'

export default class Blog extends Component {
  render () {
    return (
      <div>
        <Image src='assets/mountain-man.jpg' className='header-image' />
        <Grid>
          <h2>Blog</h2>
          <Row className='show-grid'>
            <Col xs={12} sm={8} className='main-section'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci harum voluptatum voluptatem praesentium sapiente aperiam totam blanditiis eos quae nam odit, molestiae saepe consequuntur aspernatur corporis ullam ipsam tempore pariatur qui, commodi et. Commodi distinctio asperiores deleniti qui quisquam accusamus natus aliquid, autem iste molestias velit numquam neque recusandae quaerat iure! Maiores aspernatur iure quas cumque mollitia iste magnam nobis, cum dolorem explicabo dolore voluptas quis maxime corporis sint quia aperiam sunt possimus quos nesciunt dignissimos omnis repellendus. Tempore, saepe. Alias tempora facilis numquam nisi velit accusamus, corporis deleniti ratione ipsa sint? Dicta, nobis! Aliquam culpa possimus deleniti distinctio.
              </p>
            </Col>
            <Col xs={12} sm={4} className='sidebar-section'>
              <Image src='assets/dog-people.jpg' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi mollitia eligendi molestias ad deserunt!
              </p>
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}
