import { useState } from "react";
import { ProjetoProps } from "../types/ProjetoProps";

interface FormCadastroProps {
    addProjeto: (newProjeto: ProjetoProps) => void;
}

const FormCadastro = ({ addProjeto }: FormCadastroProps) => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState<string>("");
    const [responsavel, setResponsavel] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!titulo  || !descricao || !responsavel ) return; 
        addProjeto({
            id: Math.floor(Math.random() * 10000),
            titulo,
            descricao,
            responsavel,
        });
        
        setTitulo("")
        setDescricao("")
        setResponsavel("")
        console.log(titulo, descricao, responsavel)
    }

   

  return (
    <div className="form-cadastro">
        <h2>Cadastrar novo Projeto</h2>
        <form onSubmit={handleSubmit}>
            <label>Título: </label>
            <input 
                type="text" placeholder="Digite o título do projeto" 
                value={titulo}
                onChange={(e) => setTitulo(e.target.value) }  
            />
            <label>Descrição: </label>
            <textarea 
                placeholder="Descreva sobre o projeto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value) }
            >
                
                </textarea>
            <label>Responsável: </label>
            <input 
                type="text" placeholder="Responsável" 
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value) }
            />
        <button>Cadastrar</button>
        </form>
    </div>
  )
}

export default FormCadastro