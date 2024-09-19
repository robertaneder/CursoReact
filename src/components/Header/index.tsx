import { Link } from "react-router-dom";

 const Header = () => {
    return (
      <header className="w-full h-20 flex gap-3 items-center justify-center">
        <Link className="border px-4 py-2 bg-zinc-300 rounded-2xl hover:bg-zinc-400 hover:cursor-pointer transition-colors ease-in-out duration-700" to="/">
          home
        </Link>
        <Link className="border px-4 py-2 bg-zinc-300 rounded-2xl hover:bg-zinc-400 hover:cursor-pointer transition-colors ease-in-out duration-700" to="/Info">
          Info
        </Link>        
      </header>
    )
};

export default Header;





