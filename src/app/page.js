import AllMovieComponent from "@/components/AllMovieComponent";
import MovieByGenComponent from "@/components/MovieByGenComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
  return (
    <main className=" bg-[#38140D]">
      <div class="relative h-vh bg-black">
        <div>
          <img
            src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
            alt=""
            className="opacity-[70%]"
            href="https://www.youtube.com/"
          />
        </div>
        <div class="absolute top-0 left-0 w-full bg-transparent h-[300px]">
          <NavbarComponent />
        </div>
      </div>
      <AllMovieComponent />
      <MovieByGenComponent />
    </main>
  );
}
