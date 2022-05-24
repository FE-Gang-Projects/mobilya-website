import { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Header } from '../';
interface ContainerProps {
  title: string;
  keywords: string;
  description: string;
  children: ReactNode;
}

const Container = ({ title, keywords, description, children }: ContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

Container.defaultProps = {
  title: 'better than sezerler',
  description: 'better than sezerler',
  keywords: 'better than sezerler',
};

export default Container;
