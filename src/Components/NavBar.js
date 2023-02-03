import { SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "../Style/NavBar.css"

export function NavBar() {
    return(
        <div className="NavBar">
            <div className="menu">
                <Link to="/" className="btn-nav">Inicio</Link>
                <Link to="/sobremi" className="btn-nav">Sobre Mi</Link>
                <Link to="/trabajos" className="btn-nav">Trabajos</Link>
                <Link to="##" className="btn-nav">Habilidades</Link>
            </div>
        </div>
    )
}