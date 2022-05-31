import Link from 'next/link';
import React from 'react';
import { CategoryFlat } from '../../types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;

export default function CategorySelector({ categories }: { categories: CategoryFlat[] }) {
  return (
    <div className="category-selector__container">
      <h2>Kategoriler</h2>
      <div className="category-selector__item__container">
        {categories.map((category) => (
          <Link href={'/kategoriler/' + category.slug} key={category.name}>
            <div className="category-selector__item">
              <div className="icon">
                {category.icon && category.icon.length > 0 && (
                  <img src={BASE_URL + category.icon[0].thumbnail.url} alt={category.name} />
                )}
                {!(category.icon && category.icon.length > 0) && (
                  <img src="/icons/seat.svg" alt={category.name} />
                )}
              </div>
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
