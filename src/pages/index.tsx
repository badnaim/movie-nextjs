import Card from "../components/Card";
import { useEffect, useState } from "react"

interface MovieType {
  plot: string,
  genres: [string],
  runtime: number,
  title: string,
}

export default function Home(): JSX.Element {

  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/movies")
      .then((response) => response.json())
      .then((res) => setMovies([res]))
  }, [])

  return (
    <>
      <Card />
      <div>
        {movies && movies.map((movie: MovieType, index: number) => (
          <div key={index} className="w-1/6 h-1/6">
            {movie.title}
          </div>
        ))}
      </div>
    </>
  );
}
