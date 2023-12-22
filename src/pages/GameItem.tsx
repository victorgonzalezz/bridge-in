import { Game } from '../api'
import { format } from 'date-fns'

export default function GameItem({ date, home_team: {full_name}, visitor_team: {full_name: visitorFullName}}: Game) {

  return (
     <li className='d-flex gap-5 mt-3'>
        <p className='fs-4'>{full_name}</p>
          <span className='fs-5 fw-bold'>{format(new Date(date), 'EEEE, MM/dd')}</span>
        <p className='fs-4'>{visitorFullName}</p>
  </li>
  )
}
