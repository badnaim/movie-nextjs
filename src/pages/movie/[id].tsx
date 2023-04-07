/* eslint-disable @next/next/no-typos */
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { MovieType } from "@/util/types";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Movie({ data: movie }: { data: MovieType }) {
  // const [data, setData] = useState<MovieType | null>(null);
  // const { query } = useRouter();
  // console.log("Router: ", query.id);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/movie/${query.id}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res[0]));
  // }, [query.id]);

  // console.log("data", data);

  return (
    <div className="bg-black">
      <div>
        <div>{movie._id}</div>
        {/* {data && (
          <div className="flex ">
            <div className="w-1/2 h-screen flex items-center justify-center">
              <picture className="w-full h-auto flex justify-center">
                <img src={data.poster} alt="" className="w-2/5 h-auto" />
              </picture>
            </div>
            <div className="w-1/2 h-screen flex items-center justify-center">
              <div className="w-4/5 h-auto text-xl gap-y-px">
                <p className="text-4xl font-semibold text-blue-600">
                  {data.title}
                </p>
                <p className="mt-6 text-white">
                  Genres: {movie.genres.join(", ")}
                </p>
                <p className="mt-2 text-white">
                  Runtime: {movie.runtime} hours
                </p>
                <p className="mt-2 text-white">Plot: {movie.plot}</p>
                <p className="mt-2 text-white">
                  Directors: {movie.directors.join(", ")}
                </p>
                <p className="mt-2 text-white">Countries: {movie.countries}</p>
                <p className="mt-2 text-white">Year: {movie.year}</p>
                <p className="mt-2 text-white">
                  IMDB rating: {movie.imdb.rating}
                </p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

// export const getStatisPaths: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:8080/movies-id`);
//   const resJson = await res.json();
//   const paths = await resJson.map((id: { _id: string }) => ({
//     params: { id: id._id },
//   }));
//   return {
//     paths,
//     fallback: "boolean",
//   };
// };

// interface MovieProps {
//   data: MovieType | null;
// }

// export const getStaticProps: GetStaticProps<MovieProps> = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const res = await fetch(`http://localhost:8080/movie/${params?.id}`);
//   const movie = await res.json();
//   return {
//     props: {
//       data: movie,
//     },
//   };
// };
