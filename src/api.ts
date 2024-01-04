import axios from "axios";

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
  height_feet: number;
  last_name: string;
  position: string;
  team: Team;
}

const apiOptions = {
  headers: {
    "X-RapidAPI-Key": "07ee434498mshcda066fadd7e086p1c1c29jsn10a3e9498fc7",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

export const getAllTeams = async (page: number): Promise<Team[]> => {
  try {
    const response = await axios.get("https://free-nba.p.rapidapi.com/teams", {
      params: { page },
      ...apiOptions,
    });
    return response.data.data as Team[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSpecificTeam = async (teamId: number): Promise<Team | null> => {
  try {
    const response = await axios.get(
      `https://free-nba.p.rapidapi.com/teams/${teamId}`,
      apiOptions
    );
    console.log(response, "times?");

    return response.data as Team;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllPlayers = async (page: number): Promise<Player[]> => {
  try {
    const response = await axios.get(
      `https://free-nba.p.rapidapi.com/players`,
      { params: { page }, ...apiOptions }
    );
    // console.log(response, '1')

    return response.data.data as Player[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPlayersByTeam = async (
  id: number,
  totalPages: number = 25
): Promise<Player[]> => {
  const promises = [];

  for (let page = 1; page <= totalPages; page++) {
    promises.push(
      axios
        .get(`https://free-nba.p.rapidapi.com/players`, {
          params: { page },
          ...apiOptions,
        })
        .then((response) => response.data)
    );
  }
  try {
    const allResponses = await Promise.all(promises);
    const allPlayers = allResponses.flat(); // Flatten the array of arrays

    const teamPlayers = allPlayers.filter((player) => player.team.id === id);

    // Do something with the team players
    console.log(teamPlayers);

    return teamPlayers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllGames = async (): Promise<Game[]> => {
  try {
    const response = await axios.get(
      "https://free-nba.p.rapidapi.com/games",
      apiOptions
    );
    return response.data.data as Game[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllGamesSpecificTeam = async (
  idTeam: number
): Promise<Game[]> => {
  try {
    const response = await axios.get("https://free-nba.p.rapidapi.com/games", {
      ...apiOptions,
      params: { team_ids: [idTeam] },
    });
    return response.data.data as Game[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
