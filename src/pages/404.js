import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Page not found</h2>
    <p>Unfortunately the requested page does not exist.</p>
  </Layout>
)

export default NotFoundPage
