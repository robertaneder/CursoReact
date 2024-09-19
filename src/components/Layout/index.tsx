import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useGeralStore } from "../../store/usuariosStore";
import { useEffect } from "react";
import { SideBar } from "../SideBar";

export function Layout() {
  const fetchUsuario = useGeralStore((state) => state.fetch);

  useEffect(() => {
    fetchUsuario();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <div className="w-full p-4 rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
