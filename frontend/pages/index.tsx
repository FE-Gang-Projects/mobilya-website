import Link from 'next/link';
import { Container, Title, ProductSlider } from '../components';
import Image from 'next/image';
import Slider from 'react-slick';
import { useState } from 'react';

const Home = () => {
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

  const products = [
    {
      id: 1,
      ad: 'Royal Bebek Odası',
      medya: ['https://www.sezerlermobilya.com/Uploads/UrunResimleri/thumb/royal-bebek-odasi-26ef.jpg'],
      kampanya: true,
      kategori: 'string',
      marka: 'string',
      aciklama: 'string',
    },
    {
      id: 1,
      ad: 'Royal Bebek Odası Deneme Uzun İsim',
      medya: ['https://www.sezerlermobilya.com/Uploads/UrunResimleri/thumb/royal-bebek-odasi-26ef.jpg'],
      kampanya: true,
      kategori: 'string',
      marka: 'string',
      aciklama: 'string',
    },
    {
      id: 1,
      ad: 'Royal Bebek Odası',
      medya: ['https://www.sezerlermobilya.com/Uploads/UrunResimleri/thumb/royal-bebek-odasi-26ef.jpg'],
      kampanya: true,
      kategori: 'string',
      marka: 'string',
      aciklama: 'string',
    },
    {
      id: 1,
      ad: 'Royal Bebek Odası',
      medya: ['https://www.sezerlermobilya.com/Uploads/UrunResimleri/thumb/royal-bebek-odasi-26ef.jpg'],
      kampanya: true,
      kategori: 'string',
      marka: 'string',
      aciklama: 'string',
    },
    {
      id: 1,
      ad: 'Royal Bebek Odası',
      medya: ['https://www.sezerlermobilya.com/Uploads/UrunResimleri/thumb/royal-bebek-odasi-26ef.jpg'],
      kampanya: true,
      kategori: 'string',
      marka: 'string',
      aciklama: 'string',
    },
  ];

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
      <ProductSlider products={products} />
      <Title text="Ürün Kataloğumuz" />
      {/* Aşağı kısmın hem css hemde jsx kısmı düzenlenmeli */}
      {/* Cardlar responsive olacak, hover effect eklenebilir */}
      {/* Div yerine link'e sarılı olmalılar */}
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
