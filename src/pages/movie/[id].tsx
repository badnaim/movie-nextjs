import React, { useEffect, useState } from "react";
import { MovieType } from "@/util/types";
import { useRouter } from "next/router";

export default function Movie() {
  const [data, setData] = useState<MovieType | null>(null);
  const { query } = useRouter();
  console.log("Router: ", query);

  useEffect(() => {
    fetch(`http://localhost:8080/movie/${query.id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [query.id]);

  console.log(data);

  return (
    <div>
      ID: {query.id}
      <div>
        {data && (
          <>
            <h2>{data.title}</h2>
            <picture>
              <img src={data.poster} alt="" />
            </picture>
          </>
        )}
      </div>
    </div>
  );
}
