import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { busca } from '../../../service/service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { Button, Container, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import "./Card.css"
import { toast } from 'react-toastify';




interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);



  const [prod, setProd] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
        progress: undefined,
    });
      navigate("/login")

    }
  }, [token])

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



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  return (

    <>
 
            
            {prod.map(prod => (
            
            

            <Grid className='margin10'>
                
                <Card  sx={{ minWidth: 345, maxWidth: 345}}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                   
                        title= {prod.email}
                        
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        width="350"
                        image= {prod.foto}
                        alt= "imagem do objeto"
                    />
                    <CardContent>
                        <Typography variant="h5" color="bold" >
                            {prod.nome}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Categoria: {prod.categoria?.nome}
                            </Typography>
                            <Typography paragraph>
                                Localização: {prod.contato}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                
            </Grid>
                
            ))}
    </>
    
  );
}