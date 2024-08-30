import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLivro, getLivroById, updateLivro } from '../services/api';
interface Livro {
    titulo: string;
    autor: string;
    genero: string;
    AnoPublicacao: number;
    NumeroPaginas: number;
}
function LivroForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [Livro, setLivro] = useState<Livro>({
        titulo: '',
        autor: '',
        genero: '',
        AnoPublicacao: 0,
        NumeroPaginas: 0,
        /*
        titulo: string;
        autor: string;
        AnoPublicacao: number;
        NumeroPaginas: number;
        */
    });
    useEffect(() => {
        if (id) {
            loadLivro();
        }
    }, [id]);
    const loadLivro = async () => {
        try {
            const response = await getLivroById(id as string);
            setLivro(response.data);
        } catch (error) {
            console.error("Error loading Livro data", error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLivro({
            ...Livro,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateLivro(id, Livro);
            } else {
                await createLivro(Livro);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving Livro", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>titulo</label>
                <input
                    type="text"
                    name="titulo"
                    value={Livro.titulo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>autor</label>
                <input
                    type="text"
                    name="autor"
                    value={Livro.autor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>genero</label>
                <input
                    type="text"
                    name="genero"
                    value={Livro.genero}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>AnoPublicacao</label>
                <input
                    type="number"
                    name="AnoPublicacao"
                    value={Livro.AnoPublicacao}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>NumeroPaginas</label>
                <input
                    type="number"
                    name="NumeroPaginas"
                    value={Livro.NumeroPaginas}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}
export default LivroForm;