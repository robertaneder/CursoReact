import {
  ChevronLast,
  Receipt,
  FileText,
  Coins,
  HandCoins,
  Contact,
  Handshake,
  CheckCheck,
} from "lucide-react";
import { useGeralStore } from "../../store/usuariosStore";
import React, { ReactNode } from "react";
import { Accordion } from "../Accordion";
interface IlistIcon {
  [key: string]: ReactNode;
}
const listIcon: IlistIcon = {
  fdo: <Coins />,
  "administracao-fdo": <Receipt />,
  rel: <FileText />,
  autorizacoes: <CheckCheck />,
  pag: <HandCoins />,
  "cargos-pessoal": <Contact />,
  "orcamento-pessoal-area": <Handshake />,
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
        {menus?.map((menu) => (
          <Accordion key={menu.Id} title={menu.Nome} icon={listIcon[menu.Link]}>
            {menu.Itens.map(
              (submenu) =>
                submenu.Itens.length > 0 && (
                  <Accordion
                    key={submenu.Id}
                    title={submenu.Nome}
                    icon={listIcon[submenu.Link]}
                  >
                    <h1>TO NA SEGUNDA CAMADA</h1>
                  </Accordion>
                )
            )}
          </Accordion>
        ))}
      </div>
    </div>
  );
};
