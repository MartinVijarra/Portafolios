import { createBrowserRouter } from "react-router-dom"
import About from '../Components/About/About.js'
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
    {},
])