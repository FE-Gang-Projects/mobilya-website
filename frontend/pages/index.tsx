import { Container, Header, Title } from '../components';
import Image from 'next/image';
// @ts-ignore
import Slider from 'react-slick';

const Home = () => {
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
      <Title text="Ürün Kataloğumuz" />
      {/* Aşağı kısmın hem css hemde jsx kısmı düzenlenmeli */}
      {/* Cardlar responsive olacak, hover effect eklenebilir */}
      {/* Div yerine link'e sarılı olmalılar */}
      <div className="catalog-container">
        <div className="catalog-card1">
          <div className="catalog-card-title">Koltuklar</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/seat.png" width={1100} height={400} alt="koltuk" />
        </div>
        <div className="catalog-card2">
          <div className="catalog-card-title">Mutfak Takımı</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/kitchen.png" width={550} height={400} alt="mutfak" />
        </div>
        <div className="catalog-card3">
          <div className="catalog-card-title">Yatak Odası</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/bedroom.png" width={550} height={846} alt="yatak odası" />
        </div>
        <div className="catalog-card4">
          <div className="catalog-card-title">Koltuklar</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/seat.png" width={1100} height={400} alt="koltuk" />
        </div>
        <div className="catalog-card5">
          <div className="catalog-card-title">Mutfak Takımı</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/kitchen.png" width={550} height={400} alt="mutfak" />
        </div>
        <div className="catalog-card6">
          <div className="catalog-card-title">Mutfak Takımı</div>
          <button className="catalog-card-btn">Tümünü görüntüle</button>
          <Image src="/images/kitchen.png" width={550} height={400} alt="mutfak" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
