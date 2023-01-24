
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {Link, useNavigate, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import { useSelector } from 'react-redux';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../service/service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { ChangeEvent, useEffect, useState } from "react";

function CadastroCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    const [categoria, setCategorias] = useState<Categoria>({
        id: 0,
        nome: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`categoria/${id}`, setCategorias, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategorias({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria" + JSON.stringify(categoria))
    
            if (id !== undefined) {
                console.log(categoria)
                put('/categoria', categoria, setCategorias, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria atualizada com sucesso');
            } else {
                post('/categoria', categoria, setCategorias, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrada com sucesso');
            }
            back()
    
        }
    
        function back() {
            navigate('/categoria')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
               
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
                
            </form>
        </Container>
    )
}

export default CadastroCategoria;