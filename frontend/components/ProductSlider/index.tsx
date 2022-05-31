import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from '../';
import { Product } from '../../types';

export default function ProductSlider({ products, time }: { products: Product[]; time: number }) {
  const sliderSettings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: time,
    dots: true,
    className: 'products-slider',
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
