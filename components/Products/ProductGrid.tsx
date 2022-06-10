import Link from 'next/link';
import Image from 'next/image';
import { Title, CardWithoutSlider as Card } from '@components';
import { ProductFlat } from '@types';

interface ProductGridProps {
  products: ProductFlat[];
  title: string;
  max?: number;
  maxUrl?: string;
}

const ProductGrid = ({ products, title, max = 9999, maxUrl = '#' }: ProductGridProps) => {
  if (products.length === 0) return <></>;

  return (
    <>
      <Title text={title} />
      <div className="products-container">
        {products.slice(0, max).map((product) => (
          <Card key={product.id} product={product} />
        ))}
        {products.length > max && (
          <div className="see-more-container">
            <Link href={maxUrl} passHref>
              <a className="see-more">
                Tümünü Gör <Image src="/icons/right-arrow.png" width={28} height={28} alt="ok ikonu" />
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
