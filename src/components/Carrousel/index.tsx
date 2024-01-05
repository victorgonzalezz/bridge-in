import Nba02 from "../../assets/nba-02.jpeg";
import Nba03 from "../../assets/nba-03.jpg";
import Nba04 from "../../assets/nba-04.jpg";
import Nba05 from "../../assets/nba-05.jpg";
import './style.css'

const images = [Nba02, Nba03, Nba04, Nba05];
export default function Carrousel() {
  return (
    <div id="carouselExample" className="carousel slide container w-50">

      <div className="carousel-inner mt-5">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="image d-block w-100" alt={`Nba Picture Number ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
