import React, { useEffect, useState } from "react";
import { Game, getAllGames } from "../../api";
import GameItem from "../../components/GameItem";

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
      <h2 className="d-flex justify-content-center mb-4 mt-5">All Games</h2>
      <div className="container d-flex justify-content-center border border-black rounded">
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
