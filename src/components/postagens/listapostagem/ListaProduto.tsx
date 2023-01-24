import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaProduto.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId } from '../../../service/service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import ModalProduto from '../modalPostagem/ModalPostagem';
import RecipeReviewCard from '../card/Card';

function ListaProduto() {
  const [prod, setProd] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  // useEffect(() => {
  //   if (token == "") {
  //     alert("Você precisa estar logado")
  //     navigate("/login")

  //   }
  // }, [token])

  async function getProd() {
    await busca("/produto", setProd, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProd()

  }, [prod.length])

  return (
    <>
            <div>
                <h1 className='doa'>Doações:</h1>
            </div>
            <Box display="flex" justifyContent="center" >
                <Box marginRight={1}>
                    <ModalProduto />
                </Box>
                {/* <Link to="/produtos" className="text-decorator-none">
                    <Button variant="outlined" className='botao'>Ver doações</Button>
                </Link> */}
            </Box>

            {/* <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography  variant="h6" color="inherit">
                        cadastrar Categoria
                    </Typography>
                </Box>
            </Link> */}
      
    
      {
        
        // prod.map(prod => (
          
        <Grid container className='display' xs={12}>  
          
            
              {< RecipeReviewCard />}
          
        </Grid>       
        // ))
      }
    </>
  )
}

export default ListaProduto;