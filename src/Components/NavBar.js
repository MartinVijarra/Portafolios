import { Link } from "react-router-dom"
import "../Style/NavBar.css"

export function NavBar() {
    return(
        <div className="nav-bar">
            <div className="menu">
                <Link to="/" className="btn-nav">Inicio</Link>
                <Link to="/sobremi" className="btn-nav">Sobre Mi</Link>
                <Link to="/trabajos" className="btn-nav">Trabajos</Link>
            </div>
        </div>
    )
}