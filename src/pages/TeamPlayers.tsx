import React, { useEffect, useState } from 'react';
import { getTeamPlayers } from '../api';
import { useLocation } from 'react-router-dom';

// interface TeamPlayers {
//   id: number;
//   full_name: string;
// }

const TeamPlayers: React.FC = () => {
  const [teamPlayers, setTeamPlayers] = useState();

  const { pathname } = useLocation();
  const id = pathname.split('/')[1];
  console.log(pathname)

  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getTeamPlayers(Number(id));
      setTeamPlayers(teamsData);
    };

    fetchData();

  }, [id]);

  return (
    <div>{teamPlayers}</div>
  );
};

export default TeamPlayers;
