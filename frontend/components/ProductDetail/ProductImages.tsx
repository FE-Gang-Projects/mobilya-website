import React from 'react';
import { MediaFlat } from '../../types';
import Image from 'next/image';
import { getImageUrl } from '../../helpers/helpers';
import ScrollContainer from 'react-indiana-drag-scroll';
import BigImage from './BigImage';

export default function ProductImages({ images }: { images: MediaFlat[] }) {
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="single-product__image">
      <BigImage src={getImageUrl(images[currentImage], 'large')} />
      {/* <img
        className="single-product__image__big-image"
        src={getImageUrl(images[currentImage], 'large')}
        alt="resim-buyuk"
      /> */}
      <div className="single-product__image__mini-images">
        <ScrollContainer
          className="single-product__image__mini-images__container"
          hideScrollbars={false}>
          {images.map((image, index) => (
            <img
              key={`image-${index + 1}`}
              src={getImageUrl(image, 'small')}
              alt={`resim-${index + 1}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}
