import { React } from "react"
import SwitchSelector from "react-switch-selector" //version 1.2.1
import Grid from '@mui/material/Grid';

const Buscador = () => {
    const options = [
        {
            label: "Nombre",
            value: "nombre",
            selectedBackgroundColor: "red",
            selectedFontColor: "black"
        },
        {
            label: "Tipo",
            value: "tipo",
            selectedBackgroundColor: "white",
            selectedFontColor: "black"
        },
        {
            label: "Rango",
            value: "rango",
            selectedBackgroundColor: "greenyellow",
            selectedFontColor: "black"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    const initialSelectedIndex = options.findIndex(({value}) => value === "VALOR");

    const urlSplit = window.location.href.split("?")
    var resultado = "";
    if (urlSplit.length > 1) {
        const nombre = urlSplit[1].split("=")[1]
        fetch('http://localhost:9200/pokemon/_search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"query":{"bool":{"must":[{"match":{"Nombre":nombre}}],"must_not":[],"should":[]}},"from":0,"size":1000,"sort":[],"aggs":{}})
        })
        .then(response => response.json())
        .then(response => {
            resultado = JSON.stringify(response)
            console.log(resultado)
        })
    }

    return (
        <main 
            style={{background:"blue"}}>
            <div 
                style={{padding:"2.5em", height:"3em", background:"green"}}>
                <SwitchSelector
                        onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#353b48"}
                        fontColor={"#f5f6fa"}/>
            </div>
            <div 
                style={{background:"red"}}>
                <div 
                style={{padding:"23.3em", background:"yellow"}}>
                    {/*NUEVO COMPONENTE*/}
                    <Grid 
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={8}>
                            <form id="formulario">
                                <label>
                                    Nombre del pokémon:
                                </label><br/>
                                <input type="text" id="nombre" name="nombre"/>
                                <input type="submit" value="buscar"/>
                            </form>
                        </Grid>
                        <Grid item xs={8}><p id="resultado"></p></Grid>{/*TODO COMO MOSTRAR RDOS*/}
                    </Grid>
                    {/*NUEVO COMPONENTE*/}
                </div>
            </div>
        </main>
    )
}

export default Buscador