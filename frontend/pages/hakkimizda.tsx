import Image from 'next/image';
import { Container, SimpleLayout } from '../components';
import { useState } from 'react';
import { getAbout } from '../axios/getters';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL;

const About = ({ text, shopImgs }: { text: any; shopImgs: any }) => {
  const imgs = shopImgs.map((img: any) => ({
    small: BASE_URL + img.attributes.formats.small?.url,
    medium: BASE_URL + img.attributes.formats.medium?.url,
  }));
  const [activeImg, setActiveImg] = useState(
    imgs[0].medium.includes('undefined') ? imgs[0].small : imgs[0].medium
  );

  return (
    <Container>
      <SimpleLayout title="Hakkımızda" text={text}>
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
                className={activeImg === src.medium || activeImg === src.small ? 'active' : ''}
                onClick={() => setActiveImg(!src.medium.includes('undefined') ? src.medium : src.small)}
                src={!src.medium.includes('undefined') ? src.medium : src.small}
                width={750}
                height={500}
                alt="Dükkan Resmi"
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await getAbout();
  console.log(res);
  return {
    props: {
      text: res.data.attributes.aciklama,
      shopImgs: res.data.attributes.dukkanResimleri.data,
    },
  };
}

export default About;
