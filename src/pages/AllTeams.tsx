
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

  return (
    <div>
      <div className='d-flex'>
        <h2>All Teams</h2>
      </div>
      <div className="d-flex row">
        {teams.map((team) => (
          <div key={team.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <Link className="card-title" to={`/teams/${team.id}`}>{team.full_name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeams;
