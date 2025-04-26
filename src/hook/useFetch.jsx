import { useEffect, useState } from "react"

export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData.results);
        }
        fetchMovies();
      },[url]);

  return { data }
  
}
