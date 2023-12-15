function login() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('senha').value;

/* 
  pseudo-codigo - Substitui a lógica do bloco de código pós-comentario abaixo

  funcion verificaCredenciais(){

    credenciais = buscaNomeSenhaBD();

    // Algo desse tipo
    credenciais = { {'pedro', '123'}, 
                    {'Lua', '321'} };

    for(;;){
      if(username === credenciais[0].get(0) && senha ==== credenciais[0].get(1))

          Usuário tem acesso ao sistema

      }
    }
  }

*/

    // Verificar se o username e a senha correspondem a um usuário válido (pode ser uma lógica mais avançada em um projeto real)
    if (username === 'user' && password === 'password') {
      // Armazenar os dados localmente
      localStorage.setItem('email', username);
      localStorage.setItem('isLoggedIn', true);
  
      // Redirecionar para a página de sucesso ou fazer outra ação desejada
      window.location.href = '../html/perfil.html';
    } else {
      alert('Login falhou. Por favor, verifique suas credenciais.');
    }
  }
  