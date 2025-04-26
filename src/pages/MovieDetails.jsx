import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backupimg from "../assets/backup.jpg";


export const MovieDetails = () => {

    const myParams = useParams();
    const [movie,setMovie] = useState({});

    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backupimg;
    
    useEffect(() => {
      async function fetchMovie(){
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${myParams.id}?api_key=1c62c1111a974fcfac24107059164aa2
`);
        const respJson = await resp.json();
        setMovie(respJson);
      }

      fetchMovie();
    },[])


    useEffect(()=> {
      document.title = `${movie.title}`;
    });
    
  return (
    <main className="min-h-[90vh] p-4 mx-auto max-w-screen-xl w-full">
      
      <section className="flex justify-around gap-0 flex-wrap py-5 ">

        <div className="max-w-sm">
            <img src={image} alt={movie.title} className="rounded-sm"/>
        </div>

        <div className="max-w-2xl text-black text-lg dark:text-white ">
            <h1 className="text-4xl py-3 font-semibold text-center lg:text-left">{movie.title}</h1>
            <p className="py-4">{movie.overview}</p>

            {movie.genres ? (
              <p className="py-4 flex flex-wrap gap-2">
              
              {movie.genres?.map((genre) => (
                <span className="border-2 mr-4 mt-2 border-gray-500 p-2 rounded-sm" key={genre.id}>{genre.name}</span>
              ))}
             
            </p>
            ) : ""}

            

            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span  className=" text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
            </div>

            <p className="pt-3 font-semibold">Language : {movie.original_language}</p>

            <p className="py-2 flex flex-col gap-1">
              <span className="font-semibold">Runtime : {movie.runtime}min</span>
              <span className="font-semibold">Revenue : {movie.revenue}</span>
              <span className="font-semibold">Budget : {movie.budget}</span>
              <span className="font-semibold">Release Date : {movie.release_date}</span>
              <span className="font-semibold">Imdb Id : <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank">{movie.imdb_id}</a></span>
            </p>

            
        </div>
      </section>
    </main>

  )
}
