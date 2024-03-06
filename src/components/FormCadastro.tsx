import { useState } from "react";

const FormCadastro = () => {
    const [value, setValue] = useState("");
    const [descricao, setDescricao] = useState("");
    const [responsavel, setResponsavel] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value  || !descricao || !responsavel ) return; 
        console.log(value, descricao, responsavel)
    }

    const handleDescricao = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value  || !descricao || !responsavel ) return; 
        console.log(value, descricao, responsavel)
    }

  return (
    <div className="form-cadastro">
        <h2>Cadastrar novo Projeto</h2>
        <form onSubmit={handleSubmit}>
            <label>Título: </label>
            <input 
                type="text" placeholder="Digite o título do projeto" 
                value={value}
                onChange={(e) => setValue(e.target.value) }  
            />
            <label>Descrição: </label>
            <textarea 
                placeholder="Descreva sobre o projeto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.descricao) }
            >
                
                </textarea>
            <label>Responsável: </label>
            <input 
                type="text" placeholder="Responsável" 
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.responsavel) }
            />
        <button>Cadastrar</button>
        </form>
    </div>
  )
}

export default FormCadastro