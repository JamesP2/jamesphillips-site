/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <hr />

      <footer>
        © {new Date().getFullYear()} James Phillips. Last Updated May 2020
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
