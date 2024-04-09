import { getAllMoviesService } from "@/service/service.movie";
import React from "react";

const AllMovieComponent = async () => {
  const movieData = await getAllMoviesService();
  return (
    <div className="bg-red-900 w-[100%]">
      <div className=" m-auto max-w-[90%] p-4">
        <h2 className="text-white font-bold">All Movie</h2>
      </div>
      <div className="m-auto max-w-[90%] overflow-hidden">
        <div className="carousel carousel-center space-x-4 pl-4">
        {movieData.payload.map((data) => ( 
          <div key={data.movie_id} className="carousel-item">
            <a
              class="p-5 max-w-sm bg-white rounded-lg flex flex-col items-center"
              href="#"
            >
              <img
                src={data.image}
                class="shadow overflow-hidden border"
              />
              <div class="mt-4">
                <h4 class="font-bold text-xl text-black">
                  {data.movie_title}
                </h4>
                <p class="mt-2 text-black line-clamp-2 ">
                  {data.description}
                </p>
              </div>
            </a>
          </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default AllMovieComponent;
