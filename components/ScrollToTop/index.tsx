import { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return <></>;

  return (
    <button type="button" onClick={scrollToTop} className="scroll-to-top-btn">
      <Image src="/icons/up-arrow.svg" width={50} height={50} alt="yukarı çık" />
    </button>
  );
};

export default ScrollToTop;
