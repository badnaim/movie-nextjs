import Layout from "@/components/Layout";
import Header from "../components/Header";
import CardContainer from "@/components/cardContainer";
import Slider from "@/components/Slider";
import { MovieType } from "@/util/types";
// import axios from "axios";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  // const [movies, setMovies] = useState<MovieType[] | null>([]);

  const { movies } = props;

  // useEffect(() => {
  //   axios("http://localhost:8080/movies?limit=4").then((res) =>
  //     setMovies(res.data)
  //   );
  // }, []);
  // console.log(movies);

  // function loadMoreHandler() {
  //   axios(
  //     `http://localhost:8080/movies?limit=${movies && movies.length + 4}`
  //   ).then((res) => setMovies(res.data));
  // }

  // useEffect(() => {
  //   fetch("http://localhost:8080/movies")
  //     .then((response) => response.json())
  //     .then((res) => setMovies(res));
  // }, []);

  return (
    <Layout>
      <Header />
      <Slider />
      <CardContainer movies={movies} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/movies`);
  const movies = await res.json();
  return {
    props: {
      movies: movies,
    },
  };
}
