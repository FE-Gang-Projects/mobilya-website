import React from 'react';
import { getCategories, getProducts } from '../../axios/getters';
import { CategoryFlat } from '../../types';
import { Container, ProductGrid } from '../../components';

export async function getStaticPaths() {
  const products = await getProducts();
  const categories = await getCategories(products);
  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const products = await getProducts();
  const categories = await getCategories(products);
  const category = categories.filter((category) => category.slug === params.slug)[0];
  return {
    props: {
      category: category,
    },
  };
}

export default function SingleProduct({ category }: { category: CategoryFlat }) {
  return (
    <Container>
      {category.products.length > 0 && (
        <ProductGrid products={category.products} title={category.name} />
      )}
    </Container>
  );
}