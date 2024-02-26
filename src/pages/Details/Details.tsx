import React from 'react';
import { useGetMovieQuery } from '../../services/tmdbApi';
import Poster from '../../components/Poster/Poster';
import Cast from '../../components/Cast/Cast';
import Loader from "../../components/Loader/Loader";
import { useParams } from 'react-router';

const Details = () => {

  const { id } = useParams();

  const { 
    data: movie,
    isLoading,
    isError
   } = useGetMovieQuery( {id: Number(id)} )


   if (!movie) {
    return <Loader />;
  }

   const { 
     original_title,
     overview,
     poster_path: posterPath,
     genres,
     credits: casts,
     
    } = movie;

    const slicedCasts = casts.cast.slice(0,5);
   

    const backgroundStyle = {
      backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${posterPath}'`,
      backgroundPosition: "top",
      backgroundSize: "cover"
      }

  return (
    <>
      <section className='min-h-screen h-screen mt-[-70px] flex justify-center items-center' style={backgroundStyle}>

        <div className='flex gap-[30px] max-w-[900px]'>
          <div className='left'>
            <Poster posterPath={posterPath} title={original_title} className='rounded min-w-[270px]'/>
          </div>
          <div className='right flex flex-col'>
            <h1 className='text-slate-100 text-[32px]'>{original_title}</h1>
            <div className='genres_container flex gap-[10px] mt-[24px]'>
            {genres.map((genre : {id: number, name: string}) => (
                <div key={genre.id} className='flex justify-center items-center rounded-full border border-solid border-white px-[12px] py-[2px]'>
                  <span className='text-slate-100 text-[12px]'>{genre.name}</span>
                </div>
              ))}
            </div>
            <span className='text-slate-100 text-[16px] mt-[24px]'>{overview}</span>
            <div className='casts flex flex-row gap-[12px] mt-[20px]'>
              {slicedCasts.map((cast: {id: number, profile_path: string, name: string})=> {
                return (
                  <Cast profilePath={cast.profile_path} name={cast.name}/>

                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
