import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

interface MovieType {
  _id: string;
  plot: string;
  countries: [string];
  year: number;
  directors: [string];
  genres: [string];
  runtime: number;
  title: string;
  poster: string;
}

export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);
  console.log(movies);

  // function loadHandler() {
  //   fetch(`http://localhost:8080/movies?limit=${movies && movies.length + 4}`).then((res) => setMovies(movies &&  [...movies, ...res.data]))
  // }

  return (
    <Layout>
      <div className="w-6/6 h-screen flex flex-col items-center justify-center">
        <div className="w-5/6 h-auto bg-amber-400 flex items-center justify-evenly grid grid-cols-4 gap-4 ">
          {movies &&
            movies.map((movie: MovieType, index: number) => (
              <Link href={`/movie/${movie._id}`} key={index} className="flex justify-center">
                <div className="w-64 h-96 bg-indigo-500 flex flex-col items-center justify-center rounded-md">
                  <picture>
                    <img src={movie.poster} className="w-48 h-64 mb-3" />
                  </picture>
                  <div className="w-90 h-24">
                    <h3 className="">{movie.title}</h3>
                    <p className="text-black">{movie.genres}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
          <div className="w-full h-auto justify-center flex mt-3 mb-3">
            <button className="rounded-full bg-emerald-600 h-[50px] w-[170px]">Load more</button>
          </div>
      </div>
    </Layout>
  );
}
