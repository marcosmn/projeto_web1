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
    window.location.href = "principal.html";
}

function voltar(){
    window.location.href = "/principal.html";
}