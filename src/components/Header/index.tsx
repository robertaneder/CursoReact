import { useGeralStore } from "../../store/usuariosStore";
import { Logo } from "../Logo";
import { formatacaoNome } from "../../utils/string";

const Header = () => {
  const usuario = useGeralStore((state) => state.usuario);
  return (
    <header className="w-full h-20 flex gap-3 items-center justify-between bg-azulfuncef border-b-2 border-b-laranjafuncef px-4 py-2">
      <Logo className="h-10" />

      <div className="flex flex-row gap-2 items-center justify-center">
        <span className="text-white">
          {formatacaoNome(usuario?.Nome ?? "")}
        </span>
        <img src={usuario?.Foto} alt="" className="h-10 w-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
