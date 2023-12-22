import axios from 'axios';

export interface Team {
  id: number;
  full_name: string;
}

export interface Game {
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
    // console.log(response, 'allTeams');
    return response.data.data as Team[];
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSpecificTeam = async (teamId: number): Promise<Team | null> => {
  try {
    const response = await axios.get(`https://free-nba.p.rapidapi.com/teams/${teamId}`, apiOptions );
    console.log(response, '1');
    return response.data as Team;
    
    

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllPlayersSpecificTeam = async (): Promise<Team[]> => {
  try {
    const response = await axios.get(`https://free-nba.p.rapidapi.com/players`, apiOptions );
    console.log(response, '2');
    return response.data.data as Team[];
    
    

  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllGames = async (): Promise<Game[]> => {
  try {
    const response = await axios.get('https://free-nba.p.rapidapi.com/games', apiOptions );
    return response.data.data as Game[];
    

  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllGamesSpecificTeam = async (idTeam: number): Promise<Game[]> => {
  try {
    const response = await axios.get('https://free-nba.p.rapidapi.com/games', {...apiOptions, params: { team_ids:[idTeam]}} );
    return response.data.data as Game[];
    
  } catch (error) {
    console.error(error);
    return [];
  }
};
