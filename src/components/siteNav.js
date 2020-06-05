import { Link } from "gatsby"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import LogoImage from "../content/images/logo.svg"

const SiteNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={LogoImage} alt="logo" width="53px" />
          <strong style={{ paddingLeft: "0.8em" }}>James Phillips</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/experience"
                className="nav-link"
                activeClassName="active"
                partiallyActive={true}
              >
                Experience
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/previouswork"
                className="nav-link"
                activeClassName="active"
                partiallyActive={true}
              >
                Previous Work
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default SiteNav
