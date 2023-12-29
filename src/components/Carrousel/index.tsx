import Nba01 from '../../assets/nba-01.webp'
import Nba02 from '../../assets/nba-02.jpeg'
import Nba03 from '../../assets/nba-03.jpg'
import Nba04 from '../../assets/nba-04.jpg'
import Nba05 from '../../assets/nba-05.webp'

export default function Carrousel() {
  return (
    <div id="carouselExample" className="carousel slide container">
      <div className="carousel-inner mt-5">
        <div className="carousel-item active">
          <img src={Nba01} className="d-block w-100" alt="Nba Picture Number One" />
        </div>
        <div className="carousel-item">
          <img src={Nba02} className="d-block w-100" alt="Nba Picture Number Two" />
        </div>
        <div className="carousel-item">
          <img src={Nba03} className="d-block w-100" alt="Nba Picture Number Three" />
        </div>
        <div className="carousel-item">
          <img src={Nba04} className="d-block w-100" alt="Nba Picture Number Four" />
        </div>
        <div className="carousel-item">
          <img src={Nba05} className="d-block w-100" alt="Nba Picture Number Five" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
