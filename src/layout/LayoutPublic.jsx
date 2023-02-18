import { Outlet } from "react-router"
import { NavBar } from "../Components/NavBar/NavBar"
import {Futer} from "../Components/Foter/Futer"

export const LayoutPublic = () => {
    return (
        <>
       <NavBar />
           <main>
               <Outlet />
               </main>
           <Futer/>
       </>

)
}