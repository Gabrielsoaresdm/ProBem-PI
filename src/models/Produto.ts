import Categoria from './Categoria';

interface Produto{
    id: number;
    nome: string;
    email: string;
    contato: string;
    foto: string;

    categoria?: Categoria| null
}

export default Produto;