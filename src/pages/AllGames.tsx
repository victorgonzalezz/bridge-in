import React, { useEffect, useState } from 'react';
import { Game, getAllGames } from '../api'; 
import GameItem from './GameItem';


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
      <h2>All Games</h2>
        <div className='container d-flex justify-content-center'>
        <ul className="list-unstyled">
          {games.map((game) => (
            <GameItem key={game.id} {...game} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default AllGames;
