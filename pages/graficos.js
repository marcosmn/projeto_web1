import React from "react";
import { Line } from "react-chartjs-2";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Graficos() {
    const styles = {
        header: {
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            textAlign: "center"
        },
        footer: {
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            textAlign: "center",
            position: "fixed",
            width: "100%",
            bottom: "0"
        },
        main: {
            padding: "10px",
        },
        h1: {
            color: "white"
        },
        pesquisa: {
            backgroundColor: "rgb(3, 3, 26)",
            border: "none",
            color: "white",
            padding: "10px",
            fontSize: "16px",
            margin: "10px",
            width: "fit-content"
        },
        grafico: {
            display: "flex",
            justifyContent: "center"
        },
        indices: {
            padding: "10px",
            margin: "10px",
            display: "grid"
        },
        indice: {
            backgroundColor: "rgb(3, 3, 26)",
            border: "none",
            color: "white",
            padding: "12px 16px",
            fontSize: "16px",
            margin: "10px"
        },
        grafico: {
            display: "flex",
            justifyContent: "center"
        },
        voltar: {
            display: "flex",
            margin: "auto",
            padding: "10px",
            width: "100px",
            height: "50px",
            textAlign: "center",
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            marginTop: "30px",
            marginBottom: "30px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
        }
    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    const [chartData, setChartData] = useState({
        labels: labels,
        datasets: [{
            label: 'Indice 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    });

    const mudarIndice = (indice) => {
        console.log("Mudando para o indice: " + indice);
    }

    return (
        <>
            <header style={styles.header}>
                <h1>Gráficos</h1>
            </header>

            <main style={styles.main}>
                <div>
                    <form id="buscar" action="/graficos.html">
                        <input style={styles.pesquisa} type="text" placeholder="Buscar..."/>
                        <button style={styles.pesquisa} type="submit"><FaSearch /></button>
                    </form>
                </div>

                <div style={styles.grafico}>
                    <div className="chart-container">
                        <Line
                            data={chartData}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Indice 1"
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            }}
                        />
                    </div>

                    <div style={styles.indices}>
                        <button type="button" style={styles.indice} onclick="mudarIndice(1)"><i class="fa fa-tag"></i> Indice 1</button>
                        <button type="button" style={styles.indice} onclick="mudarIndice(2)"><i class="fa fa-tag"></i> Indice 2</button>
                        <button type="button" style={styles.indice} onclick="mudarIndice(3)"><i class="fa fa-tag"></i> Indice 3</button>
                        <button type="button" style={styles.indice} onclick="mudarIndice(4)"><i class="fa fa-tag"></i> Indice 4</button>
                        <button type="button" style={styles.indice} onclick="mudarIndice(5)"><i class="fa fa-tag"></i> Indice 5</button>
                    </div>
                </div>
                
                <div>
                    <button type="button" style={styles.voltar} onclick="voltar()">Voltar</button>
                </div>
            </main>
            
            <footer style={styles.footer}>
                <strong>Assistência virtual para bolsa de valores</strong>
            </footer>
        </>
    )
}