import React from "react"
import { CarouselItem } from "reactstrap"
import { Link } from "gatsby"

const item = {
  src: "/img/carousel/1.jpg",
  altText: "Lighting Console",
  header: "James Phillips",
  caption: "Freelance Lighting and Event Engineer",
  buttonText: "My Experience",
  buttonLink: "/experience",
}

const HomeCarouselSingle = props => {
  return (
    <>
      <div className="carousel">
        <div className="carousel-inner">
          <CarouselItem className="active">
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
        </div>
      </div>
    </>
  )
}

export default HomeCarouselSingle
