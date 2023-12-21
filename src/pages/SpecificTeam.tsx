
import React, { useEffect, useState } from 'react';
import { Game, Team, getAllGamesSpecificTeam, getSpecificTeam } from '../api';
import { useParams } from 'react-router-dom';
import GameItem from './GameItem';

const SpecificTeam: React.FC = () => {
  const { id } = useParams();
  console.log(id, 'oi')
  const [specificTeam, setSpecificTeam] = useState<Team | null>();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getSpecificTeam(Number(id));
      console.log(teamsData, 'e aí')
      setSpecificTeam(teamsData);
    };

    fetchData()

  }, [id]);

  useEffect(() => {
      const fetchData = async () => {
      const gamesData = await getAllGamesSpecificTeam(Number(id));
        setGames(gamesData);
    };

    fetchData();

  }, [id]);

  return (
    <div>
      <div className='d-flex'>
        <h2>{specificTeam?.full_name}</h2>
      </div>
      <div className="d-flex row">
       <ul className="list-unstyled">
          {games.map((game) => (
            <GameItem key={game.id} {...game} />
            ))}
          </ul>
      </div>
    </div>
  );
};

export default SpecificTeam;
