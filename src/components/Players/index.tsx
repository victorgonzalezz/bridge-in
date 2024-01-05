import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Player, getPlayersByTeam } from "../../api";

const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const { state } = useLocation();
  const teamName = players.length > 0 ? players[0].team.full_name : '';
  // console.log(state, '5')

  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        const teamsData = await getPlayersByTeam(state);
        setPlayers(teamsData);


      }
    };

    fetchData();
  }, [state]);

  return (
    <>
      <h2 className="d-flex justify-content-center">{teamName}</h2>
        <div className="d-flex flex-column m-2">
          <ul className="list-group">
              {players.map((player) => (
                <li key={player.id} className="list-group-item list-group-item-light border my-1">
                  <p className="mb-1">
                    <strong>Nome:</strong> {player.first_name} {player.last_name}
                  </p>
                  <p className="mb-1">
                    <strong>Posicão:</strong> {player.position}
                  </p>
                </li>
              ))}
          </ul>
        </div>
    </>
  );
};

export default Players;
