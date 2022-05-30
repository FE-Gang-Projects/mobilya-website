import React from 'react';

const Categories = [
  {
    name: 'Oturma Grupları',
    media: '/icons/seat.svg',
  },
  {
    name: 'Oturma Grupları',
    media: '/icons/seat.svg',
  },
  {
    name: 'Oturma Grupları',
    media: '/icons/seat.svg',
  },
  {
    name: 'Oturma Grupları',
    media: '/icons/seat.svg',
  },
  {
    name: 'Oturma Grupları',
    media: '/icons/seat.svg',
  },
];

export default function CategorySelector() {
  return (
    <div className="category-selector__container">
      <h2>Kategoriler</h2>
      <div className="category-selector__item__container">
        {Categories.map((category) => (
          <div className="category-selector__item" key={category.name}>
            <div className="icon">
              <img src={category.media} alt={category.name} />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
