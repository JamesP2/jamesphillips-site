import React from "react"
import { Row, Col } from "reactstrap"

const ExperienceEntry = ({ date, entry }) => {
  return (
    <Row>
      <Col sm="3">
        <p className="text-md-right">{date}</p>
      </Col>
      <Col sm="9">
        <p>{entry}</p>
      </Col>
    </Row>
  )
}

export default ExperienceEntry
