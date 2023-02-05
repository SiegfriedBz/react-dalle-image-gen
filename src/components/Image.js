const Image = ({ image, imageText }) => {
  return (
    <div className='card mt-3' style={{ width: "24rem" }}>
      <img src={image} className='card-img-top' alt='dalle image' />
    </div>
  )
}

export default Image
