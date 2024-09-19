import { ChevronLast, Receipt } from "lucide-react";
import { useGeralStore } from "../../store/usuariosStore";
import React, { ReactNode } from "react";

interface IlistIcon {
  [key: string]: ReactNode;
}

const listIcon: IlistIcon = {
  fdo: <Receipt />,
  "administracao-fdo": <Receipt />,
  rel: <Receipt />,
  autorizacoes: <Receipt />,
  pag: <Receipt />,
  "cargos-pessoal": <Receipt />,
  "orcamento-pessoal-area": <Receipt />,
  "sub-despesa": <Receipt />,
};

export const SideBar = () => {
  const menus = useGeralStore((state) => state.menu);
  return (
    <div className="h-screen w-full max-w-16 bg-zinc-100 border-r flex flex-col shadow-md">
      <div className="w-full py-3 flex items-center justify-center cursor-pointer border-b hover:bg-zinc-300 transition-colors ease-in-out duration-500">
        <ChevronLast />
      </div>
      <div className="flex flex-col gap-2">
        {menus?.map((menu) => {
          return listIcon[menu.Link];
        })}
      </div>
    </div>
  );
};
