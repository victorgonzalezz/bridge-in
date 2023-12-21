import { Game } from '../api'
import { format } from 'date-fns'

export default function GameItem({ date, home_team: {full_name}, visitor_team: {full_name: visitorFullName}}: Game) {

  return (
     <li className='d-flex gap-2'>
        <p>{full_name}</p>
          <span>{format(new Date(date), 'EEEE, MM/dd')}</span>
        <p>{visitorFullName}</p>
  </li>
  )
}
