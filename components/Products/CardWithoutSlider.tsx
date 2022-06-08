import React, { useEffect, useState } from 'react';
import { ProductFlat } from '../../types';
import Link from 'next/link';
import { useIsFavorite, changeFavorite } from '../../helpers/localStorage';
import CardImage from './CardImage';

export default function CardWithoutSlider({ product }: { product: ProductFlat }) {
  const isFavorite = useIsFavorite(product);

  return (
    <Link href={'/urunler/' + product.slug}>
      <div className="all-product-card__container">
        <div className="all-product-card__top">
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
          <CardImage images={product.medya} />
        </div>
        <div className="all-product-card__bottom">
          <div className="all-product-card__bottom__text">
            <h2>
              <span>{product.ad}</span>
              <span>
                {product.kampanya && <div className="all-product-card__campaign">Kampanya</div>}
              </span>
            </h2>
            <h3>{product.marka}</h3>
            <p>{product.kisaAciklama}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
