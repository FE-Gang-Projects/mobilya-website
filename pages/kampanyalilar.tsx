import { Container, CategorySelector, ProductGrid } from '@components';
import { CategoryFlat, ProductFlat } from '@types';
import { getProducts, getCategories } from '@requests';

interface CampaignProductsProps {
  campaignProducts: ProductFlat[];
  categories: CategoryFlat[];
}

const CampaignProducts = ({ campaignProducts, categories }: CampaignProductsProps) => {
  return (
    <Container
      title="Kampanyalı Ürünler"
      keywords="mobilya, kampanya, indirim, koltuk takımı, yatak odası, beyaz eşya, televizyon, genç odası, yemek odası, mutfak masası"
      description="Kampanyalı Ürünler - İndirimli Ürünler: Koltuk Takımı, Yatak Odası, Beyaz Eşya, Televizyon, Genç Odası, Yemek Odası, Mutfak Masası.">
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
