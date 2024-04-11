import { getAllMoviesService, getMovieByGenre } from "@/service/service.movie";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const AllMovieComponent = async () => {
  const movieData = await getAllMoviesService();
  return (
    <div className=" bg-[#38140D] w-[100%]">
      <div>
        <div className="m-auto max-w-[90%] p-4">
          <h2 className="text-white font-bold text-2xl">All Movie &gt;</h2>
        </div>
        <div className="m-auto max-w-[90%] p-4 pt-0 pb-0">
          <Carousel className="w-full">
            <CarouselContent className="">
              {movieData.payload.map((data) => (
                <CarouselItem key={data.movie_id} className="basis-1/4">
                  <div className="">
                    <Card>
                      <CardContent className="">
                        <Link
                          href={`/view-movie-details/${data.movie_id}`}
                          className="rounded-lg flex flex-col items-center mt-5"
                        >
                          <div className="">
                            {data.image !== "" ? (
                              <img src={data.image} className="shadow border" />
                            ) : (
                              <img
                                src="https://img.freepik.com/premium-psd/3d-render-popcorn-with-cinema-time_252008-391.jpg"
                                alt="Default Image"
                                className=""
                              />
                            )}
                          </div>

                          <div className="mt-4">
                            <h4 className="font-bold text-xl text-black line-clamp-1">
                              {data.movie_title}
                            </h4>
                            <p className="mt-2 text-black line-clamp-2 ">
                              {data.description}
                            </p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default AllMovieComponent;
