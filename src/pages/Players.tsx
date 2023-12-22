
import React, { useEffect, useState } from 'react';
import { Team, getAllPlayersSpecificTeam,  } from '../api';
// import Profile from './Profile';


const Players: React.FC = () => {
  const [players, setPlayers] = useState<Team[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getAllPlayersSpecificTeam();
      setPlayers(teamsData);
      console.log(teamsData, '3')
      console.log(players, '4')
    };

    fetchData();

  });

  return (
    <>
      <div className="d-flex row m-2">
        <ul className="list-unstyled bg-success">
          {players.map((player) => (
            <li key={player.id} />
          ))}
        </ul>
      </div>
      </>
    );
  };

export default Players;
