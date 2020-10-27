import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FeaturetteImage = ({ src, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => n.node.relativePath.includes(src))

  return (
    <Img
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
      className="mx-auto"
      style={{ width: 300, height: 300 }}
    />
  )
}

export default FeaturetteImage
