var usuarioDados = localStorage.getItem("usuario");

if(usuarioDados){
    var usuario = JSON.parse(usuarioDados);
    var nomeUsuario = document.querySelector("#nome-usuario");
    var emailUsuario = document.querySelector("#e-mail");    
    
    nomeUsuario.innerHTML = usuario.nome;
    emailUsuario.innerHTML = usuario.email;
}
else{
    console.log("Não existe");
}

var principaisAcoes = localStorage.getItem("acao");

if(principaisAcoes){
    var acao = JSON.parse(principaisAcoes);
    var codAcao = acao.codigoAcao;
    var nomeEmpresa = acao.nomeEmpresa;

    // Criar um novo elemento
    var novoElemento = document.createElement("h3");
    
    // Adicionar conteúdo ao elemento
    novoElemento.textContent = `${codAcao} : ${nomeEmpresa}`;
    
    // Encontrar o elemento existente no DOM
    var elementoExistente = document.getElementById("principais-ativos");
    
    // Adicionar o novo elemento como filho do elemento existente
    elementoExistente.appendChild(novoElemento);

}
else{
    console.log("Não há ações");
}


function voltar(){
    window.location.href = "principal.html";
}