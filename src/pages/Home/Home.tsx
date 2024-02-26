import React, { useState, useEffect } from 'react';
import SearchComponent from "./components/SearchComponent";
// import { useGetMoviesQuery } from "../../services/tmdbApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { IMovie } from '../../types.di';
import { tmdbApi } from "../../services/tmdbApi";
import MovieCard from './components/MovieCard';


const Home = () => {


  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { useGetMoviesQuery } = tmdbApi;

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    page,
    search
  });
  
  useEffect(() =>{
    setPage(1);
  }, [search])

  useEffect(() => {
    if (isLoading || isFetching) return;
    if (data?.results) {
      if (page > 1) {
        setMovies(prev => [...prev, ...data.results]);
      } else {
        setMovies([...data.results]);
      }
    }
  }, [data, isLoading, page]);
  

  return (
    <div className="container-home h-lvh mt-[-70px] ">
      <div className="home-hero_image h-[25%]"></div>
      <div className=' bg-[#191624] min-h-[75%]'>
        <SearchComponent setSearch={setSearch} />
        <div className="max-w-[940px] mx-auto pb-[30px] w-full flex flex-wrap xs:gap-4 gap-[20px] justify-center"> 
        
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="skeleton-container">
                <Skeleton height={300} />
              </div>
            ))
          )
          :
          (movies.length > 0 ? 
            movies.map(movie => {
              return (
                <div className="kartica relative max-w-[170px]">
                  <MovieCard key={movie.id} movie={movie} />
                  <div className="rate_container"></div>
                </div>
              )
            })
            :
            <div className="text-[#d1d1d1] text-[14px]  bg-warning p-2 rounded-lg	px-4">
                There are no movies available for the requested input.
              </div>)
          }
          
         </div>
      </div>
    </div>
  );
};

export default Home;
