import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001'
});
export const getLivros = () => api.get('/livros');
export const getLivroById = (id: string) => api.get(`/livros/${id}`);
export const createLivro = (Livro: any) => api.post('/livros', Livro);
export const updateLivro = (id: string, Livro: any) => api.put(`/livros/${id}`, Livro);
export const deleteLivro = (id: string) => api.delete(`/livros/${id}`)