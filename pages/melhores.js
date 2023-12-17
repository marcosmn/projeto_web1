import Link from 'next/link'

export default function Melhores() {
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
        top10: {
            display: "flex",
            justifyContent: "center"
        },
        titulo: {
            display: "flex",
            justifyContent: "center",
            color: "black"
        },
        coluna: {
            display: "grid",
            width: "50%",
            justifyItems: "center"
        },
        acao: {
            backgroundColor: "rgb(3, 3, 26)",
            border: "none",
            color: "white",
            padding: "12px 16px",
            fontSize: "16px",
            margin: "10px",
            width: "80%"
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
        },
        link: {
            textDecoration: "none",
            color: "white"
        }
    }

    const acessarAcao = (acao) => {
        console.log("Acessando ação: " + acao);
    }
    /*
    useEffect(() => {
        app.get().then((resp) => {
            console.log(resp);
        })
    }, []);
    */
    
    return (
        <>
            <header style={styles.header}>
                <h1>Top 10</h1>
            </header>

            <main style={styles.main}>
                <div style={styles.titulo}>
                    <h2>Lista de ações</h2>
                </div>

                <div style={styles.top10}>
                    <div style={styles.coluna}>
                        <button type="button" style={styles.acao} onclick={acessarAcao(1)}><i class="fa fa-home"></i> Exemplo 1 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(3)}><i class="fa fa-home"></i> Exemplo 2 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(5)}><i class="fa fa-home"></i> Exemplo 3 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(7)}><i class="fa fa-home"></i> Exemplo 4 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(9)}><i class="fa fa-home"></i> Exemplo 5 </button>
                    </div>

                    <div style={styles.coluna}>
                        <button type="button" style={styles.acao} onclick={acessarAcao(2)}><i class="fa fa-home"></i> Exemplo 6 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(4)}><i class="fa fa-home"></i> Exemplo 7 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(6)}><i class="fa fa-home"></i> Exemplo 8 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(8)}><i class="fa fa-home"></i> Exemplo 9 </button>
                        <button type="button" style={styles.acao} onclick={acessarAcao(10)}><i class="fa fa-home"></i> Exemplo 10 </button>
                    </div>
                </div>

                <div>
                    <button type="button" style={styles.voltar}><Link href="/" style={styles.link}>Voltar </Link></button>
                </div>
            </main>
            
            <footer style={styles.footer}>
                <strong>Assistência virtual para bolsa de valores</strong>
            </footer>
        </>
    )
}