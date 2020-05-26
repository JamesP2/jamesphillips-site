import React, { useState } from "react"
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"
import { Link } from "gatsby"

const items = [
  {
    src: "/img/carousel/1.jpg",
    altText: "Lighting Console",
    header: "James Phillips",
    caption: "Freelance Lighting and Event Engineer",
    buttonText: "My Experience",
    buttonLink: "/experience",
  },
  {
    src: "/img/carousel/2.jpg",
    altText: "Corporate",
    header: "Event Lighting",
    caption: "Full service including Renders, Paperwork and Desk Programming",
    buttonText: "Previous Work",
    buttonLink: "/previouswork",
  },
  {
    src: "/img/carousel/3.jpg",
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

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
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
