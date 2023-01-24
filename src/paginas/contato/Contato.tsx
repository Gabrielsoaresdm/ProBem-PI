// import { Button, Grid, TextField, Typography } from "@material-ui/core";
// import { Box } from "@mui/material";
// import React from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
// import "./Contato.css"

// function Contato(){

//     return( 

//         <>
//         <Grid container direction='row' justifyContent='center' alignItems='center'>
//             <Grid xs={2} className='imagem4'>
//         </Grid>
//         </Grid>
//         <Grid container direction='row' justifyContent='center' alignItems='center'>
//             <Grid alignItems='center' xs={12}>
//                 <Box padding={20}>
//                     <form className="border45"  action="saudeebemestar.gen@gmail.com" method="POST">
//                         <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'>Fale conosco!</Typography>
//                         <TextField label='E-mail' variant='outlined' name='Email' margin='normal' fullWidth />
//                         <TextField label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth />
//                         <TextField label='Assunto' variant='outlined' name='assunto' margin='normal' fullWidth />
//                         <TextField label='Mensagem' variant='outlined' name='mensagem' margin='normal' fullWidth />
//                         <Box marginTop={2} textAlign='center'>
//                             <Button type='submit' variant='contained' color='primary'>
//                                 Enviar
//                             </Button>
//                         </Box>
//                     </form>
//                 </Box>
//             </Grid>
//         </Grid>
//         </>


//     );
// }

// export default Contato;


import { ChangeEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css';
import { Grid, TextField, Typography } from '@material-ui/core';
import { toast } from 'react-toastify';


function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            toast.error('Preencha todos os campos', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
            
           
        }
        else {
            toast.success('Mensagem enviada', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_zxivmkg", "template_a4et9b3", templateParams, "J41_GTw8TuNk2EA_j")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)
              
                setName('')
                setEmail('')
                setMessage('')


            }, (err) => {
                console.log("ERRO: ", err)
            })

    }


    return (
        <>


            <Grid container justifyContent='center' >
                <img className="imgcont" src="logoprobem.png" alt="imagemcontato" />
            </Grid>


            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <form className="form" onSubmit={sendEmail}>
                    <Typography className='typo' variant='h3' component='h3' align='center' >Fale conosco</Typography>

                    <TextField onChange={(e) => setName(e.target.value)}
                        value={name} label='Digite seu nome' variant="outlined" margin='normal' fullWidth />
                
                    <TextField onChange={(e) => setEmail(e.target.value)}
                        value={email} label='Digite seu e-mail' variant="outlined" margin='normal' fullWidth />
                  

                    <TextField onChange={(e) => setMessage(e.target.value)}
                        value={message}  label='Digite sua mensagem...' variant="outlined" margin='normal' fullWidth />
                

                    <input className="button" type="submit" value="Enviar" />
                </form>

            </Grid>
        </>
    );
}

export default Contato;