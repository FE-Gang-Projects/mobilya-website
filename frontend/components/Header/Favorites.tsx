import React, { useEffect, useState, useRef } from 'react';
import { ProductFlat } from '../../types';
import Image from 'next/image';
import { useOutsideAlerter } from '../../helpers/hooks';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;

function FavoriteCard({ product }: { product: ProductFlat }) {
  return (
    <div className="favorite-products__card">
      <img src={BASE_URL + product.medya[0].thumbnail.url} alt={product.ad} />
      {product.ad}
    </div>
  );
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<ProductFlat[]>([]);
  const [show, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(() => setShow(false), divRef);

  const storageListener = () => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
  };

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
    window.addEventListener('storage', storageListener);
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return (
    <div ref={divRef} className="header-top-favorites-container" onClick={() => setShow(!show)}>
      <Image src="/icons/favorites.svg" width={21} height={20} alt="Favori İkonu" />
      <h4>
        Favorilerim <span>({favorites.length})</span>
      </h4>
      <div onClick={(e) => e.stopPropagation()} className={`favorites-popup ${show ? 'active' : ''}`}>
        {favorites.length > 0 ? (
          <div className="favorite-products__container scroll">
            {favorites.map((fav) => (
              <FavoriteCard key={fav.id} product={fav} />
            ))}
          </div>
        ) : (
          <div>Favorilerde ürün yok.</div>
        )}
      </div>
    </div>
  );
}
