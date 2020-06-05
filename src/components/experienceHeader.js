import React from "react"
import { Row, Col } from "reactstrap"

const ExperienceHeader = ({ name }) => {
  return (
    <Row>
      <Col md="12">
        <p className="font-weight-bold">{name}</p>
      </Col>
    </Row>
  )
}

export default ExperienceHeader
