import { useEffect, useState } from "react";
import axios from "axios";
export default function Card(): JSX.Element {
  const [theaters, setTheaters] = useState();
  // useEffect(() => {
  //   fetch("http://localhost:8080/getTheater")
  //     .then((response) => response.json())
  //     .then((res) => setTheaters(res));
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getTheater")
      .then((res) => {
        setTheaters(res.data);
        console.log(theaters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(theaters);
  return <div>Card</div>;
}
