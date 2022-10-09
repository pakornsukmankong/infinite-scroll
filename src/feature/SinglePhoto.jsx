function SinglePhoto({ photo }) {
  console.log(photo)
  return (
    <img
      className="max-w-lg h-auto rounded-lg m-2"
      src={photo.urls.thumb}
      alt="image description"
    />
  )
}

export default SinglePhoto
