import { Link } from 'react-router-dom'
import AllTeams from './AllTeams'

export default function Teams() {
  return (
    <section>
      <AllTeams />
        <Link to='/'>
        Back Home
        </Link>
    </section>
  )
}
