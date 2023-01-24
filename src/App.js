import './App.css';
import { NavBar } from "./Components/NavBar"
import { SideBar } from "./Components/SideBar"
import { MainCover } from "./Components/MainCover"
import video from "./Assets/bg-video.mp4"

function App() {
  return (
    <>
    <video src={video} muted autoPlay loop className="bg-video"></video>
    <SideBar />
    <NavBar />
    <MainCover />
    </>
  )
}

export default App;
