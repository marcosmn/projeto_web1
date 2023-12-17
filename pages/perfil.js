import Link from 'next/link'

export default function Perfil(){
    const styles = {
        header: {
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            textAlign: "center"
        },
        div_principais_ativos: {
            display: "inline-block", 
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            width: "40%",
            maxWidth: "400px",
            minWidth: "250px",
            height: "450px",
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "10%"
        },
        div_informacao_perfil: {    
            display: "inline-block", 
            float: "right",     
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            width: "30%",
            height: "250px",
            textAlign: "center",
            marginTop: "20px",
            marginRight: "10%",
            marginBottom: "10px"
        },
        div_voltar: {
            textAlign: "center",
            width: "100%",
            height: "20px",
            marginTop: "0%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "45%",
            marginLeft: "45%",
            marginBottom: "5%"
        },
        img_foto_perfil: {
            width: "200px"
        },
        nome_usuario: {
            color: "white",
            textAlign: "center"
        },
        email: {
            textAlign: "center",
            marginTop: "20px",
            width: "250px",
            backgroundColor: "rgb(3, 3, 26)",
            marginRight: "20%",
            marginLeft: "20%"
        },
        button_voltar: {
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            fontWeight: "700",
            padding: "10px",
            margin: "10px",
            textDecoration: "none",
            width: "10%"
        },
        footer: {
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            textAlign: "center",
            position: "fixed",
            width: "100%",
            bottom: "0"
        },
        link: {
            textDecoration: "none",
            color: "white"
        }
        
    }

    function voltar(){
            
    }
        return (
            <> 
                <header style={styles.header}>
                    <h1>Perfil</h1>
                </header>

                <main style={styles.main}>
                    <div style={styles.div_principais_ativos}
                     id="principais-ativos" class="principais-ativos">
                        <h2>Principais Ativos</h2>
                    </div>
                    <div style={styles.div_informacao_perfil} class="foto-perfil">
                        <img style={styles.img_foto_perfil} class="foto-perfil" src="./imagens/foto-perfil.png" alt="foto de perfil"/>

                        <h2 style={styles.nome_usuario} id="nome-usuario" class="nome-usuario">Usuário</h2>
                        
                        <h3 style={styles.email} id="e-mail" class="e-mail">exemplo123@mail.com.br</h3>
                    </div>
                    
                    <div style={styles.div_voltar} class="voltar">
                            <button style={styles.button_voltar} class="voltar" >
                                <Link href="/" style={styles.link}>Voltar </Link>
                            </button>
                    </div>
                </main>
                
            <footer style={styles.footer}>
                <strong>Assistência virtual para bolsa de valores</strong>
            </footer> 
        </>        
    )
}
