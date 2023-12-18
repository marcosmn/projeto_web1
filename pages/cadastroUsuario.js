import Link from 'next/link'

export default function CadastroUsuario() {
    const styles = {
        body: {
            backgroundColor: "rgb(3, 3, 26)",
            margin: "0px",
            padding: "0px",
            color: "white",
        },

        header: {
            backgroundColor: "rgb(3, 3, 26)",
            textAlign: "center",
        },

        main: {
            backgroundColor: "rgb(3, 3, 26)",
            paddingTop: "30px",
        },

        form: {
            backgroundColor: "aliceblue",
            maxWidth: "500px",
            width: "70%",
            padding: "20px",
            position: "absolute",
            left: "50%",
            top: "50%",
            marginBottom: "50px",
            marginTop: "50px",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
        },

        cadastro: {
            textAlign: "center",
            width: "48%",
            display: "inline-block",
        },

        h1: {
            textAlign: "center",
            color: "white",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },

        h3: {
            textAlign: "center",
            color: "rgb(3, 3, 26)",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },

        h4: {
            textAlign: "left",
            color: "rgb(3, 3, 26)",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            marginTop: "5px",
            marginBottom: "5px",
        },

        input: {
            width: "100%",
            height: "45px",
            border: "solid 1px #ccc",
            paddingLeft: "10px",
            margin: "10px 0",
        },

        button: {
            width: "100%",
            height: "40px",
            cursor: "pointer",
            backgroundColor: "rgb(3, 3, 26)",
            color: "white",
            border: "0",
            borderRadius: "20px",
            transition: "1s",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },

        buttonHover: {
            backgroundColor: "rgb(13, 13, 68)",
        },

        aCadastroLink: {
            width: "48%",
            flex: "1",
            height: "40px",
            cursor: "pointer",
            border: "0",
            borderRadius: "20px",
            transition: "1s",
            
            
        },

        aCadastroLinkHover: {
            backgroundColor: "rgb(13, 13, 68)",
        },

        divCadastro: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },

        a: {
            color: "white",
            textDecoration: "none",
        },

        aCadastroLink: {
            display: "inline-block",
            paddingTop: "8px",
            paddingBottom: "0px",
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "10px",
            color: "white",
            backgroundColor: "rgb(3, 3, 26)",
            fontWeight: "100",
            textDecoration: "none",
            border: "0",
            borderRadius: "20px",
            transition: "1s",
            width: "90%",
            cursor: "pointer",
            height: "30px",
            lineHeight: "20px",
            textAlign: "center",
        },

        aCadastroLinkHover: {
            backgroundColor: "rgb(13, 13, 68)",
        },

        footer: {
            backgroundColor: "rgb(3, 3, 26)",
            textAlign: "center",
            position: "fixed",
            width: "100%",
            bottom: "0",
        },
    };

    function cadastrar(){
        // Obter os valores dos campos do formulário
        var nome = document.getElementById('name').value;
        var senha = document.getElementById('password').value;
        var contato = document.getElementById('contact').value;
        var email = document.getElementById('email').value;
    
        // Criar um objeto para armazenar os dados do usuário
        var usuario = {
            nome: nome,
            senha: senha,
            contato: contato,
            email: email
        }; 
    
        // Armazena os dados localmente
        localStorage.setItem('usuario', JSON.stringify(usuario));
    
        // Redireciona para a página de login
        alert('Volte para realizar login');
        window.location.href = "/login";
    }

    return (
        <>
            <head>
                <title>Cadastro de usuário</title>
            </head>

            <body style={styles.body}>

                <header style={styles.header}>
                    <h1>Cadastro</h1>
                </header>

                <main style={styles.main}>
                    <form style={styles.form}>
                        <h3 style={styles.h3}>Informações do usuário</h3>

                        <section>
                            <label htmlFor="name">
                                <span><h4 style={styles.h4}>Nome</h4></span>
                            </label>
                            <input type="text" id="name" name="name" placeholder="Nome" style={styles.input} />
                        </section>

                        <section>
                            <label htmlFor="password">
                                <span><h4 style={styles.h4}>Senha</h4></span>
                            </label>
                            <input type="password" id="password" name="password" placeholder="Senha" style={styles.input} />
                        </section>

                        <section>
                            <label htmlFor="contact">
                                <span><h4 style={styles.h4}>Contato</h4></span>
                            </label>
                            <input type="text" id="contact" name="contact" placeholder="Número de celular" style={styles.input} />
                        </section>

                        <section>
                            <label htmlFor="email">
                                <span><h4 style={styles.h4}>E-mail</h4></span>
                            </label>
                            <input type="text" id="email" name="email" placeholder="E-mail" style={styles.input} />
                        </section>

                        <div style={styles.divCadastro}>
                            <button type="button" name="cadastro" onClick={cadastrar} style={styles.button}>
                                Cadastrar
                            </button>
                            <Link href="/login" className="cadastro-link" style={styles.aCadastroLink}>
                                Voltar
                            </Link>
                        </div>
                    </form>
                </main>

                <footer style={styles.footer}>
                    <strong>Assistência virtual para bolsa de valores</strong>
                </footer>
            </body>
        </>
    );
}