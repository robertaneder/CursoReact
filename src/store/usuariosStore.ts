import { create } from "zustand";
import { IMenu, IUsuario } from "../Interfaces";
import { persist } from "zustand/middleware";
import { BuscarMenu, BuscarUsuario } from "../services/geral";

interface IGeralStoreProps {
  fetch(): void;
  usuario: IUsuario | null;
  menu: IMenu[] | null;
}

export const useGeralStore = create<IGeralStoreProps>()(
  persist(
    (set, _get) => ({
      usuario: null,
      menu: null,
      fetch: async () => {
        const usuario = await BuscarUsuario();
        const menu = await BuscarMenu();
        set({
          usuario,
          menu,
        });
      },
    }),
    {
      name: "UsuarioLogado",
    }
  )
);
