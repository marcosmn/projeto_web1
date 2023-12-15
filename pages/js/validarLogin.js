function login() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('senha').value;
  
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
  