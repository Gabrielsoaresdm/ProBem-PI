import { Box, Button, FormHelperText, Grid, Select, Typography } from "@material-ui/core";
import { color } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLocalStorage from "react-use-localstorage";
import ModalProduto from "../../components/postagens/modalPostagem/ModalPostagem";
import { addToken } from "../../store/tokens/actions";
import { TokenState } from "../../store/tokens/tokensReducer";
import './Doacoes.css'

function Doacoes() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    console.log(token)
    // let navigate = useNavigate();
    // const dispatch = useDispatch();

    // function goLogout() {
    //     dispatch(addToken(''));
    //     toast.info('Usuário deslogado', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: false,
    //         theme: "colored",
    //         progress: undefined,
    //     });
    //     navigate('/login')
    // }
    return (

        <>
            <div className="doa">
                <h1 className="doa">Doações:</h1>
            </div>
            <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                    <ModalProduto />
                </Box>
                <Link to="/produtos" className="text-decorator-none">
                    <Button variant="outlined" className='botao'>Ver doações</Button>
                </Link>
            </Box>

            <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar Categoria
                    </Typography>
                </Box>
            </Link>


        </>


    )
}

export default Doacoes;