import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import ExtLink from "../components/extLink"

const ExperiencePage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Container className="pad-top">
        <Col md="12">
          <h2 className="thin">Experience</h2>

          <Row>
            <Col sm="3">
              <p>
                <b>
                  <ExtLink
                    href="http://www.svlhire.co.uk/"
                    text="SVL Hire Ltd"
                  />
                </b>
                <br />
                Freelance
                <br />
                2013 - Date
              </p>
            </Col>
            <Col sm="9">
              <p>
                Originally starting in the warehouse I now manage and design a
                number of projects each year as well as regularly working as a
                Lighting Engineer and in the Warehouse when required.
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>
                  <ExtLink href="http://www.mtslive.co.uk/" text="MTS Live" />
                </b>
                <br />
                Freelance
                <br />
                2017 - Date
              </p>
            </Col>
            <Col sm="9">
              <p>
                I have worked on a large number of projects in various Lighting,
                LED/Video and Audio roles as well as carrying out Warehouse work
                when required including servicing and PAT Testing of Lighting,
                Audio and Video Equipment.
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>
                  <ExtLink
                    href="http://www.dbs-solutions.co.uk/"
                    text="dBS Solutions"
                  />
                </b>
                <br />
                Freelance
                <br />
                2018 - Date
              </p>
            </Col>
            <Col sm="9">
              <p>Lighting Engineer for various projects.</p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>
                  <ExtLink
                    href="http://www.paradise-green.co.uk/"
                    text="Paradise Green"
                  />
                </b>
                <br />
                Technical Consultant
                <br />
                2016 - 2020
              </p>
            </Col>
            <Col sm="9">
              <p>
                Working during the Edinburgh Fringe as a venue
                technician/Technical Manager and providing support year-round to
                the core technical team.
                <br />
                Managing teams of technicians responsible for day to day
                operation of 4 stages across 2 busy venues
                <br />
                Maintaining lighting, power and rigging plans for spaces
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>
                  <ExtLink
                    href="http://www.mutts.org.uk/"
                    text="Manchester Universities Technical Theatre Society"
                  />
                </b>
                <br />
                Chair (2016-17 Academic Year)
                <br />
                2014 - 2017
              </p>
            </Col>
            <Col sm="9">
              <p>
                Under my direction MUTTS provided production support and
                equipment to over 40 student-led events during 2016-17 including
                musical theatre shows, drama, live events, the Student Union's
                Music Festival and the annual Graduation Ball
              </p>
              <p>
                {" "}
                Duties Included:
                <br />
                Meeting with clients to determine their needs for upcoming
                projects
                <br />
                Design of Lighting and Sound packages to suit requirements and
                budget
                <br />
                Planning of equipment transport and crew needs for each event
                <br />
                Supervision of equipment installation on site
                <br />
              </p>
            </Col>
          </Row>

          <hr />

          <h2 className="thin">Qualifications &amp; Training</h2>
          <Row>
            <Col sm="3">
              <p>
                <b>Degree</b>
              </p>
            </Col>
            <Col sm="9">
              <p>
                <b>2014 - 2017</b> University of Manchester
                <br />
                BSc (hons) Computer Science - 1st Class
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>Licences &amp; Tickets</b>
              </p>
            </Col>
            <Col sm="9">
              <p>
                Full UK Driving Licence
                <br />
                IPAF 3a &amp; 3b
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>Other Training</b>
              </p>
            </Col>
            <Col sm="9">
              <p>
                <b>March 2017</b> UK Rigging Training: Three Day Rigging for the
                Entertainment Industry
              </p>
            </Col>
          </Row>

          <hr />

          <h2 className="thin">Notable Events</h2>
          <Row>
            <Col sm="3">
              <p>
                <b>Production Management</b>
              </p>
            </Col>
            <Col sm="9">
              <ul class="list-unstyled">
                <li>
                  Christmas Live at Doncaster Racecourse (and Lighting Design) -
                  2017, 2018, 2019 for SVL Hire
                </li>
                <li>
                  DoubleTree By Hilton Hull Grand Opening June (and Lighting
                  Design/Op) - 2018 for SVL Hire
                </li>
                <li>
                  University of Manchester Graduation Ball - 2017 &amp; 2018 for
                  University of Manchester Students Union
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>Lighting Design</b>
              </p>
            </Col>
            <Col sm="9">
              <ul class="list-unstyled">
                <li>Hearing Fund UK Annual Gala - 2018 for Bells Backline</li>
                <li>
                  Various themed marquee private parties throughout 2018 &amp;
                  2019 for SVL Hire
                </li>
                <li>
                  ABC &amp; Support at Easterbrook Hall Dumfries - June 2016 for
                  SVL Hire
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>Lighting Engineer</b>
              </p>
            </Col>
            <Col sm="9">
              <ul class="list-unstyled">
                <li>
                  Message Trust Higher Tours in Cambridge, Wales, Midlands and
                  Yorkshire (and Operator) for MTS Live
                </li>
                <li>
                  Christmas Live at Doncaster Racecourse (and Operator from
                  2015) - 2013 - 2017 for SVL Hire
                </li>
                <li>
                  Skeleton Coast Festival at Leasowe Castle (and Operator) -
                  August 2018 for MTS Live
                </li>
                <li>
                  Ireby Folk Festival Cumbria (and Operator) - 2017 &amp; 2018
                  for SVL Hire
                </li>
                <li>
                  Warrington Music Festival - 2018 &amp; 2019 for dBS Solutions
                </li>
                <li>
                  Kevin and Karen Dance Tour (Cover Engineer/Operator) - June
                  2018 for dBS Solutions and Adam Nicholls
                </li>
                <li>
                  Status Quo at Queen of the South FC June (and House Console
                  Operator) - 2015 for SVL Hire
                </li>
                <li>
                  Lowther Castle Halloween Architectural Lighting - 2013 - 2016
                  &amp; 2018 for SVL Hire
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <p>
                <b>LED Screen Engineer</b>
              </p>
            </Col>
            <Col sm="9">
              <ul class="list-unstyled">
                <li>
                  Giants Live Strongest Man competitions in Sheffield &amp;
                  Leeds Arenas - 2019 for MTS Live (Chauvet PVP5 Wall)
                </li>
                <li>
                  LZ7 Illuminate Tour at Indigo at the o2 London December - 2018
                  for MTS Live (Chauvet PVP5 Wall)
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Container>
    </Layout>
  </>
)

export default ExperiencePage
