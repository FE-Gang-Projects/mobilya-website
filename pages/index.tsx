import Link from 'next/link';
import { Container, Title, ProductSlider } from '@components';
import Image from 'next/image';
import Slider from 'react-slick';
import { getProductsAndCategories, getSlider } from '@requests';
import { ProductFlat, Slider as SliderType } from '@types';
import { useEffect } from 'react';
import { setLocalProducts } from '@helpers/localStorage';

const Home = ({ products, slider }: { products: ProductFlat[]; slider: SliderType[] }) => {
  const catalogImages = [
    { img: '/images/seat.png', link: '/x', type: 'Koltuklar' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
    { img: '/images/bedroom.png', link: '/x', type: 'Yatak odası' },
    { img: '/images/seat.png', link: '/x', type: 'Koltuklar' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
    { img: '/images/kitchen.png', link: '/x', type: 'Mutfak takımı' },
  ];

  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: 'landing-slider',
    useTransform: false,
  };

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  return (
    <Container
      title="Çalışkan Mobilya"
      keywords="mobilya, kampanya, indirim, koltuk takımı, yatak odası, beyaz eşya, televizyon, genç odası, yemek odası, mutfak masası"
      description="Çalışkan Mobilyada, evinize yenilik katacak, koltuk takımı, yatak odası, beyaz eşya, televizyon, genç odası, yemek odası, mutfak masası gibi ürünlerde kampanyalar sizi bekliyor! "
    >
      <Slider {...sliderSettings}>
        {slider.map((slide, index) => (
          <Link key={index} href={slide.link}>
            <div>
              <Image src={slide.url} alt={slide.url} width={1920} height={850} />
            </div>
          </Link>
        ))}
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

export async function getStaticProps() {
  const { products, categories } = await getProductsAndCategories();
  const slider = await getSlider();
  return {
    props: {
      products: products,
      categories: categories,
      slider: slider,
    },
    revalidate: 3600,
  };
}

export default Home;
