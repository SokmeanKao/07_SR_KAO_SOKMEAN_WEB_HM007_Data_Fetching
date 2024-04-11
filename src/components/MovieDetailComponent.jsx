import React from "react";

const MovieDetailComponent = ({ movieData }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.min(5, rating); i++) {
      stars.push(
        <span key={i} className="star filled">
          &#9733;
        </span>
      );
    }
    return stars;
  };
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(movieData.posted_at);
  return (
    <div className=" w-[95%] m-auto">
      <div className="m-auto flex">
        <div className="w-[60%]">
          {movieData.payload.image !== "" ? (
            <img src={movieData.payload.image} className="shadow border" />
          ) : (
            <img
              src="https://www.themoviedb.org/t/p/w1000_and_h563_face/wU2pQ6yv0c2TrgAMWs2zFWk4F3z.jpg"
              alt="Default Image"
              className=" object-cover"
            />
          )}
        </div>

        <div className="w-[40%]">
          <div className="w-[90%] m-auto h-full">
            <div>
              <h2 className="text-xl text-white font-bold">
                {movieData.payload.director}
              </h2>
              <p className=" text-[13px] text-gray-200">
                {movieData.payload.runtime} minutes
              </p>
              <p className=" text-[13px] text-gray-200 italic">
                {movieData.payload.genre}
              </p>
              <p className="text-[25px] text-yellow-500">
                {renderStars(movieData.payload.rating)}
              </p>
            </div>
            <div>
              <h2 className="text-xl text-white font-bold mt-14">
                {movieData.payload.movie_title} (
                {movieData.payload.released_year})
              </h2>
              <p className="text-white text-sm space-x-1">
                {movieData.payload.description}
              </p>
            </div>
            <div>
              <p className="mt-14 text-white text-sm">{dateFormat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailComponent;
