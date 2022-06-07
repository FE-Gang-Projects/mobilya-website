import Image from 'next/image';
import { Container } from '../components';
import { useState } from 'react';
import { getAbout } from '../axios/getters';

const About = ({ text, shopImgs }: { text: any; shopImgs: any }) => {
  const imgs = shopImgs.map((img: any) => img.attributes.url);
  const [activeImg, setActiveImg] = useState(imgs[0]);

  return (
    <Container>
      <div className="about-layout-container">
        <div className="about-layout">
          <h3>Hakkımızda</h3>
          <p>{text}</p>
        </div>
        <div className="about-layout-asset-container">
          <div className="about-img-gallery-container">
            <Image
              className="about-img-gallery-main-img"
              src={activeImg}
              width={750}
              height={500}
              alt="Dükkan Resmi"
            />
            <div className="about-img-gallery-options">
              {imgs.map((src: any, i: number) => (
                <Image
                  key={i}
                  className={activeImg === src ? 'active' : ''}
                  onClick={() => setActiveImg(src)}
                  src={src}
                  width={150}
                  height={100}
                  alt="Dükkan Resmi"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await getAbout();
  return {
    props: {
      text: res.data.attributes.aciklama,
      shopImgs: res.data.attributes.dukkanResimleri.data,
    },
  };
}

export default About;
