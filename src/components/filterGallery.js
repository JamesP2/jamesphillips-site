import React, { useCallback, useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import Gallery from "react-photo-gallery"
import CategoryButton from "../components/categoryButton"
import { Fade } from "reactstrap"
import GalleryImage from "./galleryImage"

const FilterGallery = ({ photos, categories }) => {
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
    <>
      <p className="text-center">
        {categories.map(category => (
          <CategoryButton
            category={category.name}
            handleClick={handleCategoryChange}
            selectedCategory={selectedCategory}
            buttonText={category.title}
            key={category.id}
          />
        ))}
      </p>
      <Fade in={galleryVisible} onExited={handleGalleryFade}>
        <Gallery
          photos={currentPhotos}
          onClick={openLightbox}
          renderImage={props => <GalleryImage {...props} />}
        />
      </Fade>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={currentPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: getCaption(x),
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default FilterGallery
