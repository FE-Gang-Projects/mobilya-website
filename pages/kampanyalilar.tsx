import { Container, CategorySelector } from '@components';
import { CategoryFlat, ProductFlat } from '@types';
import { getProducts, getCategories } from '@axios/getters';
import ProductGrid from '@components/Products/ProductGrid';

interface CampaignProductsProps {
  campaignProducts: ProductFlat[];
  categories: CategoryFlat[];
}

const CampaignProducts = ({ campaignProducts, categories }: CampaignProductsProps) => {
  return (
    <Container>
      <CategorySelector categories={categories} />
      <ProductGrid products={campaignProducts} title="Kampanyalı Ürünler" />
    </Container>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  const campaignProducts = products.filter((product) => product.kampanya);
  const categories = await getCategories(products);

  return {
    props: {
      campaignProducts: campaignProducts,
      categories: categories,
    },
    revalidate: 3600,
  };
}

export default CampaignProducts;
