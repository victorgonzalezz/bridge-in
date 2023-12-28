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

export interface Player {
  id: number;
  first_name: string;
  height_inches: number;
  last_name: string;
  position: string;
}


const apiOptions = {
  headers: {
    'X-RapidAPI-Key': '07ee434498mshcda066fadd7e086p1c1c29jsn10a3e9498fc7',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  },
};

export const getAllTeams = async (page: number): Promise<Team[]> => {
  try {
    const response = await axios.get('https://free-nba.p.rapidapi.com/teams', {params:{ page }, ...apiOptions});
    return response.data.data as Team[];
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSpecificTeam = async (teamId: number): Promise<Team | null> => {
  try {
    const response = await axios.get(`https://free-nba.p.rapidapi.com/teams/${teamId}`, apiOptions );
    return response.data as Team;
    
    

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllPlayers = async (): Promise<Player[]> => {
  try {
    const response = await axios.get(`https://free-nba.p.rapidapi.com/players`, apiOptions );
    console.log(response, 'todos os jogadores?');
    
    return response.data.data as Player[];
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPlayersByTeam = async (id: number): Promise<Player[]> => {
  try {
    // Obter informações específicas sobre o time
    const specificTeam = await getSpecificTeam(id);

    if (specificTeam) {
      // Obter todos os jogadores
      const allPlayers = await getAllPlayers();

      // Filtrar os jogadores do time específico
      const playersInTeam = Array.isArray(allPlayers) ? allPlayers.filter((player) =>
        player.id === id) : [];
      
      console.log(playersInTeam,'cheguei mesmo?');
      

      return playersInTeam;
    } else {
      // O time não foi encontrado
      console.error(`Time com ID não encontrado.`);
      return [];
    }
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
