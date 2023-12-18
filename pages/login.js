import Link from 'next/link'

export default function Login() {
    const styles = {
        body: {
            backgroundColor: "rgb(3, 3, 26)",
        },
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        },
        form: {
            backgroundColor: "aliceblue",
            maxWidth: "500px",
            width: "70%",
            padding: "20px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
        },
        h3: {
            textAlign: "center",
            color: "rgb(3, 3, 26)",
            fontFamily:
            "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
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
            color: "aliceblue",
            border: "0",
            borderRadius: "20px",
            transition: "1s",
        },
        buttonHover: {
            backgroundColor: "rgb(13, 13, 68)",
        },
        p: {
            textAlign: "center",
        },
        a: {
            color: "rgb(13, 13, 68)",
            cursor: "pointer",
        },
    };
  
    function login() {
      var username = document.getElementById("email").value;
      var password = document.getElementById("senha").value;
  
      // Verificar se o username e a senha correspondem a um usuário válido (pode ser uma lógica mais avançada em um projeto real)
      if (username === "user" && password === "password") {
        // Armazenar os dados localmente
        localStorage.setItem("email", username);
        localStorage.setItem("isLoggedIn", true);
  
        // Redirecionar para a página de sucesso ou fazer outra ação desejada
        window.location.href = "/";

      } else {
        alert("Login falhou. Por favor, verifique suas credenciais.");
      }
    }
  
    return (
      <>
        <header>
          <title>Login</title>
        </header>
  
        <body style={styles.body}>
            <div style={styles.container}>
                <form style={styles.form}>
                    <h3 style={styles.h3}>Login</h3>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Seu e-mail"
                    style={styles.input}
                    />
                    <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Sua senha"
                    style={styles.input}
                    />
                    <input
                    type="button"
                    name="acao"
                    value="Enviar"
                    onClick={login} 
                    style={styles.button}
                    />
        
                    <p style={styles.p}>
                    Ainda não possui cadastro? Clique{" "}
                    <strong>
                        <Link href="/cadastroUsuario" style={styles.a}>aqui </Link>
                    </strong>
                    .
                    </p>
                </form>
            </div>
        </body>
      </>
    );
  }
  