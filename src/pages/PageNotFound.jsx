import { useNavigate } from "react-router-dom";
import pageNotFoundImage from "../assets/pageNotFound.jpg";
import { useEffect } from "react";

export const PageNotFound = ({title}) => {

    const navigate = useNavigate();

    const handlButton = () => {
        navigate("/");
    }

    useEffect(() => {
      document.title = `${title}`;
    })

  return (
    <main className="min-h-[90vh] p-4 mx-auto max-w-screen-xl w-full">
      <section className="flex justify-center flex-col gap-2">

          <div className="flex justify-center m-auto">
            <p className="text-center text-4xl text-gray-700 dark:text-gray-300 font-bold mt-14">404 Opps!</p>
          </div>

          <div className="m-auto mt-10 mb-10 max-w-2xl">
            <img src={pageNotFoundImage} className="rounded-sm" alt="404 page not found" />
          </div>

          <div className="m-auto mb-10">
            <button onClick={handlButton} className="text-white bg-blue-500 rounded-sm p-2 max-w-2xl cursor-pointer font-semibold w-full">Back To Home</button>
          </div>
          
      </section>
      </main>
  )
}
