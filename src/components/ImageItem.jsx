function ImageItem({ image }) {
  return (
    <div>
      <img
        className="imageListSize"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
