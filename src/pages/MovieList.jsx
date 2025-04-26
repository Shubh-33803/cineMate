import { useEffect } from "react";
import { Card } from "../components/Card"
import { useFetch } from "../hook/useFetch";

export const MovieList = ({apiPath,title}) => {

  const {data : movies} = useFetch(apiPath);

  useEffect(()=> {
      document.title = `${title}`;
  })

  return (
    <main className="min-h-[90vh] p-4 mx-auto max-w-screen-xl w-full">
      <section className="max-w-7xl m-auto py-7 ">
        <div className="flex justify-center flex-wrap">

          {movies.map((movie) => (
            <Card key={movie.id} movies={movie}/>
          )) }
   
        </div>
      </section>
    </main>
  )
}
