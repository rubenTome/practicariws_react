import { React } from "react"

const BuscadorNombre = () => {
    const urlSplit = window.location.href.split("?")
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
            if (response.hits.hits[0] !== undefined) {
                const datosPokemon = response.hits.hits[0]._source
                document.getElementById("nombreP").innerHTML = "<div>Nombre: " + datosPokemon.Nombre + "</div>"
                document.getElementById("generacion").innerHTML = "<div>Generación: " + datosPokemon.Generación + "</div>"
                document.getElementById("tipo").innerHTML =  "<div>Tipo: " + datosPokemon.Tipo + "</div>"
                document.getElementById("peso").innerHTML =  "<div>Peso: " +datosPokemon["Peso(kg)"] + " kg</div>"
                document.getElementById("altura").innerHTML =  "<div>Altura: " +datosPokemon["Altura(m)"] + " m</div>"
                document.getElementById("sexoM").innerHTML =  "<div>Probabilidad macho: " + datosPokemon.ProbMacho + "%</div>"
                document.getElementById("sexoH").innerHTML =  "<div>Probabilidad hembra: " + datosPokemon.ProbHembra + "%</div>"
                document.getElementById("imagen").insertAdjacentHTML("beforebegin", "<a href=" + datosPokemon.Imagen + " id=\"linkImagen\">" + "</a>")
                document.getElementById("linkImagen").innerHTML = "Imagen"
                console.log(JSON.stringify(response))
            }
        })
    }

    return(
        <table style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <tbody style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <tr>
                    <td>
                        <form id="formulario">
                            <input type="text" id="nombre" name="nombre" placeholder="nombre pokémon"/>
                            <input type="submit" value="buscar"/>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td id="nombreP"/>
                </tr>
                <tr>
                    <td id="generacion"/>
                </tr>
                <tr>
                    <td id="tipo"/>
                </tr>
                <tr>
                    <td id="peso"/>
                </tr>
                <tr>
                    <td id="altura"/>
                </tr>
                <tr>
                    <td id="sexoM"/>
                </tr>
                <tr>
                    <td id="sexoH"/>
                </tr>
                <tr>
                    <td id="imagen"/>
                </tr>
            </tbody>
        </table>
    )
}

export default BuscadorNombre