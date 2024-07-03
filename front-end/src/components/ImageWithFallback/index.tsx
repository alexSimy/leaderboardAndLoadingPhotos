import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type ImageWithFallbackProps = {
  src: string | StaticImageData;
  fallbackSrc: string | StaticImageData;
  alt: string;
  className: string;
};

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      width={150}
      height={150}
      loading='lazy'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC'
      {...rest}
      placeholder='blur'
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
