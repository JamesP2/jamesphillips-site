import React, { useState } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const items = [
  {
    src: "images/carousel/1.jpg",
    altText: "Lighting Console",
    header: "James Phillips",
    caption: "Lighting and Event Engineer",
    buttonText: "My Experience",
    buttonLink: "/experience",
  },
  {
    src: "images/carousel/2.jpg",
    altText: "Corporate",
    header: "Event Lighting",
    caption: "Full service including Renders, Paperwork and Desk Programming",
    buttonText: "Previous Work",
    buttonLink: "/previouswork",
  },
  {
    src: "images/carousel/3.jpg",
    altText: "Something Else",
    header: "Something Else",
    caption: "Hello",
    buttonText: "Lorem Ipsum",
    buttonLink: "#",
  },
]

const HomeCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 1920, height: 512) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const slides = items.map(item => {
    const image = data.images.edges.find(n =>
      n.node.relativePath.includes(item.src)
    )

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Img
          style={{ position: "static" }}
          fixed={image.node.childImageSharp.fixed}
          alt={item.altText}
          placeholderClassName="carousel-image"
        />
        <div className="carousel-caption text-left">
          <h1>{item.header}</h1>
          <p>{item.caption}</p>
          <p>
            <Link
              className="btn btn-lg btn-primary"
              to={item.buttonLink}
              role="button"
            >
              {item.buttonText}
            </Link>
          </p>
        </div>
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-fade"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default HomeCarousel
