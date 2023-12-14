var usuarioDados = localStorage.getItem('usuario');

if(usuarioDados){
    var objeto = JSON.parse(usuarioDados);
    var nomeUsuario = document.querySelector("#nome-usuario");
    var emailUsuario = document.querySelector("#e-mail");    
    
    nomeUsuario.innerHTML = objeto.nome;
    emailUsuario.innerHTML = objeto.email;
}
else{
    console.log("Não existe");
}

function voltar(){
    window.location.href = "principal.html";
}