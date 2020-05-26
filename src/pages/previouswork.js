import React, { useCallback, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilterGallery from "../components/filterGallery"

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

const categories = [
  {
    id: 0,
    name: "all",
    title: "All",
  },
  {
    id: 1,
    name: "live",
    title: "Live",
  },
  {
    id: 2,
    name: "corporate",
    title: "Corporate Event",
  },
]

const PreviousWorkPage = () => (
  <Layout>
    <SEO title="Previous Work" />

    <h2 className="thin">Previous Work</h2>

    <FilterGallery photos={photos} categories={categories} />
  </Layout>
)

export default PreviousWorkPage
