import React from 'react';
import "../../index.css";
import { useState } from 'react';
import Image from '../Image/Image';

interface CastProps {
    profilePath: string;
    name: string;
    
}

const Cast: React.FC<CastProps> = ({
    profilePath,
    name,
    
}) => {


  return (
    <div className='cast_container max-w-[95px]'>
    <Image
    width={95}
    height={120}
    src={`https://image.tmdb.org/t/p/original/${profilePath}`}
    alt={""}
    className={'h-[120px] w-[95px] min-w-[95px] rounded'}
    ></Image>
    <span className='text-slate-100 text-[12px] mt-[6px]'>{name}</span>
    </div>
  )
}

export default Cast