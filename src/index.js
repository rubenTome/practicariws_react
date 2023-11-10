import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SwitchSelector from "react-switch-selector";
import fondo from "./Assets/Images/fondo_pokedex_2.jpg"

import {ReactiveBase, ReactiveList, MultiList, RangeSlider, ResultCard, DataSearch, SelectedFilters} from "@appbaseio/reactivesearch";

const Buscador = () => {
    return (
        <main style={{background: "lightgray", padding: "2em"}}>
            <ReactiveBase 
                app="pokemon"  
                url="http://localhost:9200"
            >
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '25%',
                  margin: '10px',
                }}>

                  <MultiList
                        componentId="TipoList"
                        dataField="Tipo.keyword"
                        showSearch={false}
                        queryFormat="and"
                        style={{
                            marginBottom: 20
                        }}
                        title="Filtrar por tipo"
                        react={{
                            and: ['SearchNames', 'PesoRange', 'AlturaRange', 'GeneraciónList']
                        }}
                    />
                    <MultiList
                        componentId="GeneraciónList"
                        dataField="Generación.keyword"
                        showSearch={false}
                        queryFormat="or"
                        style={{
                            marginBottom: 20
                        }}
                        title="Filtrar por generación"
                        react={{
                            and: ['SearchNames', 'PesoRange', 'AlturaRange', 'TipoList']
                        }}
                    />

                    <RangeSlider
                    componentId="PesoRange"
                    dataField="Peso(kg)"
                    title="Filtrar por peso en kg"
                    showFilter={true}
                    rangeLabels={{
                      "start": "0",
                      "end": "100"
                    }}
                    react={{
                      and: ['SearchNames', 'AlturaRange', 'TipoList', 'GeneraciónList']
                    }}
                    range={{
                      start: 0,
                      end: 100,
                    }}
                  />

                  <RangeSlider
                    componentId="AlturaRange"
                    dataField="Altura(m)"
                    title="Filtrar por altura en m"
                    showFilter={true}
                    rangeLabels={{
                      "start": "0",
                      "end": "20"
                    }}
                    react={{
                      and: ['SearchNames', 'PesoRange', 'TipoList', 'GeneraciónList']
                    }}
                    range={{
                      start: 0,
                      end: 20,
                    }}
                  />

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '66%', marginTop: '2%', marginLeft: '10%'}}>
                    <DataSearch
                    componentId="SearchNames"
                    className="SearchBar"
                    dataField={['Nombre']}
                    fuzziness={1}
                    showClear={true}
                    showFilter={true}
                    autosuggest={true}
                    placeholder="Buscar por nombre de pokemon"
                    />
                    <SelectedFilters/>

                    <ReactiveList
                            componentId="SearchResult"
                            dataField="_score"
                            size={15}
                            pagination={true}
                            paginationAt={"both"}
                            loader="Buscando Pokemon..."
                            react={{
                                and: ['SearchNames', 'PesoRange', 'AlturaRange', 'TipoList', 'GeneraciónList'],
                            }}
                            sortOptions={[
                              {
                                dataField: "Nombre.keyword",
                                sortBy: "asc",
                                label: "Ordenar por nombre \u00A0",
                              },
                              {
                                  dataField: "Peso(kg)",
                                  sortBy: "asc",
                                  label: "Ordenar por peso (menor a mayor) \u00A0",
                              },
                              {
                                  dataField: "Peso(kg)",
                                  sortBy: "desc",
                                  label: "Ordenar por peso (mayor a menor) \u00A0",
                              },
                              {
                                  dataField: "Altura(m)",
                                  sortBy: "asc",
                                  label: "Ordenar por altura (menor a mayor) \u00A0",
                              },
                              {
                                dataField: "Altura(m)",
                                sortBy: "desc",
                                label: "Ordenar por altura (mayor a menor) \u00A0",
                              },
                          ]}
                            render={({data}) => (
                              <ReactiveList.ResultCardsWrapper>
                                {data.map((item) => (
                                  <ResultCard key={item._id}>
                                    <ResultCard.Image className='ImagenPokemon' src={item.Imagen} />
                                    <ResultCard.Title
                                      dangerouslySetInnerHTML={{__html: item.Nombre}}
                                    />
                                    <ResultCard.Description>
                                      <p>Generación: {item.Generación}</p>
                                      <p>Tipo: {item.Tipo.map((tipo) => (<p>&emsp;{tipo}</p>))}</p>
                                      <p>Peso: {item['Peso(kg)']} kg.</p>
                                      <p>Altura: {item['Altura(m)']} m.</p>
                                    </ResultCard.Description>
                                  </ResultCard>
                                ))}
                              </ReactiveList.ResultCardsWrapper>
                            )}
                        />
              </div>
              </div>





                

            </ReactiveBase>
        </main>
        
        
    )
}

ReactDOM.render(
  <Buscador/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
