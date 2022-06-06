import React from 'react';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';
import BigImage from './BigImage';

export default function ProductImages({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="single-product__image">
      <BigImage src={images[currentImage]} />
      <div className="single-product__image__mini-images">
        <ScrollContainer
          className="single-product__image__mini-images__container"
          hideScrollbars={false}>
          {images.map((image, index) => (
            <img
              key={`image-${index + 1}`}
              src={images[index]}
              alt={`resim-${index + 1}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}
