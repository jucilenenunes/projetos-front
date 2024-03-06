import { useState } from "react";
import  './App.css';
import ListaCadastro from "./components/ListaCadastro";
import { ProjetoProps } from "./types/ProjetoProps";
import FormCadastro from "./components/FormCadastro";
//import FormCadastro from "./components/FormCadastro";

function App() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([
    {
      "id": 1,
      "titulo": "Backend",
      "descricao": "Projeto criado em Node + Nest.",
      "responsavel": "Ju Nunes"
  },
  {
      "id": 2,
      "titulo": "Projeto 1",
      "descricao": "Projeto 1 é sobre desenvolvimento básico.",
      "responsavel": "Jucilene"
  },
  {
      "id": 3,
      "titulo": "Projeto teste",
      "descricao": "Projeto teste teste teste.",
      "responsavel": "Jucilene"
  }
  ])

  const addProjeto = (newProjeto: ProjetoProps): ProjetoProps[] => {
    const newProjetos = [...projetos, {
      id: Math.floor(Math.random() * 10000),
      titulo: newProjeto.titulo,
      descricao: newProjeto.descricao,
      responsavel: newProjeto.responsavel
    }]

    setProjetos(newProjetos)
  }

  return (
    <div className="app">
      <h1>Lista de Projetos</h1>
      <div className="cadastro-projetos">
        <ListaCadastro projetos={projetos} />
      </div>
      <FormCadastro key={projetos.id} addProjeto={addProjeto}/>
    </div>
  )
}

export default App
