import React from 'react';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Media } from '../../types';

export default function ProductImages({ images }: { images: Media[] }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="single-product__image">
      <a target="_blank" href={images[currentImage].url} rel="noopener noreferrer">
        <Image
          className="single-product__image__img-big"
          width={744}
          height={500}
          src={images[currentImage].url}
          alt="main"
        />
      </a>
      <div className="single-product__image__mini-images">
        <ScrollContainer
          className="single-product__image__mini-images__container"
          hideScrollbars={false}>
          {images.map((image, index) => (
            <Image
              className="img"
              key={`image-${index + 1}`}
              src={images[index].url}
              alt={`resim-${index + 1}`}
              onClick={() => setCurrentImage(index)}
              width={200}
              height={150}
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}
