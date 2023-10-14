import React from "react";
import {Button} from "react-native"
import Grid from '@mui/material/Grid';


const Inicio = ({url, fondo}) => {
    return (
        <main style={{backgroundImage: `url(${fondo})`}}>
            <Grid container>
                <Grid item xs={5} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button title="¡Comienza a buscar!" color="#a7b9d3"/>
                </Grid>
                <Grid item xs={7}>
                    {/*15.46em totales de padding vertical para que el fondo ocupe toda la pantalla*/}
                    <img style={{paddingTop: "7.73em", paddingBottom:"7.73em", paddingRight: "44em"}} src={url} alt="OAK"/>
                </Grid>
            </Grid>
        </main>
    );
};

export default Inicio;