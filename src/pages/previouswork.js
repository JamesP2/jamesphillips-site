import React, { useCallback, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel, { Modal, ModalGateway } from "react-images"
import Gallery from "react-photo-gallery"
import CategoryButton from "../components/categoryButton"
import { Fade } from "reactstrap"

const photos = [
  {
    id: 1,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/1280/1280",
    width: 4,
    height: 4,
    category: "corporate",
  },
  {
    id: 2,
    title: "Hello Cat 2 ",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/1000/1000",
    width: 4,
    height: 4,
    category: "live",
  },
  {
    id: 3,
    title: "Hello Cat 3",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/800/800",
    width: 4,
    height: 4,
    category: "live",
  },
  {
    id: 4,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/900/900",
    width: 4,
    height: 4,
    category: "corporate",
  },
  {
    id: 5,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/g/1280/1280",
    width: 4,
    height: 4,
    category: "corporate",
  },
  {
    id: 6,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/g/1000/1000",
    width: 4,
    height: 4,
    category: "live",
  },
  {
    id: 7,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/g/800/800",
    width: 4,
    height: 4,
    category: "live",
  },
  {
    id: 8,
    title: "Hello Cat",
    description: "Lorem Ipsum I am a Description",
    credits: "PlaceKitten",
    src: "http://placekitten.com/500/500",
    width: 4,
    height: 4,
    category: "corporate",
  },
]

const PreviousWorkPage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPhotos, setCurrentPhotos] = useState(photos)
  const [galleryVisible, setGalleryVisible] = useState(true)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const handleCategoryChange = event => {
    const category = event.target.attributes.getNamedItem("data-category").value
    setSelectedCategory(category)
    setGalleryVisible(false)
  }

  const handleGalleryFade = event => {
    refreshPhotos(selectedCategory)
    setGalleryVisible(true)
  }

  const refreshPhotos = category => {
    const newPhotos = []

    if (category === "all") return setCurrentPhotos([...photos])

    photos.forEach(photo => {
      if (photo.category === category) newPhotos.push(photo)
    })

    setCurrentPhotos(newPhotos)
  }

  const getCaption = photo => (
    <>
      <h1>{photo.title}</h1>
      <p>{photo.description}</p>
      <p>
        <small>Photo: {photo.credits}</small>
      </p>
    </>
  )

  return (
    <Layout>
      <SEO title="Previous Work" />

      <h2 className="thin">Previous Work</h2>

      <p className="text-center">
        <CategoryButton
          category="all"
          handleClick={handleCategoryChange}
          selectedCategory={selectedCategory}
          buttonText="All"
        />{" "}
        <CategoryButton
          category="live"
          handleClick={handleCategoryChange}
          selectedCategory={selectedCategory}
          buttonText="Live"
        />{" "}
        <CategoryButton
          category="corporate"
          handleClick={handleCategoryChange}
          selectedCategory={selectedCategory}
          buttonText="Corporate"
        />{" "}
      </p>
      <Fade in={galleryVisible} onExited={handleGalleryFade}>
        <Gallery photos={currentPhotos} onClick={openLightbox} />
      </Fade>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={currentPhotos
                .filter(x => x.className !== "slideOut")
                .map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: getCaption(x),
                }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Layout>
  )
}

export default PreviousWorkPage
