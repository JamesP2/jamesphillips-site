/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SiteNav from "./siteNav"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />
      <Container className="pad-top">
        {children}

        <hr />

        <footer>
          <p className="float-left">
            © {new Date().getFullYear()} James Phillips. Last Updated May 2020
          </p>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
