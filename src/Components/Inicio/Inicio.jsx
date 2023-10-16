import React from "react";
import Grid from '@mui/material/Grid';

const botonRedondo = {
    background:"white",
    marginLeft: "12.25em",
    marginTop: "1.5em",
    width: "12.5em",
    height:"12.5em",
    fontSize: "1.25em",
    borderRadius: "50%"
}

const Inicio = ({url, fondo}) => {
    return (
        <main style={{backgroundImage: `url(${fondo})`}}>
            <Grid container>
                <Grid item xs={5} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <button style={botonRedondo}>! COMIENZA A BUSCAR ¡</button>
                </Grid>
                <Grid item xs={7}>
                    {/*15.46em totales de padding vertical para que el fondo ocupe toda la pantalla*/}
                    <img style={{paddingTop: "12%", paddingBottom:"12%"}} src={url} alt="OAK"/>
                </Grid>
            </Grid>
        </main>
    );
};

export default Inicio;