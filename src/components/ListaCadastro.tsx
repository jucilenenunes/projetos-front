import { ProjetoProps } from "../types/ProjetoProps";

interface ListaCadastroProps {
  projetos: ProjetoProps[],
  deleteProjeto: (id: number) => void
  editProjeto: (projeto: ProjetoProps) => void
}

const ListaCadastro = ({ projetos, deleteProjeto, editProjeto }: ListaCadastroProps) => {
  return projetos.map((projeto) => {
    return (
      <div >
        <h2>{projeto.titulo}</h2>
        <div className="form-cadastro">
          <p>{projeto.descricao}</p>
          
          <div>
            <button className="remove"  onClick={() => deleteProjeto(projeto.id!)}>Excluir</button>
            <button className="edit" onClick={()=> editProjeto(projeto)}>Editar</button>
          </div>
          
        </div>
        <div className="resp">
          <p><strong>Responsável: </strong>{projeto.responsavel}</p>
          </div>
      </div>
    )
  });
};

export default ListaCadastro;


