import Link from 'next/link';
import {
  Container,
  Title,
  ProductSlider,
  ProductCardBig as Card,
  CategorySelector,
} from '../../components';
import Image from 'next/image';
import Slider from 'react-slick';
import { useState, useMemo, useEffect } from 'react';
import { CategoryFlat, ProductFlat } from '../../types';
import { getProducts, getCategories } from '../../axios/getters';

const ProductGrid = ({
  products,
  title,
  max = 9999,
  maxUrl = '#',
}: {
  products: ProductFlat[];
  title: string;
  max?: number;
  maxUrl?: string;
}) => {
  if (products.length > 0) {
    return (
      <>
        <Title text={title} />
        <div className="products-container">
          {products.slice(0, max).map((product) => (
            <Card key={product.id} product={product} />
          ))}
          {products.length > max && <div className="see-more">Tümünü Gör</div>}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories(products);
  return {
    props: {
      products: products,
      categories: categories,
    },
  };
}

const Products = ({ products, categories }: { products: ProductFlat[]; categories: CategoryFlat[] }) => {
  const kampanya = products.filter((product) => product.kampanya);
  return (
    <Container>
      <CategorySelector categories={categories} />
      {kampanya.length > 0 && <ProductGrid products={kampanya} title="Kampanyalı Ürünler" />}
      {categories.map((category) => (
        <ProductGrid key={category.id} products={category.products} max={8} title={category.name} />
      ))}
    </Container>
  );
};

export default Products;
