function cadastrar(){
    // Obter os valores dos campos do formulário
    var nome = document.getElementById('name').value;
    var contato = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var outros = document.getElementById('other').value;

    // Criar um objeto para armazenar os dados do usuário
    var usuario = {
        nome: nome,
        contato: contato,
        email: email,
        outros: outros
    };

    // Armazena os dados localmente
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redireciona para a página de login
    alert('Volte para realizar login');
    window.location.href = "login.html";
}

function voltar(){
    window.location.href = "login.html";
}