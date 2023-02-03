import './App.css';
import { MainCover } from "./Components/MainCover"
import Background from "./Assets/svg.png"
import { Layout } from "./Layouts/Layout"

function App() {
  return (
    <Layout>
    <img src={Background} alt='Background-img' id='svg'></img>
    <MainCover />
    </Layout>
  )
}

export default App;
