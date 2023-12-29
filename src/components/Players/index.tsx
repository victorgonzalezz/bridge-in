import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Player, getPlayersByTeam } from '../../api';


const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const { state } = useLocation();
  
  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        const teamsData = await getPlayersByTeam(state);
        setPlayers(teamsData);
      }
    };

 fetchData()
  }, [state]);

  return (
    <>
      <div className="d-flex row m-2">
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
                <strong>Pés de altura:</strong> {player.height_inches}
              </p>
              <p>
                <strong>Polegadas de Altura:</strong> {player.height_feet}
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
