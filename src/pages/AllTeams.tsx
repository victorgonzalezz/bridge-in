
import React, { useEffect, useState } from 'react';
import { getAllTeams } from '../api';
import { Link } from 'react-router-dom';

interface Team {
  id: number;
  full_name: string;
}

const AllTeams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getAllTeams();
      setTeams(teamsData);
    };

    fetchData();

  }, []);

  function handleClick() {
    console.log('cheguei?')
  }


  return (
      <>
        <h2 className='d-flex justify-content-center mt-4 mb-3'>All Teams</h2>
          <div className="d-flex row m-2">
            {teams.map((team) => (
              <div key={team.id} className="col-md-4 mb-3 border border-1">
                <div className="card-body">
                  <Link
                    className="card-title text-decoration-none fs-5 fw-medium"
                    to={`/teams/${team.id}`}>{team.full_name}
                  </Link>
                </div>
                <div className='d-flex gap-3' onClick={handleClick}>
                  <Link className='text-decoration-none' to={''}>Profile</Link>
                  <Link className='text-decoration-none' to={''}>Stats</Link>
                </div>
              </div>
            ))}
          </div>
      </>
    );
  };

export default AllTeams;
