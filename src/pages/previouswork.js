import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FilterGallery from "../components/filterGallery"

const PreviousWorkPage = ({ data }) => (
  <Layout>
    <SEO title="Previous Work" />

    <h2 className="thin">Previous Work</h2>
    <p>Coming Soon.</p>
    {/* 
    <FilterGallery
      photos={data.dataJson.previousWorkGallery.photos}
      categories={data.dataJson.previousWorkGallery.categories}
    /> 
    */}
  </Layout>
)

export const query = graphql`
  {
    dataJson {
      previousWorkGallery {
        categories {
          id
          name
          title
        }
        photos {
          category
          description
          credits
          height
          id
          src
          title
          width
        }
      }
    }
  }
`

export default PreviousWorkPage
