// import React, { useEffect, useState } from 'react';
// import { getAllPlayers } from '../api';
// import { useLocation } from 'react-router-dom';

// interface AllPlayers {
//   id: number;
//   full_name: string;
// }

// const AllPlayers: React.FC = () => {
//   const [AllPlayers, setAllPlayers] = useState();

//   const { pathname } = useLocation();
//   const id = pathname.split('/')[1];
//   console.log(pathname)

//   useEffect(() => {
//     const fetchData = async () => {
//       const teamsData = await getAllPlayers(Number(id));
//       setAllPlayers(teamsData);
//     };

//     fetchData();

//   }, [id]);

//   return (
//     <div>
//       {AllPlayers}
//     </div>
//   );
// };

// export default AllPlayers;
