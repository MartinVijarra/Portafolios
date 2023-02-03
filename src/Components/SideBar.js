import "../Style/SideBar.css"
import { LinkedinOutlined, WhatsAppOutlined, GithubOutlined, } from '@ant-design/icons';

export function SideBar() {
  return (
    <aside className="contact-container">
        <div className="icons">
            <a className="icon" href="https://github.com/MartinVijarra?tab=repositories" target="_blank" rel="noreferrer"><GithubOutlined /> </a>
            <a className="icon" href="https://wa.me/543516527695?text=Hola!%20Me%20comunico%20a%20través%20de%20tu%20website%20" target="_blank" rel="noreferrer"><WhatsAppOutlined /> </a>
            <a className="icon" href="https://www.linkedin.com/in/martinvijarra/" target="_blank" rel="noreferrer"><LinkedinOutlined /> </a>
        </div>
    </aside>
  )
}
