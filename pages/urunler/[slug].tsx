import { getProducts } from '@requests';
import { Container, ProductDetail } from '@components';
import { ProductFlat } from '@types';

const SingleProduct = ({ product }: { product: ProductFlat }) => {
  // console.log(product);
  return (
    <Container
      title={product.ad}
      keywords={`${product.ad}, ${product.kategori}`}
      description={`${product.ad}: ${product.aciklama || product.kisaAciklama}`}
    >
      <ProductDetail product={product} />
    </Container>
  );
};

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const product = (await getProducts()).filter((product) => product.slug === params.slug)[0];
  return {
    props: {
      product: product,
    },
    revalidate: 3600,
  };
}

export default SingleProduct;
