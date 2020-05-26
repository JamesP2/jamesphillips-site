import React from "react"

const FeaturetteImage = ({ src, alt }) => {
  // TODO Do this with Gatsby-Image
  return (
    <img
      className="featurette-image img-fluid mx-auto"
      src={src}
      alt={alt}
      style={{ width: "300px", height: "300px" }}
    />
  )
}

export default FeaturetteImage
