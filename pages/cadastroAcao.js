import Link from 'next/link';

export default function CadastroAcao() {
    const styles = {
        body: {
            backgroundColor: "rgb(3, 3, 26)",
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

        h3: {
            textAlign: "center",
            color: "rgb(3, 3, 26)",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },

        h4: {
            textAlign: "left",
            color: "rgb(3, 3, 26)",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            marginTop: "10px",
        },

        "input[type=text], input[type=int]": {
            width: "100%",
            height: "45px",
            border: "solid 1px #ccc",
            paddingLeft: "10px",
            margin: "10px 0",
        },

        "input[type=date]": {
            height: "45px",
            border: "solid 1px #ccc",
            paddingLeft: "10px",
            margin: "10px 0",
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },

        "button[type=button]": {
            width: "100%",
            height: "40px",
            cursor: "pointer",
            backgroundColor: "rgb(3, 3, 26)",
            color: "aliceblue",
            border: "0",
            borderRadius: "20px",
            transition: "1s",
        },

        "button[type=button]:hover": {
            backgroundColor: "rgb(13, 13, 68)",
        },

        ".coluna": {
            width: "48%",
            display: "inline-block",
        },

        "#data": {
            textAlign: "center",
        },
        "#data h4": {
            textAlign: "center",
        },

        "div.cadastroDeAcoes": {
            textAlign: "center",
            width: "48%",
            display: "inline-block",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px", 
        },

        "button[type=button], aCadastroLink": {
            display: "inline-block",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "60px",
            paddingRight: "60px",
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
            lineHeight: "0px",
            textAlign: "center",
        },

        "button[type=button]:hover, aCadastroLink:hover": {
            backgroundColor: "rgb(13, 13, 68)",
        },

        "div.cadastroDeAcoes a": {
            color: "white",
            textDecoration: "none",
        },

        "div.cadastroDeAcoes aCadastroLink": {
            display: "inline-block",
            padding: "5px 10px",
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
            width: "48%",
            height: "35px",
            cursor: "pointer",
        },

        "aCadastroLink:hover": {
            backgroundColor: "rgb(13, 13, 68)",
        },

        "button.botao-enviar": {
            marginTop: "6px",
        },
        
    };



    function cadastrarAcao(){
        // Obter os valores dos campos do formulário
        var codigoAcao = document.getElementById('codigoAcao').value;
        var nomeEmpresa = document.getElementById('nomeEmpresa').value;
        var bolsaDeValores = document.getElementById('bolsaDeValores').value;
        var valorCompra = document.getElementById('valorCompra').value;
        var numAcoes = document.getElementById('numAcoes').value;
        var dataCompra = document.getElementById('dataCompra').value;
    
        // Criar um objeto para armazenar os dados da ação
        var acao = {
            codigoAcao: codigoAcao,
            nomeEmpresa: nomeEmpresa,
            bolsaDeValores: bolsaDeValores,
            valorCompra: valorCompra,
            numAcoes: numAcoes,
            dataCompra: dataCompra
        };
    
        // Armazena os dados localmente
        localStorage.setItem('acao', JSON.stringify(acao));
    
        // Redireciona para a página de login
        alert('Ação cadastrada com sucesso');
        <Link href="/principal" passHref></Link>
    }
    
    function voltar(){
        <Link href="/principal" passHref></Link>
    }



    return (
        <>
            <head>
                <title>Cadastro de ação</title>
            </head>

            <body style={styles.body}>
                <form style={styles.form}>
                    <section title="Cadastro de ações">
                        <h3 style={styles.h3}>Cadastro de ações</h3>

                        <section>
                            <h4 style={styles.h4}>Codigo da Ação:</h4>
                            <input type="text" id="codigoAcao" name="codigoAcao" placeholder="Codigo da Ação" style={styles["input[type=text], input[type=int]"]} />
                        </section>

                        <section>
                            <h4 style={styles.h4}>Nome da empresa:</h4>
                            <input type="text" id="nomeEmpresa" name="nomeEmpresa" placeholder="Nome da empresa" style={styles["input[type=text], input[type=int]"]} />
                        </section>

                        <section>
                            <h4 style={styles.h4}>Bolsa de valores:</h4>
                            <input type="text" id="bolsaDeValores" name="BolsaDeValores" placeholder="Bolsa de valores" style={styles["input[type=text], input[type=int]"]} />
                        </section>

                        <section>
                            <h4 style={styles.h4}>Valor da compra:</h4>
                            <input type="text" id="valorCompra" name="valorCompra" placeholder="Valor da compra" style={styles["input[type=text], input[type=int]"]} />
                        </section>

                        <section>
                            <div className="coluna" style={styles["div.coluna"]}>
                                <h4 style={styles.h4}>Quantidade de Ações:</h4>
                                <input type="int" id="numAcoes" name="numAcoes" placeholder="Quantidade de Ações" style={styles["input[type=text], input[type=int]"]} />
                            </div>

                            <div className="coluna" id="data" style={styles["#data"]}>
                                <h4 style={styles["#data h4"]}>Data da compra:</h4>
                                <input type="date" id="dataCompra" name="dataCompra" placeholder="Data da compra" style={styles["input[type=date]"]} />
                            </div>
                        </section>

                        <div className="cadastroDeAcoes" style={styles["div.cadastroDeAcoes"]}>
                        <Link href="/principal" passHref>
                                <button className="botao-enviar" type="button" name="submeter" placeholder="Enviar" onClick={cadastrarAcao} style={styles["button[type=button]"]}>Enviar</button>
                            </Link>
                            <Link href="/principal" passHref>
                                <button className="botao-enviar" type="button" name="submeter" placeholder="Enviar" onClick={voltar} style={styles["button[type=button]"]}>Voltar</button>
                                {/* <a className="cadastro-link" style={styles["div.cadastroDeAcoes aCadastroLink"]}>Voltar</a> */}
                            </Link>
                        </div>
                    </section>
                </form>
            </body>
        </>
    );
}