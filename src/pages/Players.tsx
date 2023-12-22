
import React, { useEffect, useState } from 'react';
import { Team, getAllPlayersSpecificTeam,  } from '../api';


const Players: React.FC = () => {
  const [, setPlayers] = useState<Team[]>();
  
  
  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getAllPlayersSpecificTeam();
      setPlayers(teamsData);
      console.log('3')
    };

    fetchData();

  }, []);

  return (
      <>
        <h2 className='d-flex justify-content-center mt-4 mb-3'>All Teams</h2>
          <div className="d-flex row m-2">
            <ul className="list-unstyled mt-3">
              <li>te</li>
            </ul>
          </div>
      </>
    );
  };

export default Players;
