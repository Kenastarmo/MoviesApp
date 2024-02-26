import React from 'react';
import Image from '../../../components/Image/Image';

import { FaStar } from "react-icons/fa";
import { IMovie } from '../../../types.di';
import { Link } from 'react-router-dom';

interface MovieCardProps{
    movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

    const {poster_path, original_title, overview, id, vote_average} = movie;

    const rate = vote_average.toFixed(1);
    console.log(rate);

  return (
    <>
    <Link to={`/details/${id}`}
    className='card_container relative  w-[170px] relative'
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${overview}`}
        className={"rounded h-[250px]"}
        width={170}
        height={250} />
        <h4 className='font-mono text-slate-100 text-base mt-[6px] '>{original_title}</h4>
        </Link>
    
        
        <div className='rate_container flex justify-center items-center absolute top-[10px] left-[10px] px-[4px]  rounded text-slate-100 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
            <span className="text-[14px]">{rate}</span>
            <FaStar color="yellow" className="mb-[0.5px] ml-1" />
        </div> 
        </>
  );
};

export default MovieCard;
