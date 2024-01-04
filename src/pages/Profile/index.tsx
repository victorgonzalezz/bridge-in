import React, { useState, useEffect } from "react";
import { Player, getPlayersByTeam } from "../../api";

const Profile: React.FC = () => {
  //  const [teamId, ] = useState<number>(1)
  const [profile, setProfile] = useState<Player[]>([]);
  console.log(profile, "profile?"); // Também retorna todos os jogadores

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await getPlayersByTeam(1);
      setProfile(profileData);
    };

    fetchData();
  });

  return (
    <div>
      <h2>Players in Team</h2>
      <ul className="">
        {profile.map((profiles) => (
          <li key={profiles.id}>{profiles.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
