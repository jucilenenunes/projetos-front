import { ProjetoProps } from '../types/ProjetoProps';
import api from './api';

const postProjeto = async (projeto: ProjetoProps) => {
    await api.post('/projetos', projeto);
    return;
}

const getProjetos = async () => {
    const {
        data
    } = await api.get('/projetos');
    return data;
}

export { getProjetos, postProjeto }