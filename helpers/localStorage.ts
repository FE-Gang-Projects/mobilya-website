import { useEffect, useState } from 'react';
import { ProductFlat } from '@types';
import { toast } from 'react-toastify';

export const getFavorites = (): ProductFlat[] => {
  const favorites = localStorage.getItem('favorites');
  if (favorites) return JSON.parse(favorites);
  return [];
};

export const changeFavorite = (product: ProductFlat, isFavorite: boolean | null) => {
  const favorites = getFavorites();
  const newFavorites = isFavorite
    ? favorites.filter((fav) => fav.id !== product.id)
    : [...favorites, product];
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'favorites',
      oldValue: JSON.stringify(favorites),
      newValue: JSON.stringify(newFavorites),
    })
  );
  if (favorites.length < newFavorites.length) {
    toast.success('Ürün favorilerinize eklendi.');
  } else if (favorites.length > newFavorites.length) {
    toast.success('Ürün favorilerinizden çıkarıldı.');
  }
};

export const clearFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify([]));
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'favorites',
      oldValue: JSON.stringify(getFavorites()),
      newValue: JSON.stringify([]),
    })
  );
  toast.success('Tüm ürünler favorilerinizden çıkarıldı.');
};

export function useLocalFavorites() {
  const [favorites, setFavorites] = useState<ProductFlat[]>([]);

  const storageListener = (e: StorageEvent) => {
    if (e.key !== 'favorites') return;
    const favorites = getFavorites();
    setFavorites(favorites);
  };

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    setFavorites(favorites ? JSON.parse(favorites) : []);
    window.addEventListener('storage', storageListener);
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return favorites;
}

export function useIsFavorite(product: ProductFlat) {
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);

  const storageListener = (e: StorageEvent) => {
    if (e.key !== 'favorites') return;
    const favorites = getFavorites();
    setIsFavorite(favorites.some((p) => p.id === product.id));
  };

  useEffect(() => {
    const favorites = getFavorites();
    setIsFavorite(favorites.some((p) => p.id === product.id));
    window.addEventListener('storage', storageListener);
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return isFavorite;
}

export const setLocalProducts = (products: ProductFlat[]) => {
  const localProducts = localStorage.getItem('products') || '[]';
  const newProducts = JSON.stringify(products);
  if (localProducts !== newProducts) {
    localStorage.setItem('products', newProducts);
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'products',
        oldValue: localProducts,
        newValue: newProducts,
      })
    );
  }
};

export function useLocalProducts(): ProductFlat[] {
  const [products, setProducts] = useState<ProductFlat[]>([]);

  const storageListener = (e: StorageEvent) => {
    if (e.key !== 'products') return;
    const temp = JSON.parse(e.newValue || '[]');
    setProducts(temp);
  };

  useEffect(() => {
    const temp = localStorage.getItem('products');
    setProducts(temp ? JSON.parse(temp) : []);
    window.addEventListener('storage', storageListener);
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return products;
}
