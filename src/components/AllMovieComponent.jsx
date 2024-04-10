import { getAllMoviesService, getMovieByGenre } from "@/service/service.movie";
import React from "react";
import MovieByGenComponent from "./MovieByGenComponent";

const AllMovieComponent = async () => {
  const movieData = await getAllMoviesService();
  const getAllGen = movieData.payload
    .map((item) => item.genre)
    .filter((value, index, currentGen) => currentGen.indexOf(value) === index);
  return (
    <div className="bg-red-900 w-[100%]">
      {getAllGen.map((gen) => (
        <div>
          <div className="m-auto max-w-[90%] p-4">
            <h2 className="text-white font-bold text-2xl">{gen} &gt;</h2>
          </div>
          <div className="m-auto max-w-[90%] p-4 pt-0">
            <MovieByGenComponent gen={gen} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllMovieComponent;
