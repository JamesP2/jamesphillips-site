import React, { useState } from "react"

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
  const [mouseEntered, setMouseEntered] = useState(false)

  let imageStyle = {
    display: "block",
    cursor: "pointer",
    transition: "transform 0.5s, filter 0.25s",
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  if (mouseEntered)
    imageStyle = {
      ...imageStyle,
      transform: "scale(1.1) rotate(-5deg)",
      filter: "saturate(1.3)",
    }

  return (
    <>
      <div
        role="presentation"
        onClick={handleClick}
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
        style={{ overflow: "hidden", margin: margin }}
      >
        <img alt={photo.title} {...photo} style={{ ...imageStyle }} />
      </div>
    </>
  )
}

export default GalleryImage
