import { Outlet } from "react-router-dom";
import Header from "../Header";

export function Layout() {
    return (
        <div className="h-screen w-full flex flex-col items-center gap-4">
            <Header/> 
            <div className="h-[95%] w-[95%] bg-zinc-100 rounded-2xl">
                <Outlet/>
            </div>
        </div>
    )
}