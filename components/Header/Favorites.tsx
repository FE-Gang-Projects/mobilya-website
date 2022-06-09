import React, { useState, useRef } from 'react';
import { ProductFlat } from '../../types';
import { useOutsideAlerter } from '../../helpers/hooks';
import { clearFavorites, useLocalFavorites, changeFavorite } from '../../helpers/localStorage';
import Link from 'next/link';
import Image from 'next/image';

function FavoriteCard({ product }: { product: ProductFlat }) {
  console.log(product);
  return (
    <Link href={'/urunler/' + product.slug}>
      <div className="favorite-products__card">
        <div>
          <Image layout="fill" src={product.medya[0].url} alt={product.ad} />
        </div>
        <div className="favorite-products__card__name">
          {product.ad} <br /> <span className="favorite-products__card__marka">{product.marka}</span>
        </div>
        <div
          className="favorite-products__card__icon"
          onClick={(e) => {
            e.stopPropagation();
            changeFavorite(product, true);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function Favorites() {
  const favorites = useLocalFavorites();
  const [show, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(() => setShow(false), divRef);

  return (
    <div ref={divRef} className="header-top-favorites-container" onClick={() => setShow(!show)}>
      <div className="favori-icon-container">
        <Image
          className="favori-icon"
          src="/icons/favorites.svg"
          width={25}
          height={24}
          alt="Favori İkonu"
        />
      </div>
      <h4>
        Favorilerim <span>({favorites.length})</span>
      </h4>
      <div onClick={(e) => e.stopPropagation()} className={`favorites-popup ${show ? 'active' : ''}`}>
        {favorites.length > 0 ? (
          <>
            <div className="favorite-products__container scroll">
              {favorites.map((fav) => (
                <FavoriteCard key={fav.id} product={fav} />
              ))}
            </div>
            <div
              className="favorite-products__delete"
              onClick={() => {
                clearFavorites();
                setShow(false);
              }}>
              <button>Hepsini Kaldır</button>
            </div>
          </>
        ) : (
          <div>Favorilerde ürün yok.</div>
        )}
      </div>
    </div>
  );
}
