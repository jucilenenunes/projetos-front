import { ProjetoProps } from '../types/ProjetoProps';
import api from './api';

const postProjeto = async (projeto: ProjetoProps) => {
    await api.post('/projetos', projeto);
    return;
}

const putProjeto = async (projeto: ProjetoProps) => {
    await api.put(`/projetos/${projeto.id}`, projeto);
    return;
}

const getProjetos = async () => {
    const {
        data
    } = await api.get('/projetos');
    return data;
}

const deleteProjeto = async (id: number) => {
    await api.delete(`/projetos/${id}`);
    return;
}

export { getProjetos, postProjeto, putProjeto, deleteProjeto }