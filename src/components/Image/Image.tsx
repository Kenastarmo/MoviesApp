import React from 'react';
import "../../index.css";
import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageProps {
    src: string;
    alt: string;
    className: string;
    width: number;
    height: number;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    className,
    width,
    height,
}) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleIsImageLoaded = () => {
    setIsImageLoaded(true);
  }

  return (

    <div className={`image-container ${isImageLoaded ? 'loaded' : ''}`}>
    <LazyLoadImage
    src={src}
    alt={alt}
    className={""}
    width={width}
    height={height}
    onLoad={handleIsImageLoaded}
    />
    </div>

  )
}

export default Image