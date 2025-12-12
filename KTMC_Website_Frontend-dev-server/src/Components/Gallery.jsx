import React from "react";

const Gallery = () => {
  // Sample image and description arrays
  const images = [
    "/assets/causes/cause-item1.jpg",
    "/assets/causes/cause-item2.jpg",
    "/assets/causes/cause-item3.jpg",
  ];

  const descriptions = [
    "Lorem Ipsum is simply dummy text ",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Gallery ${index}`} />
          <div className="image-detail">
            <p>{descriptions[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
