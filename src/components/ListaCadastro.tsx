import { ProjetoProps } from "../types/ProjetoProps";

interface ListaCadastroProps {
  projetos: ProjetoProps[],
  deleteProjeto: (id: number) => void
  editProjeto: (projeto: ProjetoProps) => void
}


const ListaCadastro = ({ projetos, deleteProjeto, editProjeto }: ListaCadastroProps) => {
  return projetos.map((projeto) => {
    return (
      <div>
        <h2>{projeto.titulo}</h2>
        <p>{projeto.descricao}</p>
        <p>{projeto.responsavel}</p>
        <button className="remove"  onClick={() => deleteProjeto(projeto.id!)}>Excluir</button>
        <button className="edit" onClick={()=> editProjeto(projeto)}>Editar</button>
      </div>
      
    )
  });
};

export default ListaCadastro;


