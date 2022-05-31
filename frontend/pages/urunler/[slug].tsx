import React from 'react';
import ProductDetail from '../../components/ProductDetail';
import { getProducts } from '../../axios/getters';
import { ProductFlat } from '../../types';
import { Container } from '../../components';

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const product = (await getProducts()).filter((product) => product.slug === params.slug)[0];
  return {
    props: {
      product: product,
    },
  };
}

export default function SingleProduct({ product }: { product: ProductFlat }) {
  return (
    <Container>
      <ProductDetail product={product} />
    </Container>
  );
}
