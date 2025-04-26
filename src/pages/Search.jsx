import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hook/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiPath,queryTerm);

  useEffect(()=>{
    document.title = `Search Result : ${queryTerm}`;
  })

  return (
    <main className="min-h-[90vh] p-4 mx-auto max-w-screen-xl w-full">
      <section>
         <p className="text-gray-700 dark:text-gray-200 text-3xl ml-20 mt-5">{movies.length === 0 ? `No Result Found For '${queryTerm}'` : `Result For '${queryTerm}'`}</p>
      </section>
    <section className="max-w-7xl m-auto py-7 ">
      <div className="flex justify-center flex-wrap ">

        {movies.map((movie) => (
          <Card key={movie.id} movies={movie}/>
        )) }
 
      </div>
    </section>
  </main>

  )
}
