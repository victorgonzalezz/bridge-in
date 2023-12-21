import axios from 'axios';

interface Team {
  id: number;
  full_name: string;
}

interface Game {
  id: number;
  home_team: Team;
  visitor_team: Team;
  date: string;
}



const apiOptions = {
  headers: {
    'X-RapidAPI-Key': '07ee434498mshcda066fadd7e086p1c1c29jsn10a3e9498fc7',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getAllTeams = async (): Promise<Team[]> => {
  try {
    const response = await axios.get('https://free-nba.p.rapidapi.com/teams', apiOptions);
    console.log(response, 'allTeams');
    return response.data.data as Team[];
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllGames = async (): Promise<Game[]> => {
  try {
    const response = await axios.get('https://free-nba.p.rapidapi.com/games', apiOptions );
    console.log(response, 'allGames');
    return response.data.data as Game[];
    

  } catch (error) {
    console.error(error);
    return [];
  }
};

// export const getAllPlayers = async (id: number) => {

//   try {
//     const response = await axios.get(`https://free-nba.p.rapidapi.com/players/${id}`, apiOptions);
//     // console.log(response, 'o');
//     return response.data.data;
    
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
