import "../Style/MainCover.css"
import { Link } from "react-router-dom"

export function MainCover() {

  return (
    <main>
      <div className="main-container">
        <div className="main-text">
          <h1 className="main-logo">MARTIN VIJARRA</h1>
          <p className="text-description">Desarrollador Web Front-End en HTML, CSS, Javascript y ReactJs</p>
          <Link to="/sobremi"><button className="btn-info">VER MÁS</button></Link>
        </div>
      </div>
    </main>
  )
}
