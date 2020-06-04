import React from "react"
import { CarouselItem } from "reactstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const item = {
  src: "images/carousel/1.jpg",
  altText: "Lighting Console",
  header: "James Phillips",
  caption: "Freelance Lighting and Event Engineer",
  buttonText: "My Experience",
  buttonLink: "/experience",
}

const HomeCarouselSingle = props => {
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

  console.log(data)

  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(item.src)
  )

  console.log(image)

  return (
    <>
      <div className="carousel">
        <div className="carousel-inner">
          <CarouselItem className="active">
            <Img
              style={{ position: "static" }}
              fixed={image.node.childImageSharp.fixed}
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
        </div>
      </div>
    </>
  )
}

export default HomeCarouselSingle
