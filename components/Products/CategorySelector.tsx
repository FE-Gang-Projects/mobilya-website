import Link from 'next/link';
import React from 'react';
import { CategoryFlat } from '../../types';

export default function CategorySelector({ categories }: { categories: CategoryFlat[] }) {
  return (
    <div className="category-selector__container">
      <h2>Kategoriler</h2>
      <div className="category-selector__item__container">
        {categories.map((category) => (
          <Link href={'/kategoriler/' + category.slug} key={category.name}>
            <div className="category-selector__item">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
