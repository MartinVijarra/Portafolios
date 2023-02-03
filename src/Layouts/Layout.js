import { NavBar } from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";

export function Layout({children}) {
    return(
        <>
        <SideBar />
        <NavBar />
        {children}
        </>
    )
}