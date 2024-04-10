//Get all movies
export async function getAllMoviesService() {
  const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/`, {
    cache: "no-store",
  });
  //convert json to javascript object
  const data = await res.json();
  return data;
}

//Get movie by id
export async function getMovieById(id) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

//Get movie by id
export async function getMovieByGenre(gen) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/?genre=${gen}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
