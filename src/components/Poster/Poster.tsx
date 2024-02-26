import React from 'react';
import "../../index.css";
import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from '../Image/Image';

interface PosterProps {
    posterPath: string;
    title: string;
    className: string;
}

const Poster: React.FC<PosterProps> = ({
    posterPath,
    title,
    className,
}) => {


  return (

    <Image
    width={270}
    height={400}
    src={`https://image.tmdb.org/t/p/original/${posterPath}`}
    alt={title}
    className={'h-[400px] w-[270px] min-w-[270px] rounded'}
    ></Image>

  )
}

export default Poster