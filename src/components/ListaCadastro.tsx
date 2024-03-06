import { ProjetoProps } from "../types/ProjetoProps";

interface ListaCadastroProps {
  projetos: ProjetoProps[]
}

const ListaCadastro = ({ projetos }: ListaCadastroProps) => {
  
  console.log("projetos: ", projetos)
  return projetos.map((projeto) => {
    return (
      <div>
        <h2>{projeto.titulo}</h2>
        <p>{projeto.descricao}</p>
        <button className="remove">Excluir</button>
        <button className="edit">Editar</button>
      </div>
      
    )
  });
};

export default ListaCadastro;


