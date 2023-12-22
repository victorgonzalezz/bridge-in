import { Link } from 'react-router-dom'
import AllTeams from './AllTeams'

export default function Teams() {
  return (
    <section>
      <AllTeams />
      <div className='d-flex justify-content-center'>
        <Link to='/'>
        Back Home Page
        </Link>
      </div>
    </section>
  )
}
