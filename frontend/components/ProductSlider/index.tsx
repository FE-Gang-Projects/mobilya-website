import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from '../';
import { Product } from '../../types';

export default function ProductSlider({ products }: { products: Product[] }) {
  const sliderSettings = {
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    // className: 'landing-slider',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="product-slider">
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}
