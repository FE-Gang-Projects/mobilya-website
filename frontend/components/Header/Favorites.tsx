import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Favorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const storageListener = () => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
  };

  useEffect(() => {
    // const favorites = getFavorites();
    // setIsFavorite(favorites.includes(product.id));
    window.addEventListener('storage', storageListener);
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return (
    <div className="header-top-favorites-container">
      <Image src="/icons/favorites.svg" width={21} height={20} alt="Favori İkonu" />
      <h4>
        {/* Favorilerim <span>({favorites.length > 9 ? '9+' : favorites.length})</span> */}
        Favorilerim <span>({favorites.length})</span>
      </h4>
    </div>
  );
}
