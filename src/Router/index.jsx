import { createBrowserRouter } from "react-router-dom"
import About from '../Components/About/About.jsx'
import Jobs from "../Components/Experience/Jobs.jsx"
import App from "../App"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/sobremi',
        element: <About />
    },
    {   path: '/trabajos',
        element: <Jobs />
    }
])