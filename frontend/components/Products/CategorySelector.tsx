import React from 'react';
import { CategoryFlat } from '../../types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;

export default function CategorySelector({ categories }: { categories: CategoryFlat[] }) {
  return (
    <div className="category-selector__container">
      <h2>Kategoriler</h2>
      <div className="category-selector__item__container">
        {categories.map((category) => (
          <div className="category-selector__item" key={category.name}>
            <div className="icon">
              {category.medya && category.medya.length > 0 && (
                <img src={BASE_URL + category.medya[0].medium.url} alt={category.name} />
              )}
              {!(category.medya && category.medya.length > 0) && (
                <img src="/icons/seat.svg" alt={category.name} />
              )}
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
