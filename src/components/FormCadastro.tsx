import { useState, useEffect } from "react";
import { ProjetoProps } from "../types/ProjetoProps";

interface FormCadastroProps {
    projeto?: ProjetoProps,
    saveProjeto: (projeto: ProjetoProps) => void
}

const FormCadastro = ({ projeto, saveProjeto }: FormCadastroProps) => {
    const [editable, setEditable] = useState<ProjetoProps>({
        id: 0,
        titulo: "",
        descricao: "",
        responsavel: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!editable.titulo  || !editable.descricao || !editable.responsavel ) return; 
        saveProjeto(editable);
        setEditable({
            id: 0,
            titulo: "",
            descricao: "",
            responsavel: ""
        });
    }

    useEffect(() => {
        if (!!projeto) setEditable(projeto);
    }, [projeto])

  return (
    <div>
        <h2 className="titulo-cad">{projeto?.id ? "Alterar" : "Cadastrar"} Projeto</h2>
        <div className="form-cadastro">
        <form  onSubmit={handleSubmit}>
            <label>Título: </label>
            <input 
                type="text" placeholder="Digite o título do projeto" 
                value={editable?.titulo}
                onChange={(e) => setEditable({ ...editable, titulo: e.target.value }) }  
            />
            <label>Descrição: </label>
            <textarea 
                placeholder="Descreva sobre o projeto"
                value={editable?.descricao}
                onChange={(e) => setEditable({ ...editable, descricao: e.target.value }) }
            >
                </textarea>
            <label>Responsável: </label>
            <input 
                type="text" placeholder="Responsável" 
                value={editable?.responsavel}
                onChange={(e) => setEditable({ ...editable, responsavel: e.target.value }) }
            />
            <div  className="cad">
              <button>{projeto && projeto?.id && projeto?.id > 0 ? "Alterar" : "Cadastrar"}</button>
            </div>
       
        </form>
        </div>
        
    </div>
  )
}

export default FormCadastro