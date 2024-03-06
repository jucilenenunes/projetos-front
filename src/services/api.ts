import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Accept-Language': 'pt-BR'
    }
})

export default api;

