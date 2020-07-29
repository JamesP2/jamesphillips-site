import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "reactstrap"
import ExtLink from "../components/extLink"

const ExperienceEntry = ({ date, entry, name, children }) => {
  // If there is a date the left hand side of this entry is pulled right
  // Otherwise this is a category kind of thing, so bold and left
  const left =
    date == null ? (
      <p className="font-weight-bold">{name}</p>
    ) : (
      <p className="text-md-right">{date}</p>
    )
  return (
    <Row>
      <Col sm="3">{left}</Col>
      <Col sm="9">
        <p>{entry == null ? children : entry}</p>
      </Col>
    </Row>
  )
}

const ExperienceHeader = ({ name }) => (
  <Row>
    <Col md="12">
      <p className="font-weight-bold">{name}</p>
    </Col>
  </Row>
)

const ExperienceRoles = ({ company, url, children }) => (
  <>
    <Col md="2">
      <p className="font-weight-bold">
        <ExtLink href={url} text={company} />
      </p>
    </Col>
    <Col md="4">
      <p>{children}</p>
    </Col>
  </>
)

const ExperiencePage = () => (
  <>
    <Layout>
      <SEO title="Experience" />
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
          <ExperienceRoles company="MTS Live" url="http://www.mtslive.co.uk/">
            Lighting Design &amp; Engineer, <br />
            LED Screen Engineer, A/V, Audio <br />
            Warehouse
          </ExperienceRoles>
          <ExperienceRoles
            company="Light Initiative"
            url="https://www.lightinitiative.com/"
          >
            Lighting Engineer, <br />
            (TV Set LED Installation)
          </ExperienceRoles>
        </Row>
        <Row>
          <ExperienceRoles company="SVL Hire" url="http://www.svlhire.co.uk/">
            Lighting Design &amp; Engineer, <br />
            Production Management
          </ExperienceRoles>
          <ExperienceRoles
            company="AudioRent Clair"
            url="https://www.audiorentclair.com/"
          >
            Lighting Engineer
          </ExperienceRoles>
        </Row>
        <Row>
          <ExperienceRoles
            company="dBS Solutions"
            url="http://www.dbs-solutions.co.uk/"
          >
            Lighting Design &amp; Engineer, <br />
            General Tech
          </ExperienceRoles>
          <ExperienceRoles company="Sparq" url="https://www.sparq.live/">
            LED Screen Engineer,
            <br />
            A/V Engineer
          </ExperienceRoles>
        </Row>

        <hr />

        <h2 className="thin">Previous Events</h2>
        <ExperienceHeader name="Production Management" />
        <ExperienceEntry
          date="2017 - 2019"
          entry="Christmas Live at Doncaster Racecourse for SVL Hire (also
                    Lighting Design)"
        />
        <ExperienceEntry
          date="2017 - 2019"
          entry="University of Manchester Graduation Ball for University of
          Manchester Students Union"
        />
        <ExperienceEntry
          date="2018"
          entry="DoubleTree By Hilton Hull Grand Opening June for SVL Hire
          (also Lighting Design)"
        />

        <ExperienceHeader name="Lighting Design" />
        <ExperienceEntry
          date="2020"
          entry="Queen Symphonic: A Rock Orchestra Experience UK Tour for dBS
          Solutions"
        />
        <ExperienceEntry
          date="2018 - 2019"
          entry="Various themed private marquee parties &amp; weddings for
          SVL Hire"
        />
        <ExperienceEntry
          date="2018"
          entry="Hearing Fund UK Annual Gala for Bells Backline"
        />
        <ExperienceEntry
          date="2016"
          entry="ABC &amp; Support at Easterbrook Hall Dumfries for SVL Hire"
        />

        <ExperienceHeader name="Console Operator" />
        <ExperienceEntry
          date="2018 - 2020"
          entry="Message Trust Higher Tours for MTS Live"
        />
        <ExperienceEntry
          date="2017 - 2019"
          entry="Ireby Folk Festival Cumbria for SVL Hire"
        />
        <ExperienceEntry
          date="2018"
          entry="Kevin and Karen Dance Tour (Cover Engineer/Operator) for
          Adam Nicholls"
        />
        <ExperienceEntry
          date="2015 - 2017"
          entry="Christmas Live at Doncaster Racecourse for SVL Hire"
        />

        <ExperienceHeader name="Lighting Engineer" />
        <ExperienceEntry
          date="2018 - 2019"
          entry="Warrington Music Festival for dBS Solutions"
        />
        <ExperienceEntry
          date="2019"
          entry="Ultimate Strongman: Team World Championship Nottingham Arena
          for MTS Live"
        />
        <ExperienceEntry
          date="2013 - 2016, 2018 - 2019"
          entry="Lowther Castle halloween architectural lighting for SVL Hire"
        />
        <ExperienceEntry
          date="2019"
          entry="After Races entertainment at Haydock Park &amp; York
          Racecourses for Audiorent Clair AG"
        />
        <ExperienceEntry
          date="2015"
          entry="Status Quo at Queen of the South FC June (and House Console
          Operator) for SVL Hire"
        />

        <ExperienceHeader name="LED Screen Engineer" />
        <ExperienceEntry
          date="2019 - 2020"
          entry="Giants Live Strongest Man competitions in various UK Arenas for MTS Live (Chauvet PVP5)"
        />
        <ExperienceEntry
          date="2019"
          entry="Various corporate events for Sparq (Absen A3 Pro)"
        />

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
        <ExperienceEntry name="Degree">
          <b>2014 - 2017</b> University of Manchester
          <br />
          BSc (hons) Computer Science - 1st Class
        </ExperienceEntry>
        <ExperienceEntry name="Licences &amp; Tickets">
          Full UK Driving Licence
          <br />
          IPAF 3a &amp; 3b
        </ExperienceEntry>
        <ExperienceEntry name="Other Training">
          <b>March 2017</b> UK Rigging Training: Three Day Rigging for the
          Entertainment Industry
        </ExperienceEntry>
      </Col>
    </Layout>
  </>
)

export default ExperiencePage
