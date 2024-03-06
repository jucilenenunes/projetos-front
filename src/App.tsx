import { useState } from "react";
import  './App.css';
import ListaCadastro from "./components/ListaCadastro";
import { ProjetoProps } from "./types/ProjetoProps";
import FormCadastro from "./components/FormCadastro";
//import FormCadastro from "./components/FormCadastro";

function App() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([
   
  ])

  const addProjeto = (newProjeto: ProjetoProps) => {
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
      <FormCadastro addProjeto={addProjeto}/>
    </div>
  )
}

export default App
