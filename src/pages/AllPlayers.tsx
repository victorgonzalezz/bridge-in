// import React, { useEffect, useState } from 'react';
// import { Team, getAllPlayers } from '../api';
// import { useLocation } from 'react-router-dom';

// interface AllPlayers {
//   id: number;
//   full_name: string;
// }

// const AllPlayers: React.FC = () => {
//   const [allPlayers, setAllPlayers] = useState<Team[]>([]);

//   const { pathname } = useLocation();
//   const id = pathname.split('/')[1];
//   console.log(pathname)

//   useEffect(() => {
//     const fetchData = async () => {
//       const teamsData = await getAllPlayers();
//       setAllPlayers(teamsData);
//     };

//     fetchData();

//   }, [id]);

//   return (
//     <div>
//       {allPlayers}
//     </div>
//   );
// };

// export default AllPlayers;
