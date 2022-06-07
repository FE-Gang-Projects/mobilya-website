import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function CardImage({ images }: { images: string[] }) {
  const divRef = useRef<HTMLImageElement>(null);
  const imgCount = images.length;
  const [activeImg, setActiveImg] = useState(0);

  let timerID: NodeJS.Timeout;

  const resetId = () => {
    timerID = setTimeout(() => {
      if (activeImg !== 0) {
        setActiveImg(0);
      }
    }, 2500);
  };

  const changeImg = (event: any) => {
    if (!divRef.current || imgCount === 1) return;
    clearTimeout(timerID);
    const xoff = divRef.current.getBoundingClientRect().left;
    const divWidth = divRef.current.getBoundingClientRect().width;
    const { clientX } = event;
    const activeHover = Math.floor(Math.abs((clientX - xoff) / (divWidth / imgCount)));
    if (activeHover !== activeImg) {
      setActiveImg(activeHover);
    }
  };

  return (
    <div className="img-container" ref={divRef} onMouseMove={changeImg} onMouseLeave={resetId}>
      {images.map((image, index) => {
        if (index === activeImg) {
          return <Image layout="fill" key={index} src={image} alt={`${index}. resim`} />;
        }
      })}
      <div
        className="dots"
        onMouseMove={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}>
        {imgCount > 1 &&
          images.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                clearTimeout(timerID);
                setActiveImg(index);
              }}
              className={`${index === activeImg ? 'active' : ''}`}
            />
          ))}
      </div>
    </div>
  );
}
