import { useState } from 'react';
import { ProductFlat } from '../../types';
import Image from 'next/image';
import { useIsFavorite, changeFavorite } from '../../helpers/localStorage';
import Link from 'next/link';

export default function ProductCard({ product }: { product: ProductFlat }) {
  const isFavorite = useIsFavorite(product);

  return (
    <Link href={'/urunler/' + product.slug}>
      <div className="product-card__container">
        <div className="product-card">
          <Image className="img" width={409} height={200} src={product.medya[0].url} alt="Ürün Resmi" />
          <h3>{product.ad}</h3>
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
          <div className="black-gradient" />
        </div>
      </div>
    </Link>
  );
}
