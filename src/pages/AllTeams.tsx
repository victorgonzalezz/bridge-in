
import React, { useEffect, useState } from 'react';
import { getAllTeams } from '../api';
import { Link } from 'react-router-dom';
// import Profile from './Profile';

interface Team {
  id: number;
  full_name: string;
}

const AllTeams: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [teams, setTeams] = useState<Team[]>([]);

   const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const teamsData = await getAllTeams(currentPage);
      console.log(teamsData, 'All')
      setTeams(teamsData);
    };

    fetchData();

  }, [currentPage]);


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
                {/* Above, render all Teams  */}
                <div className='d-flex gap-3'>
                  <Link className='text-decoration-none' to={'/teams/:id/players'}>Profile</Link>
                  <Link className='text-decoration-none' to={''}>Stats</Link>
                </div>
              </div>
            ))}
      </div>
      <div className='d-flex justify-content-between m-2'>
        <button onClick={handlePrevious}>back</button>
        <button onClick={handleNext}>next</button>
      </div>
       
      </>
    );
  };

export default AllTeams;
