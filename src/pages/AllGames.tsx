// AllGames.tsx

import React, { useEffect, useState } from 'react';
import { getAllGames } from '../api'; 

interface Team {
  full_name: string;
}

interface Game {
  id: number;
  home_team: Team;
  visitor_team: Team;
  date: string;
}

const AllGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  console.log('cheguei')

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
      <ul className="list-unstyled">
        {games.map((game) => (
          <li key={game.id}>
            <p>
              {game.home_team.full_name} vs {game.visitor_team.full_name} - {game.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllGames;
