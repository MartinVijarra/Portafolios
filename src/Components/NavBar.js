import { SearchOutlined } from "@ant-design/icons"
import "../Style/NavBar.css"

export function NavBar() {
    return(
        <div className="NavBar">
            <div className="menu">
                <a href="##" className="btn-nav">Inicio</a>
                <a href="##" className="btn-nav">Experiencia</a>
                <a href="##" className="btn-nav">Habilidades</a>
            </div>
            <SearchOutlined className="search"/>
        </div>
    )
}