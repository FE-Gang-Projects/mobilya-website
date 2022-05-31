import React from 'react';
import { getCategories, getProducts } from '../../axios/getters';
import { CategoryFlat } from '../../types';
import { Container, ProductGrid } from '../../components';
import { useRouter } from 'next/router';
import { productFlatter } from '../../helpers/flatters';

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
  const category = categories.filter((cat) => cat.slug === params.slug)[0];
  const subCategories = categories.filter((cat) => category.altKategoriler.includes(cat.id)) || [];
  return {
    props: {
      category: category,
      subCategories: subCategories,
    },
  };
}

export default function CategoryPage({
  category,
  subCategories,
}: {
  category: CategoryFlat;
  subCategories: CategoryFlat[];
}) {
  const router = useRouter();
  return (
    <Container>
      {category.products.length > 0 && category.altKategoriler?.length === 0 && (
        <ProductGrid products={category.products} title={category.name} />
      )}
      {category.products.length === 0 && category.altKategoriler?.length === 0 && (
        <div className="search-result__container">
          <h4>
            &quot;<span>{category.name}</span>&quot; kategorisinde henüz ürün yok.
          </h4>
          <button onClick={() => router.push('/')}>Ana Sayfaya Dön</button>
        </div>
      )}
      {category.altKategoriler.length > 0 &&
        subCategories.map((cat) => (
          <ProductGrid key={cat.id} products={cat.products} max={8} title={cat.name} />
        ))}
    </Container>
  );
}
