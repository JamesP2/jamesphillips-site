import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="pad-top">
      <h2>Page not found</h2>
      <p>Unfortunately the requested page does not exist.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
