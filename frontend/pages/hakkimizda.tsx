import { Container, SimpleLayout } from '../components';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
  const [activeImg, setActiveImg] = useState('/images/dukkan-1.jfif');
  return (
    <Container>
      <SimpleLayout
        title="Hakkımızda"
        text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic">
        <div className="about-img-gallery-container">
          <Image
            className="about-img-gallery-main-img"
            src={activeImg}
            width={827}
            height={530}
            alt="Dükkan Resmi"
          />
          <div className="about-img-gallery-options">
            {[
              '/images/dukkan-1.jfif',
              '/images/dukkan-2.jpg',
              '/images/dukkan-3.jpg',
              '/images/dukkan-4.jpg',
            ].map((imgSrc, i) => (
              <Image
                key={i}
                className={activeImg === imgSrc ? 'active' : ''}
                onClick={() => setActiveImg(imgSrc)}
                src={imgSrc}
                width={140}
                height={120}
                alt="Dükkan Resmi"
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </Container>
  );
};

export default About;
