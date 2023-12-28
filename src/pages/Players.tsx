import React, { useEffect, useState } from 'react';
import { Player, getPlayersByTeam } from '../api';


const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  // console.log(players, 'Sou o player') pega TODOS os jogadores
  
  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getPlayersByTeam(1);
      setPlayers(teamsData);
    };

 fetchData()
  }, []);

  return (
    <>
      <div className="d-flex row m-2">
          <h1>Cheguei?</h1> 
        <ul className="list-unstyled">
          {players.map((player) => (
            <li key={player.id}>
              <p>
                <strong>Nome:</strong> {player.first_name} {player.last_name}
              </p>
              <p>
                <strong>Posição:</strong> {player.position}
              </p>
              <p>
                <strong>Altura:</strong> {player.height_inches}
              </p>
            </li>
          ))}
        </ul>

      </div>
      {/* <div><Profile /></div> */}
      </>
    );
  };

export default Players;
