import Link from 'next/link'

import Melhores from "./melhores"

export default function Index() {
    const styles = {
      header: {
        backgroundColor: "rgb(3, 3, 26)",
        color: "white", 
        textAlign: "center",
        width: "100%",
        paddingTop: "2px",
        paddingBottom: "1px"
      },
      main: {
        backgroundColor: "aliceblue",
        maxWidth: "500px",
        width: "100%",
        padding: "100px",
        textAlign: "center",
        marginRight: "40%",
        marginLeft: "25%"
    },

    
    
    div: {
        width: "90%",
        height: "70px",
        margin: "20px",
        marginTop: "7px", 
        paddingTop: "10px",
        backgroundColor: "rgb(3, 3, 26)",
        textAlign: "center",
    },

    h3: {
      color: "white",
      textDecoration: "none"
    },
        
    footer: {
        backgroundColor: "rgb(3, 3, 26)",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        bottom:"0",
        color: "white"
    }
  }

    return (
      <>
        <header style={styles.header}>
          <h1>Principal</h1>
        </header>

        <main style={styles.main}>
              <div style={styles.div} class="perfil">
              <Link href="/perfil"><h3 style={styles.h3}>Perfil</h3></Link>
              </div>
              
              <div style={styles.div}class="top-10">
                <Link href="/melhores"><h3 style={styles.h3}>Melhores</h3></Link>
              </div>
              
              <div style={styles.div}class="cadastrar-ativos">
              <Link href="/cadastroDeAcoes"><h3 style={styles.h3}>Cadastrar Ativos</h3></Link>
              </div>
              
              <div style={styles.div} class="graficos">
                <Link href="/graficos"><h3 style={styles.h3}>Graficos</h3></Link>
              </div>
      </main>

      <footer style={styles.footer}>
          <strong>Assistência virtual para bolsa de valores</strong>
      </footer>
    </>
    )
}