import React from 'react'
import { Col, Row } from 'react-bootstrap'

function ContactItem({item}) {
  return (
    <Row>
      <Col lg={1}>
      <img
          width={50}
          src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
      />
      </Col>
      <Col lg={10}>
      <div>{item.name}</div>
      <div>{item.phoneNum}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
