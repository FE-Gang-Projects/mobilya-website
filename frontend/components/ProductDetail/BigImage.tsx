import { useRef } from 'react';

export default function ImageZoom({ src }: { src: string }) {
  const divRef = useRef<HTMLImageElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  let wait = false;

  const handleMove = (event: any) => {
    if (wait || !imgRef.current || !divRef.current) return;
    wait = true;
    let xoff = divRef.current.getBoundingClientRect().left;
    let yoff = divRef.current.getBoundingClientRect().top;
    let divHeight = divRef.current.getBoundingClientRect().height;
    let divWidth = divRef.current.getBoundingClientRect().width;
    let imgHeight = imgRef.current.getBoundingClientRect().height;
    let imgWidth = imgRef.current.getBoundingClientRect().width;
    setTimeout(() => {
      const { clientX, clientY } = event;
      let xRatio = ((clientX - xoff) / divWidth) * (100 - 100 * (divWidth / imgWidth));
      let yRatio = ((clientY - yoff) / divHeight) * (100 - 100 * (divHeight / imgHeight));
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(-${xRatio.toFixed(0)}%, -${yRatio.toFixed(0)}%)`;
      }
      wait = false;
    }, 50);
  };

  return (
    <a target="_blank" href={src} rel="noopener noreferrer">
      <div ref={divRef} onMouseMove={handleMove} className="single-product__image__big-image">
        <img ref={imgRef} src={src} className="zoom" alt="main" />
        <img src={src} className="mini" alt="main" />
      </div>
    </a>
  );
}
