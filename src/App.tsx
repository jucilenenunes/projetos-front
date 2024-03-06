import { useState, useEffect } from "react";
import  './App.css';
import ListaCadastro from "./components/ListaCadastro";
import { ProjetoProps } from "./types/ProjetoProps";
import FormCadastro from "./components/FormCadastro";
//import FormCadastro from "./components/FormCadastro";
import { getProjetos, postProjeto } from "./services/ProjetosServices"

function App() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([])

  useEffect(() => {
    carregarProjetos();
  },[]) 

  const carregarProjetos = () => {
    getProjetos()
    .then((rs) => {
      const { data } = rs;
      setProjetos([ ...data ]);
      
    })
    .catch((err) => {
      console.log("Deu erro", err)
      setProjetos([]);
    });
  }

  const incluirProjeto = (projeto: ProjetoProps) => {
    postProjeto(projeto)
    .then(() => {
      carregarProjetos();
    })
    .catch((err) => {
      console.log("Deu erro", err)
      setProjetos([]);
    });
  }

  const addProjeto = (newProjeto: ProjetoProps) => {
    incluirProjeto(newProjeto)
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
