import React from "react";
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

import oak from "./../../Assets/Images/oak.png"
import fondo from "./../../Assets/Images/fondo_pokedex_2.jpg"
import "./Inicio.css"

const Inicio = () => {
    const navigate = useNavigate()

    const cambiarPag = () => {
        navigate("/buscador")
    }

    return (
        <main style={{backgroundImage: `url(${fondo})`}}>
            <Grid container>
                <Grid item xs={5} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <button className="botonRedondo" onClick={cambiarPag}>¡ COMIENZA A BUSCAR !</button> 
                </Grid>
                <Grid item xs={7}>
                    {/*15.46em totales de padding vertical para que el fondo ocupe toda la pantalla*/}
                    <img style={{paddingTop: "12%", paddingBottom:"12%"}} src={oak} alt="OAK"/>
                </Grid>
            </Grid>
        </main>
    );
};

export default Inicio;