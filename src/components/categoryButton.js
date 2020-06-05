import React from "react"
import { Button } from "reactstrap"

const CategoryButton = ({
  selectedCategory,
  category,
  buttonText,
  handleClick,
}) => {
  return (
    <Button
      outline={category !== selectedCategory}
      color={category === selectedCategory ? "primary" : "secondary"}
      onClick={handleClick}
      data-category={category}
      className="mx-1"
    >
      {buttonText}
    </Button>
  )
}

export default CategoryButton
