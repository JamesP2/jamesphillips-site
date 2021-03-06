import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarouselSingle from "../components/homeCarouselSingle"
import { Row, Col } from "reactstrap"
import FeaturetteImage from "../components/featuretteImage"

const IndexPage = () => (
  <>
    <HomeCarouselSingle />
    <Layout>
      <SEO title="Home" />
      <Row className="featurette">
        <Col md="7" style={{ marginTop: "2em" }}>
          <p className="lead">
            I am a freelance Lighting Engineer and Designer based in Manchester
            UK with a wide range of experience across a variety of events.
          </p>
          <p> I can provide the following services:</p>
          <ul>
            <li>Lighting Engineering</li>
            <li>Lighting Design</li>
            <li>
              Lighting Programming/Operating (with own Console if desired)
            </li>
            <li>Pre-Production Drawings, CAD and Site Plans</li>
            <li>LED/Video Engineering</li>
            <li>Audio Engineering</li>
          </ul>
        </Col>
        <Col md="5">
          <FeaturetteImage src="images/home/1.jpg" alt="Desk" />
        </Col>
      </Row>
      <hr className="featurette-divider" />
      <Row className="featurette">
        <Col md={{ size: 7, order: 2 }}>
          <h2 className="featurette-heading">Contact Me</h2>
          <p className="lead">
            If you'd like to contact me please use the details below:
          </p>
          <p>
            <b>Phone:</b> 07429 353 608
            <br />
            <b>Email: </b>{" "}
            <a href="mailto:james@jamesphillips.me.uk">
              james@jamesphillips.me.uk
            </a>
          </p>
        </Col>
        <Col md={{ size: 5, order: 1 }}>
          <FeaturetteImage src="images/home/2.jpg" alt="Marquee" />
        </Col>
      </Row>
    </Layout>
  </>
)

export default IndexPage
