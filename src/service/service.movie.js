//Get all movies 
export async function getAllMoviesService() {
    const res = await fetch("https://movie-api-295p.vercel.app/api");
    //convert json to javascript object
    const data = await res.json();
    console.log("data value: ", data);
    return data;
  }

//Get movie by id
export async function getMovieById(id){
    const res = await fetch("https://movie-api-295p.vercel.app/api/"+id);
    const data = res.json();
    return data;
}