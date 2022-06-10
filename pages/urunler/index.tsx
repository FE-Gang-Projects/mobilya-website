import { Container, CategorySelector } from '@components';
import { CategoryFlat, ProductFlat } from '@types';
import ProductGrid from '@components/Products/ProductGrid';
import { getProductsAndCategories } from '@requests';

export async function getStaticProps() {
  const { products, categories } = await getProductsAndCategories();
  return {
    props: {
      products: products,
      categories: categories,
    },
    revalidate: 3600,
  };
}

const Products = ({ products, categories }: { products: ProductFlat[]; categories: CategoryFlat[] }) => {
  const campaignProducts = products.filter((product) => product.kampanya);
  return (
    <Container>
      <CategorySelector categories={categories} />
      {campaignProducts.length > 0 && (
        <ProductGrid
          products={campaignProducts}
          title="Kampanyalı Ürünler"
          max={8}
          maxUrl="/kampanyalilar"
        />
      )}
      {categories.map((category) => (
        <ProductGrid
          key={category.id}
          products={category.products}
          max={8}
          maxUrl={`/kategoriler/${category.slug}`}
          title={category.name}
        />
      ))}
    </Container>
  );
};

export default Products;
