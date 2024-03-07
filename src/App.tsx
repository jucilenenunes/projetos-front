import { useState, useEffect } from "react";
import { DialogModal, useModal } from "react-dialog-confirm";
import ListaCadastro from "./components/ListaCadastro";
import { ProjetoProps } from "./types/ProjetoProps";
import FormCadastro from "./components/FormCadastro";
import {
  deleteProjeto,
  getProjetos,
  postProjeto,
  putProjeto,
} from "./services/ProjetosServices";
import "./App.css";

function App() {
  const [projetos, setProjetos] = useState<ProjetoProps[]>([]);
  const [projeto, setProjeto] = useState<ProjetoProps>();
  const { openModal, closeModal  } = useModal();

  useEffect(() => {
    carregarProjetos();
    setProjeto(undefined);
  }, []);

  const confirmDelete = (id: number) => {
    openModal(
      <DialogModal
        icon="error"
        title="Confirmação de Exclusão"
        description="Tem certeza que deseja excluir este projeto?"
        hasCancel={true}
        confirm="Sim. Desejo excluir."
        onConfirm={() => { delProjeto(id); }}
        cancel="Não"
      />
    );
  };

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
        closeModal();
      })
      .catch(() => {
        setProjetos([]);
        closeModal();
      });
  };

  const editProjeto = (projeto: ProjetoProps) => {
    setProjeto(projeto);
  }

  return (
    <div className="app">
      <h1>Lista de Projetos</h1>
      <div className="cadastro-projetos">
        <ListaCadastro projetos={projetos} deleteProjeto={confirmDelete} editProjeto={editProjeto} />
      </div>
      <FormCadastro projeto={projeto} saveProjeto={saveProjeto} />
    </div>
  );
}

export default App;
