import { React } from "react"
import SwitchSelector from "react-switch-selector" //version 1.2.1
import BuscadorNombre from "../BuscadorNombre";

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

    const initialSelectedIndex = options.findIndex(({value}) => value === "nombre");

    return (
        <main 
            style={{background:"yellow"}}>
            <div style={{padding:"2.5em", height:"3em", background:"green"}}>
                <SwitchSelector
                        onChange={onChange}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#353b48"}
                        fontColor={"#f5f6fa"}/>
            </div>
            <BuscadorNombre/>
        </main>
    )
}

export default Buscador