export const formatacaoNome = (nome: string) => {
  const splitname = nome.split(" ");
  return splitname[0] + " " + splitname[splitname.length - 1];
};
