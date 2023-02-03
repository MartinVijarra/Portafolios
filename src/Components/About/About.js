import { Layout } from "../../Layouts/Layout"
import foto from "../../Assets/foto2.png"
import AboutBg from "../../Assets/about-bg.png"
import "../../Style/About.css"

function About() {
  return (
    <Layout>
      <div className="about-container">
        <img src={AboutBg} alt="about-bg" id="svg2"></img>
        <div className="about">
          <img src={foto} alt="Martin Vijarra" className="picture"></img>
          
          <div className="description">
            <h4 className="desc-title">Sobre Mi</h4><br></br>
            <p>Desarrollador Web Junior de <b>Córdoba Argentina</b>, apasionado desde niño por la tecnología en general. Trabajando día a día para mejorar mis habilidades y mi desempeño en el rubro buscando desafíos permanentemente.</p>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default About