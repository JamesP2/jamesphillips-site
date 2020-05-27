import React from "react"

const GalleryImage = ({
  containerHeight,
  direction,
  index,
  left,
  margin,
  onClick,
  photo,
  top,
}) => {
  const imageStyle = {
    margin: margin,
    display: "block",
    cursor: "pointer",
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <img alt={photo.title} {...photo} style={{ ...imageStyle }} />
      </div>
    </>
  )
}

export default GalleryImage
