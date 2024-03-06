import { useState, useEffect } from "react";
import "./App.css";
import ListaCadastro from "./components/ListaCadastro";
import { ProjetoProps } from "./types/ProjetoProps";
import FormCadastro from "./components/FormCadastro";
//import FormCadastro from "./components/FormCadastro";
import {
  deleteProjeto,
  getProjetos,
  postProjeto,
  putProjeto,
} from "./services/ProjetosServices";

function App() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [projeto, setProjeto] = useState<ProjetoProps>();

  useEffect(() => {
    carregarProjetos();
    setProjeto(undefined);
  }, []);

  const carregarProjetos = () => {
    getProjetos()
      .then((rs) => {
        const { data } = rs;
        setProjetos([...data]);
      })
      .catch(() => {
        setProjetos([]);
        setProjeto(undefined);
      });
  };

  const incluirProjeto = (projeto: ProjetoProps) => {
    postProjeto(projeto)
      .then(() => {
        carregarProjetos();
      })
      .catch(() => {
        setProjetos([]);
      });
  };

  const alterarProjeto = (projeto: ProjetoProps) => {
    putProjeto(projeto)
      .then(() => {
        carregarProjetos();
      })
      .catch(() => {
        setProjetos([]);
      });
  };

  const saveProjeto = (projeto: ProjetoProps) => {
    if (projeto.id && projeto.id > 0) {
      alterarProjeto(projeto);
    } else {
      incluirProjeto(projeto);
    }
    setProjeto(undefined);
  };

  const delProjeto = (id: number) => {
    deleteProjeto(id)
      .then(() => {
        carregarProjetos();
      })
      .catch((err) => {
        console.log("Deu erro", err);
        setProjetos([]);
      });
  };

  const editProjeto = (projeto: ProjetoProps) => {
    setProjeto(projeto);
  }

  return (
    <div className="app">
      <h1>Lista de Projetos</h1>
      <div className="cadastro-projetos">
        <ListaCadastro projetos={projetos} deleteProjeto={delProjeto} editProjeto={editProjeto} />
      </div>
      <FormCadastro projeto={projeto} saveProjeto={saveProjeto} />
    </div>
  );
}

export default App;
