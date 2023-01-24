import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./Sobre.css"


function Sobre(){
    return(
        <>
             <Grid container direction="row">
                <Grid item xs={6}>
                    <div className="h1">
                    <h1>O ProBem</h1>
                    </div>
                    <div>
                    <p className="p">Enxergando a dificuldade ao acesso à itens hospitalares duráveis, criamos o ProBem; uma plataforma capaz viabilizar democraticamente esses itens, através do que consideramos algo muito importante: o afeto de pessoas!</p>
                    </div>
                    
                </Grid>
                <Grid item xs={6} >
                <img className="img1" src="b7df6bde4bd1dda51d3efff430cf4f4f.jpg" alt=""/>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;