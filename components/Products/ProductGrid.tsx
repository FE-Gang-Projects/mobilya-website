import Link from 'next/link';
// import { Title, ProductCardBig as Card } from '../../components';
import { Title, CardWithoutSlider as Card } from '../../components';
import { ProductFlat } from '../../types';
import { useRouter } from 'next/router';

const ProductGrid = ({
  products,
  title,
  max = 9999,
  maxUrl = '#',
}: {
  products: ProductFlat[];
  title: string;
  max?: number;
  maxUrl?: string;
}) => {
  const router = useRouter();
  if (products.length > 0) {
    return (
      <>
        <Title text={title} margin="sm" />
        <div className="products-container">
          {products.slice(0, max).map((product) => (
            <Card key={product.id} product={product} />
          ))}
          {products.length > max && (
            <div className="see-more" onClick={() => router.push(maxUrl)}>
              Tümünü Gör
            </div>
          )}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ProductGrid;
