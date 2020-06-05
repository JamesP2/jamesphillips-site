import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Table } from "reactstrap"
import ExtLink from "../components/extLink"

const ExperiencePage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Col md="12">
        <h2 className="thin">Experience</h2>
        <Row>
          <Col md="12">
            <p>
              A selection of roles I have undertaken with various companies
              include:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Table borderless>
              <tbody>
                <tr>
                  <th>
                    <ExtLink href="http://www.mtslive.co.uk/" text="MTS Live" />
                  </th>
                  <td>
                    Lighting Design &amp; Engineer, <br />
                    LED Screen Engineer, A/V, Audio <br />
                    Warehouse
                  </td>
                  <th>
                    <ExtLink
                      href="https://www.lightinitiative.com/"
                      text="Light Initiative"
                    />
                  </th>
                  <td>
                    Lighting Engineer, <br />
                    (TV Set LED Installation)
                  </td>
                </tr>
                <tr>
                  <th>
                    <ExtLink
                      href="http://www.svlhire.co.uk/"
                      text="SVL Hire Ltd"
                    />
                  </th>
                  <td>
                    Lighting Design &amp; Engineer, <br />
                    Production Management
                  </td>
                  <th>
                    <ExtLink
                      href="https://www.audiorentclair.com/"
                      text="AudioRent Clair"
                    />
                  </th>
                  <td>Lighting Engineer</td>
                </tr>
                <tr>
                  <th>
                    <ExtLink
                      href="http://www.dbs-solutions.co.uk/"
                      text="dBS Solutions"
                    />
                  </th>
                  <td>
                    Lighting Design &amp; Engineer, <br />
                    General Tech
                  </td>
                  <th>
                    <ExtLink href="https://www.sparq.live/" text="Sparq" />
                  </th>
                  <td>
                    LED Screen Engineer, <br />
                    A/V Engineer
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <hr />

        <h2 className="thin">Previous Events</h2>
        <Row>
          <Col md="12">
            <Table borderless size="sm">
              <tbody>
                <tr>
                  <th colSpan="2">Production Management</th>
                </tr>
                <tr>
                  <td class="text-right">2017 - 2019</td>
                  <td>
                    Christmas Live at Doncaster Racecourse for SVL Hire (also
                    Lighting Design)
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2017 - 2019</td>
                  <td>
                    University of Manchester Graduation Ball for University of
                    Manchester Students Union
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2018</td>
                  <td>
                    DoubleTree By Hilton Hull Grand Opening June for SVL Hire
                    (also Lighting Design)
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">Lighting Design</th>
                </tr>
                <tr>
                  <td class="text-right">2020</td>
                  <td>
                    Queen Symphonic: A Rock Orchestra Experience UK Tour for dBS
                    Solutions
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2018 - 2019</td>
                  <td>
                    Various themed private marquee parties &amp; weddings for
                    SVL Hire
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2018</td>
                  <td>Hearing Fund UK Annual Gala for Bells Backline</td>
                </tr>
                <tr>
                  <td class="text-right">2016</td>
                  <td>
                    ABC &amp; Support at Easterbrook Hall Dumfries for SVL Hire
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">Console Operator</th>
                </tr>
                <tr>
                  <td class="text-right">2018 - 2020</td>
                  <td>Message Trust Higher Tours for MTS Live</td>
                </tr>
                <tr>
                  <td class="text-right">2017 - 2019</td>
                  <td>Ireby Folk Festival Cumbria for SVL Hire</td>
                </tr>

                <tr>
                  <td class="text-right">2018</td>
                  <td>
                    Kevin and Karen Dance Tour (Cover Engineer/Operator) for
                    Adam Nicholls
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2015 - 2017</td>
                  <td>Christmas Live at Doncaster Racecourse for SVL Hire</td>
                </tr>
                <tr>
                  <th colSpan="2">Lighting Engineer</th>
                </tr>
                <tr>
                  <td class="text-right">2018 &amp; 2019</td>
                  <td>Warrington Music Festival for dBS Solutions</td>
                </tr>
                <tr>
                  <td class="text-right">2019</td>
                  <td>
                    Ultimate Strongman: Team World Championship Nottingham Arena
                    for MTS Live
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2013 - 2016, 2018 - 2019</td>
                  <td>
                    Lowther Castle halloween architectural lighting for SVL Hire
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2019</td>
                  <td>
                    After Races entertainment at Haydock Park &amp; York
                    Racecourses for Audiorent Clair AG
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2015</td>
                  <td>
                    Status Quo at Queen of the South FC June (and House Console
                    Operator) or SVL Hire
                  </td>
                </tr>

                <tr>
                  <th colSpan="2">LED Screen Engineer</th>
                </tr>
                <tr>
                  <td class="text-right">2019 - 2020</td>
                  <td>
                    Giants Live Strongest Man competitions in various UK Arenas
                    for MTS Live (Chauvet PVP5)
                  </td>
                </tr>
                <tr>
                  <td class="text-right">2019</td>
                  <td>Various corporate events for Sparq (Absen A3 Pro)</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <hr />

        <h2 className="thin">Employment History</h2>

        <Row>
          <Col sm="3">
            <p>
              <b>Freelance</b>
              <br />
              2017 - Date
            </p>
          </Col>
          <Col sm="9">
            <p>
              Working on a wide range of projects for several clients including
              live events/concerts, corporate awards dinners &amp; conferences,
              theatre and TV.
            </p>
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
            </p>
            <p>
              Managing teams of technicians responsible for day to day operation
              of 4 stages across 2 busy venues.
            </p>
            <p>Maintaining lighting, power and rigging plans for spaces.</p>
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
              Managing technical support and equipment hire for upwards of 40
              mostly student-led events ranging from small theatrical
              performances to a music festival.
            </p>
            <p>
              Meeting clients to determine their needs and design full
              production packages for upcoming projects.
            </p>
            <p>
              Now an alumni member I provide training to new and existing
              members to help inspire them to take an interest in the industry.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm="3">
            <p>
              <b>
                <ExtLink href="http://www.svlhire.co.uk/" text="SVL Hire Ltd" />
              </b>
              <br />
              Casual Technician
              <br />
              2013 - 2017
            </p>
          </Col>
          <Col sm="9">
            <p>
              Programming &amp; operation of lighting installations using
              Chamsys MagicQ consoles
            </p>
            <p>
              Installation of production equipment, planning distribution of
              power &amp; data for projects and producing lighting designs when
              required.
            </p>
            <p>
              Undertaking regular warehouse work including preparation of
              equipment for jobs and maintenance of intelligent &amp; generic
              lighting fixtures.
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
      </Col>
    </Layout>
  </>
)

export default ExperiencePage
