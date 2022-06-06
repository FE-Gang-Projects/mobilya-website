import { useState } from 'react';
import { ProductFlat } from '../../types';
import Image from 'next/image';
import { getImageUrl } from '../../helpers/helpers';
import { useIsFavorite, changeFavorite } from '../../helpers/localStorage';

export default function ProductCard({ product }: { product: ProductFlat }) {
  const isFavorite = useIsFavorite(product);

  return (
    <div className="product-card__container">
      <div className="product-card">
        <img src={getImageUrl(product.medya[0], 'medium')} alt="Ürün Resmi" />
        <h3>{product.ad}</h3>
        <button className="product-card__favorite" onClick={() => changeFavorite(product, isFavorite)}>
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
        <div className="black-gradient" />
      </div>
    </div>
  );
}
