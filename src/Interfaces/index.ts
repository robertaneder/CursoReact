export interface IDados<T> {
    resultado:      T;
    qtdRegistros:   number;
    mensagem:       string;
    codNotificacao: string;
};

export interface IUsuario {
    Id:             number;
    IdPessoa:       number;
    Login:          string;
    Nome:           string;
    Matricula:      string;
    Cargo:          string;
    Foto:           string;
    IdArea:         number;
    NomeArea:       string;
    NomeDiretoria:  string;
    CodigoSituacao: string;
    Situacao:       string;
    Email:          string;
    Documento:      string;
    TipoGestor:     string;
    TipoUsuario:    number;
}

export interface IInfo {
    NomeSistema:      string;
    LinkSistema:      string;
    ImagemSistema:    string;
    DescricaoSistema: string;
    Versao:           string;
    VersaoFramework:  string;
    CodigoModulo:     string;
    ConexaoTibero:    string;
}

export interface IMenu {
    Id:        number | null;
    Nome:      string;
    Descricao: null | string;
    Link:      string;
    Itens:     IMenu[];
    Ocultar:   boolean;
}