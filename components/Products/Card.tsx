import React, { useEffect, useState } from 'react';
import { ProductFlat } from '../../types';
import Slider from 'react-slick';
import Link from 'next/link';
import { useIsFavorite, changeFavorite } from '../../helpers/localStorage';
import Image from 'next/image';

export default function Card({ product }: { product: ProductFlat }) {
  const isFavorite = useIsFavorite(product);

  const sliderSettings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 1000,
    dots: true,
    className: 'all-product-card__image-slider',
  };
  return (
    <Link href={'/urunler/' + product.slug}>
      <div className="all-product-card__container">
        <div className="all-product-card__top">
          {product.kampanya && <div className="all-product-card__campaign">Kampanya</div>}
          <button
            className="product-card__favorite"
            onClick={(e) => {
              e.stopPropagation();
              changeFavorite(product, isFavorite);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${isFavorite ? 'active' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <Slider {...sliderSettings}>
            {product.medya.map((image, index) => (
              <Image
                width={300}
                height={170}
                key={index}
                src={image}
                alt={`${product.ad} ${index} resim`}
              />
            ))}
          </Slider>
        </div>
        <div className="all-product-card__bottom">
          <div className="all-product-card__bottom__text">
            <h2>{product.ad}</h2>
            <h3>{product.marka}</h3>
          </div>
          <div className="all-product-card__bottom__actions">
            <div className="all-product-card__inspect">İncele</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
