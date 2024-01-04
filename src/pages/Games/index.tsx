import { Link } from "react-router-dom";
import AllGames from "../AllGames";

export default function Games() {
  return (
    <section>
      <AllGames />
      <Link to="/">Back Home Page</Link>
    </section>
  );
}
