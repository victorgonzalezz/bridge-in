import React, { useEffect, useState } from "react";
import { Game, getAllGames } from "../../api";
import GameItem from "../../components/GameItem";
import { Link } from "react-router-dom";

const AllGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const gamesData = await getAllGames();
      setGames(gamesData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to="/" className="d-flex justify-content-end m-1">Back Home Page</Link>
      <h2 className="d-flex justify-content-center mb-4 mt-5">All Games</h2>
      <div className="container d-flex justify-content-center border border-black rounded mb-4">
        <ul className="list-unstyled mt-3">
          {games.map((game) => (
            <GameItem key={game.id} {...game} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllGames;
