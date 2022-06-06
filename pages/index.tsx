import Link from 'next/link';
import { Container, Title, ProductSlider } from '../components';
import Image from 'next/image';
import Slider from 'react-slick';
import { useState } from 'react';
import { getCategories, getProducts } from '../axios/getters';
import { ProductFlat } from '../types';

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
const Home = ({ products }: { products: ProductFlat[] }) => {
  const [catalogImages, setCatalogImages] = useState([
    { img: '/images/seat.png', link: '/x', type: 'Koltuklar' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
    { img: '/images/bedroom.png', link: '/x', type: 'Yatak odası' },
    { img: '/images/seat.png', link: '/x', type: 'Koltuklar' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
  ]);
  //slider kütüphanesi doc'u => https://react-slick.neostack.com/docs/example/simple-slider
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: 'landing-slider',
  };

  return (
    <Container>
      <Slider {...sliderSettings}>
        <div>
          <Image src="/images/slider-img1.jpg" width={1920} height={850} alt="xx" />
        </div>
        <div>
          <Image src="/images/slider-img2.jpg" width={1920} height={850} alt="xx" />
        </div>
      </Slider>
      <Title text="Kampanyalı Ürünler" />
      <ProductSlider time={700} products={products} />
      {/* <ProductSlider time={1400} products={products} /> */}
      {/* <ProductSlider time={2100} products={products} /> */}
      <Title text="Ürün Kataloğumuz" />
      <div className="catalog-container">
        {catalogImages.map((category, i) => (
          <Link key={i} href={category.link}>
            <div className={`catalog-card catalog-card${i + 1}`}>
              <div className="catalog-card-title">{category.type}</div>
              <button className="catalog-card-btn">Tümünü görüntüle</button>
              <Image src={category.img} width={1100} height={400} alt="koltuk" />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Home;
