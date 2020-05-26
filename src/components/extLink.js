import React from "react"

const ExtLink = ({ href, text }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-grey">
    {text}
  </a>
)

export default ExtLink
