import { Container, Header } from '../components';
// @ts-ignore
import Slider from 'react-slick';
import Image from 'next/image';

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
      <Header />
      <Slider {...sliderSettings}>
        <div>
          <Image src="/images/slider-img1.jpg" width={1920} height={850} alt="xx" />
        </div>
        <div>
          <Image src="/images/slider-img2.jpg" width={1920} height={850} alt="xx" />
        </div>
      </Slider>
    </Container>
  );
};

export default Home;
