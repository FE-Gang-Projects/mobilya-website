import React from 'react';
import { getProductsAndCategories } from '@requests';
import { CategoryFlat } from '@types';
import { Container, ProductGrid, Title } from '@components';
import { useRouter } from 'next/router';

interface CategoryPageProps {
  category: CategoryFlat;
  subCategories: CategoryFlat[];
}

export async function getStaticPaths() {
  const { categories } = await getProductsAndCategories();
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
  const { categories } = await getProductsAndCategories();
  const category = categories.filter((cat) => cat.slug === params.slug)[0];
  const subCategories = categories.filter((cat) => category.altKategoriler.includes(cat.id)) || [];
  return {
    props: {
      category: category,
      subCategories: subCategories,
    },
    revalidate: 3600,
  };
}

const checkHaveProducts = (subCategories: CategoryFlat[]) => {
  return subCategories.some((subCategory) => {
    return subCategory.products.length > 0;
  });
};

export default function CategoryPage({ category, subCategories }: CategoryPageProps) {
  const router = useRouter();

  return (
    <Container
      title={`${category.name}`}
      keywords={`${category.name}, ${category.altKategoriler.join(', ')}`}
      description={`${category.name}, ${category.altKategoriler.join(
        ', '
      )} kategorilerinde birçok çeşit ve uygun fiyatlar sizi bekliyor.`}>
      {category.products.length > 0 && category.altKategoriler?.length === 0 && (
        <ProductGrid products={category.products} title={category.name} />
      )}
      {category.products.length === 0 &&
        (category.altKategoriler?.length === 0 || !checkHaveProducts(subCategories)) && (
          <>
            <Title text={category.name} />
            <div className="search-result__container">
              <h4>
                &quot;<span>{category.name}</span>&quot; kategorisinde henüz ürün yok.
              </h4>
              <div className="actions">
                <button onClick={() => router.push('/urunler')}>Tüm Ürünlere Dön</button>
                <button onClick={() => router.push('/')}>Ana Sayfaya Dön</button>
              </div>
            </div>
          </>
        )}
      {category.altKategoriler.length > 0 &&
        checkHaveProducts(subCategories) &&
        subCategories.map((cat) => (
          <ProductGrid key={cat.id} products={cat.products} max={8} title={cat.name} />
        ))}
    </Container>
  );
}
