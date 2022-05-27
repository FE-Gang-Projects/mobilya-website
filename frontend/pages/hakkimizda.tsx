import { Container } from '../components';
import Image from 'next/image';

const About = () => {
  return (
    <Container>
      <div className="about-container">
        <div className="about-text-container">
          <h3>Hakkımızda</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
          </p>
        </div>
        <div className="about-img-container">
          <Image src="/images/shopImg.png" width={827} height={530} alt="Dükkan Resmi" />
        </div>
      </div>
    </Container>
  );
};

export default About;
