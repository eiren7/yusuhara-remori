import { useEffect, useState } from "react"
import images from "../../images"

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 2500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="banner-slider">
      <img src={images[currentImageIndex]}/>
    </div>
  )
}

export default Slider