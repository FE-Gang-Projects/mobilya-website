import { Container } from '@components';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <Container>
      <div className="not-found-container">
        <p>Aradığınız sayfayı bulamadık &#128532;</p>
        <span>
          Ana sayfaya dönmek için lütfen <Link href="/">tıklayın</Link>
        </span>
      </div>
    </Container>
  );
};

export default PageNotFound;
