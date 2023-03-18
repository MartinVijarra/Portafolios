import { Layout } from "../../Layouts/Layout"
import foto from "../../Assets/foto2.png"
import HtmlIcon from "../../Icons/HtmlIcon.png"
import CssIcon from "../../Icons/CssIcon.png"
import JsIcon from "../../Icons/JsIcon.png"
import ReactIcon from "../../Icons/ReactIcon.png"
import LinuxIcon from "../../Icons/linux-icon.png"
import NpmIcon from "../../Icons/npm-icon.png"
import GitIcon from "../../Icons/git-icon.png"
import Curriculum from "../../Assets/CV - Martin Vijarra.pdf"
import { DownloadOutlined } from "@ant-design/icons"
import "../../Style/About.css"

function About() {
  return (
    <Layout>
      <div className="about-container">
        <div className="about">    
          <div className="description">
            <img src={foto} alt="Martin Vijarra" className="picture"></img>
            <h4 className="about-title">Sobre Mi:</h4><br></br>
            <p>Desarrollador Web Junior de <b>Córdoba Argentina</b>, apasionado desde niño por la tecnología en general. Trabajando día a día para mejorar mis habilidades y mi desempeño en el rubro buscando desafíos permanentemente. 💻</p><br></br>
            <p>Me gusta pasar tiempo desarrollando proyectos personales y experimentar con nuevas tecnologías. Actualmente estoy buscando trabajo full time donde aplicar mis conocimientos para seguir mejorando. 💪</p>
          </div>

          <div className="skills-container">
            <h4 className="skills-title">Habilidades: </h4>
            <div className="skills">
              <img src={HtmlIcon} alt="Html-icon" className="skill-icon"/>
              <img src={CssIcon} alt="Css-icon" className="skill-icon"/>
              <img src={JsIcon} alt="Js-icon" className="skill-icon"/>
              <img src={ReactIcon} alt="React-icon" className="skill-icon"/>
              <img src={LinuxIcon} alt="Linux-icon" className="skill-icon"/>
              <img src={NpmIcon} alt="Npm-icon" className="skill-icon"/>
              <img src={GitIcon} alt="Git-icon" className="skill-icon"/>
            </div>
          <button className="btn-info cv"><a href={Curriculum} id="cv-download" rel="noreferrer" target='_blank'>Descargar CV <DownloadOutlined id="DownloadOutlined"/></a></button>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default About