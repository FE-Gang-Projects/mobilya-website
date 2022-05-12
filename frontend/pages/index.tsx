import { Container, Header } from '../components';
// @ts-ignore
import hoverEffect from 'hover-effect';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Home = () => {
  const img = useRef(null);

  useEffect(() => {
    const x = new hoverEffect({
      parent: img.current,
      intensity: 0.3,
      image1: './images/slider-img1.jpg',
      image2: './images/slider-img2.jpg',
      displacementImage: './images/displacement/1.jpg',
    });
  }, []);
  return (
    <Container>
      <Header />
      <Image src="/images/slider-img1.jpg" width={1920} height={773} alt="xx" />
      <Image src="/images/slider-img2.jpg" width={1920} height={773} alt="xx" />
      <div ref={img} className="landing-page-slider"></div>
    </Container>
  );
};

export default Home;
