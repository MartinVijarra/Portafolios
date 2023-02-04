import { Layout } from "../../Layouts/Layout"
import JobsBg from "../../Assets/jobs-bg2.png"
import HtmlIcon from "../../Icons/HtmlIcon.png"
import CssIcon from "../../Icons/CssIcon.png"
import JsIcon from "../../Icons/JsIcon.png"
import ReactIcon from "../../Icons/ReactIcon.png"
import Conversor from "../../Assets/conversor.png"
import "../../Style/Jobs.css"

function Jobs() {
  return (
    <Layout>
        <img src={JobsBg} alt="Jobs Background" id="svg3"></img>
        <div className="jobs-container">
          <div className="jobs">

            <div className="conversor-de-divisas">
              <div className="text-info">
                <h4>Conversor de Divisas</h4>
                <p>Este conversor de divisas fue realizado como parte de mi proyecto final de Javascript en <b>CODERHOUSE</b></p>
                <p>Las tecnologías que se usaron para este proyecto fueron: </p>
                <div className="technologies">
                  <img src={HtmlIcon} alt="HTML Icon" className="web-icon"></img>
                  <img src={CssIcon} alt="Css Icon" className="web-icon"></img>
                  <img src={JsIcon} alt="Javascript Icon" className="web-icon"></img>
                </div>
                <p>También se implementó la librería de <b>Toastify</b> para las notificaciones que aparecen al borrar un resultado de la pantalla.</p>
                <p>Cabe destacar que el conversor también es responsive para la mayoría de los dispositivos móviles.</p>
                <button className="btn-info"><a href="https://martinvijarra.github.io/conversor-de-divisas.github.io/" id="enlace" rel="noreferrer" target='_blank'>Ir al sitio</a></button>
              </div>
              <img src={Conversor} alt="conversor de divisas" id="conversor-img"></img>
            </div>

          </div>
        </div>
    </Layout>
  )
}

export default Jobs