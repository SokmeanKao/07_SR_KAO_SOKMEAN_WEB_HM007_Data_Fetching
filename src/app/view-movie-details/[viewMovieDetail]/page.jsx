import MovieDetailComponent from "@/components/MovieDetailComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { getMovieById } from "@/service/service.movie";
import React from "react";

const MovieDetail = async ({ params }) => {
  const movieData = await getMovieById(params.viewMovieDetail);
  return (
    <div className="bg-red-900 h-lvh">
      <NavbarComponent />
      <div className="">
      <MovieDetailComponent movieData={movieData} />
      </div>
    </div>
  );
};
export default MovieDetail;
