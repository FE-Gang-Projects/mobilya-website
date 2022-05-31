import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getProducts } from '../axios/getters';
import { Container, ProductGrid } from '../components';
import { translateChars } from '../helpers/helpers';
import { ProductFlat } from '../types';

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}

export default function Arama({ products }: { products: ProductFlat[] }) {
  const router = useRouter();
  const { kelime } = router.query;

  useEffect(() => {
    if (!kelime) {
      router.push('/');
    }
  }, [kelime]);

  const filteredProducts =
    kelime && typeof kelime === 'string'
      ? products.filter((product) =>
          translateChars(product.ad).toLowerCase().includes(kelime.toLowerCase())
        )
      : products;

  if (!kelime) return null;
  return (
    <Container>
      {filteredProducts.length > 0 && (
        <ProductGrid products={filteredProducts} title={`Arama Sonucu (${kelime}) `} />
      )}
      {filteredProducts.length === 0 && (
        <div className="search-result__container">
          <h4>
            &quot;<span>{kelime}</span>&quot; ile eşleşen ürün bulunamadı.
          </h4>
          <button onClick={() => router.push('/')}>Ana Sayfaya Dön</button>
        </div>
      )}
    </Container>
  );
}
