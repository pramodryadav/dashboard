import React, { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop'

const CropDemo = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [image, setImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])


  const handleChange = (event) => {
    console.log("hi")

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result)
    };
  }

  return (
    <>
      <form>
        <input
        type="file"

        onChange={(event) => handleChange(event)}

        />
      </form>

      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      /></>

  )
}
export default CropDemo;