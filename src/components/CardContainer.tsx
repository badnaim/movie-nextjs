/* eslint-disable jsx-a11y/alt-text */
import { MovieType } from "@/util/types";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

type PropType = {
  movies: MovieType[];
};

export default function CardContainer({ movies }: PropType): JSX.Element {
  const [data, setData] = useState<MovieType[] | null>(movies);
  function loadMoreHandler() {
    axios(`http://localhost:8080/movies?limit=${data && data.length + 4}`).then(
      (res) => setData(res.data)
    );
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-5/6 h-auto flex items-center justify-evenly grid grid-cols-4 gap-4 h-">
        {data &&
          data.map((movie: MovieType, index: number) => (
            <Link
              href={`/movie/${movie._id}`}
              key={index}
              className="flex justify-center"
            >
              <div className="w-64 h-96 bg-indigo-500 flex flex-col items-center justify-center rounded-md">
                <picture>
                  <img src={movie.poster} className="w-48 h-64 mb-3" />
                </picture>
                <div className="w-90 h-24 flex-col justify-center">
                  <h3 className="text-lg font-bold">{movie.title}</h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="w-full h-auto justify-center flex mt-3 mb-3">
        <button
          onClick={() => loadMoreHandler()}
          className="rounded-full bg-red-600 h-[50px] w-[170px]"
        >
          Load more tail wind responsive
        </button>
      </div>
    </div>
  );
}
