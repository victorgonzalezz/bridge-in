import { format } from "date-fns";
import { Game } from "../../api";

export default function GameItem({
  date,
  home_team: { full_name },
  visitor_team: { full_name: visitorFullName },
}: Game) {
  return (
    //Render the Team against de visitor and shows de date of the day
    <li className="d-flex gap-5 mt-3">
      <p className="fs-4">{full_name}</p>
      <span className="fs-5 fw-bold">
        {format(new Date(date), "EEEE, MM/dd")}
      </span>
      <p className="fs-4">{visitorFullName}</p>
    </li>
  );
}
