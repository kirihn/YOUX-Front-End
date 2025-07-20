import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import './layout.scss'
export function Layout(){

    return (
        <div className="layoutContainer">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}