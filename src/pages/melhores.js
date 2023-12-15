import { useEffect } from "react";
import app from "../../app"

export default function Melhores() {
    const acessarAcao = (acao) => {
        console.log("Acessando ação: " + acao);
    }
    
    useEffect(() => {
        app.get().then((resp) => {
            console.log(resp);
        })
    }, []);
    
    return (
        <div>
            <header>
                <h1>Top 10</h1>
            </header>

            <main>
                <div class="titulo">
                    <h2>Lista de ações</h2>
                </div>

                <div class="top10">
                    <div class="coluna">
                        <button type="button" class="acao" onclick={acessarAcao(1)}><i class="fa fa-home"></i> Exemplo 1 </button>
                        <button type="button" class="acao" onclick={acessarAcao(3)}><i class="fa fa-home"></i> Exemplo 2 </button>
                        <button type="button" class="acao" onclick={acessarAcao(5)}><i class="fa fa-home"></i> Exemplo 3 </button>
                        <button type="button" class="acao" onclick={acessarAcao(7)}><i class="fa fa-home"></i> Exemplo 4 </button>
                        <button type="button" class="acao" onclick={acessarAcao(9)}><i class="fa fa-home"></i> Exemplo 5 </button>
                    </div>

                    <div class="coluna">
                        <button type="button" class="acao" onclick={acessarAcao(2)}><i class="fa fa-home"></i> Exemplo 6 </button>
                        <button type="button" class="acao" onclick={acessarAcao(4)}><i class="fa fa-home"></i> Exemplo 7 </button>
                        <button type="button" class="acao" onclick={acessarAcao(6)}><i class="fa fa-home"></i> Exemplo 8 </button>
                        <button type="button" class="acao" onclick={acessarAcao(8)}><i class="fa fa-home"></i> Exemplo 9 </button>
                        <button type="button" class="acao" onclick={acessarAcao(10)}><i class="fa fa-home"></i> Exemplo 10 </button>
                    </div>
                </div>

                <div class="voltar">
                    <button type="button" class="voltar" onclick="voltar()">Voltar</button>
                </div>
            </main>
            
            <footer>
                <strong>Assistência virtual para bolsa de valores</strong>
            </footer>
        </div>
    )
}