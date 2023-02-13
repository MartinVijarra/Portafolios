import "../Style/MainCover.css"
import Cover from "../Assets/cover.png"
import { Link } from "react-router-dom"

export function MainCover() {

  return (
    <main>
      <div className="main-container">
        <div className="main-text">
          <h1 className="main-logo">MARTIN VIJARRA</h1>
          <p className="text-description">Desarrollador Web Front-End en HTML | CSS | Javascript | ReactJs</p>
          <Link to="/sobremi" id="a"><button className="btn-info">Ver Más</button></Link>
        </div>
        
        <div className="cover-container">
          <img src={Cover} className="cover" alt="cover"></img>
        </div>
      </div>
    </main>
  )
}
