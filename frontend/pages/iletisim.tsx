import { Container, SimpleLayout } from '../components';
import Image from 'next/image';

const Contant = () => {
  return (
    <Container>
      <SimpleLayout
        title="İletişim"
        text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.5626007279009!2d26.684181237173448!3d40.34426966167531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b16c174e15cd97%3A0xfa28a99a6636dc02!2sGazi%20S%C3%BCleyman%20Pa%C5%9Fa%2C%20Belediye%20Sk.%20No%3A3%2C%2017800%20Lapseki%2F%C3%87anakkale!5e0!3m2!1str!2str!4v1653560222215!5m2!1str!2str"
          width="100%"
          height="100%"
          // style="border:0;"
          style={{ borderRadius: '10px', border: '1px solid rgb(229 216 216)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </SimpleLayout>
    </Container>
  );
};

export default Contant;
