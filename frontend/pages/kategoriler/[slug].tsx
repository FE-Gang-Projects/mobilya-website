import React from 'react';
import { getCategories, getProducts } from '../../axios/getters';
import { CategoryFlat } from '../../types';
import { Container, ProductGrid } from '../../components';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  return (
    <Container>
      {category.products.length > 0 && (
        <ProductGrid products={category.products} title={category.name} />
      )}
      {category.products.length === 0 && (
        <div className="search-result__container">
          <h4>
            &quot;<span>{category.name}</span>&quot; kategorisinde henüz ürün yok.
          </h4>
          <button onClick={() => router.push('/')}>Ana Sayfaya Dön</button>
        </div>
      )}
    </Container>
  );
}
