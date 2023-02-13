import { Link } from "react-router-dom"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import "../Style/NavBar.css"
import { useRef } from "react";

export function NavBar() {

    const navRef = useRef()

    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }

    return(
        <header className="nav-bar">
            <h4 className="logo">Portfolio</h4>
            
            <nav className="menu-container">
                <div className="menu">
                    <Link to="/" className="btn-nav">Inicio</Link>
                    <Link to="/sobremi" className="btn-nav">Sobre Mi</Link>
                    <Link to="/trabajos" className="btn-nav">Trabajos</Link>
                <button className="btn-bars" onClick={showNavBar}>
                    <MenuOutlined />
                </button>
                </div>    
            </nav>
            
                <button className="btn-bars btn-close" onClick={showNavBar}>
                    <CloseOutlined />
                </button>
        </header>
    )
}