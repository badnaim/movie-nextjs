import React, { useEffect, useState } from "react";
import { MovieType } from "@/util/types";
import { useRouter } from "next/router";

export default function Movie() {
  const [data, setData] = useState<MovieType | null>(null);
  const { query } = useRouter();
  console.log("Router: ", query.id);

  useEffect(() => {
    fetch(`http://localhost:8080/movie/${query.id}`)
      .then((res) => res.json())
      .then((res) => setData(res[0]));
  }, [query.id]);

  console.log("data", data);

  return (
    <div>
      {/* ID: {query.id} */}
      <div>
        {data && (
          <div className="flex ">
            <div className="w-1/2 h-screen flex items-center justify-center">
              <picture className="w-full h-auto flex justify-center">
                <img src={data.poster} alt="" className="w-3/5 h-auto" />
              </picture>
            </div>
            <div className="w-1/2 h-screen flex items-center justify-center">
              <div className="w-4/5 h-auto text-xl gap-y-px">
                <p className="text-4xl font-semibold text-blue-600">{data.title}</p>
                <p className="mt-6">Genres: {data.genres.join(", ")}</p>
                <p className="mt-2">Runtime: {data.runtime} hours</p>
                <p className="mt-2">Plot: {data.plot}</p>
                <p className="mt-2">Directors: {data.directors.join(", ")}</p>
                <p className="mt-2">Countries: {data.countries}</p>
                <p className="mt-2">Year: {data.year}</p>
                <p className="mt-2">IMDB rating: {data.imdb.rating}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
