import { api } from "../../api"
import { IDados, IInfo, IMenu, IUsuario } from "../../Interfaces";

const BuscarMenu = async () => {
    const response = await api.get<IDados<IMenu[]>>("Menu")
    return response.data.resultado 
};

const BuscarUsuario = async () => {
    const response = await api.get<IDados<IUsuario>>("BuscarUsuario")
    return response.data.resultado 
};

const BuscarInfo = async () => {
    const response = await api.get<IDados<IInfo>>("Info")
    return response.data.resultado 
};

export {BuscarMenu, BuscarUsuario, BuscarInfo};