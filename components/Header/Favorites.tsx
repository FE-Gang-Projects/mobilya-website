import React, { useState, useRef } from 'react';
import { useOutsideAlerter } from '@helpers/hooks';
import { clearFavorites, useLocalFavorites, changeFavorite } from '@helpers/localStorage';
import Image from 'next/image';
import { FavoriteCard } from '@components';

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
