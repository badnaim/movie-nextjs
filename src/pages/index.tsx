import Layout from "@/components/Layout";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import Slider from "@/components/Slider";
import { MovieType } from "@/util/types";
// import axios from "axios";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;

  return (
    <Layout>
      <Header />
      <Slider />
      <CardContainer movies={movies} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/movies?limit=4`);
  const movies = await res.json();
  return {
    props: {
      movies: movies,
    },
  };
}
