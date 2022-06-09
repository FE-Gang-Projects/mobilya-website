import { Container, CategorySelector } from '../../components';
import { CategoryFlat, ProductFlat } from '../../types';
import { getProducts, getCategories } from '../../axios/getters';
import ProductGrid from '../../components/Products/ProductGrid';

const Products = ({ products, categories }: { products: ProductFlat[]; categories: CategoryFlat[] }) => {
  const kampanya = products.filter((product) => product.kampanya);
  return (
    <Container>
      <CategorySelector categories={categories} />
      {kampanya.length > 0 && <ProductGrid products={kampanya} title="Kampanyalı Ürünler" />}
      {categories.map((category) => (
        <ProductGrid
          key={category.id}
          products={category.products}
          max={4}
          maxUrl={`/kategoriler/${category.slug}`}
          title={category.name}
        />
      ))}
    </Container>
  );
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

export default Products;
