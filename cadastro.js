let usuarios = [];
if (localStorage.getItem('cadastrados')) {
  usuarios = JSON.parse(localStorage.getItem('cadastrados'));
}

function cadastrar() {
  let guardaNome = document.getElementById('nome').value;
  let guardaSenha = document.getElementById('senha').value;
  let guardaEmail = document.getElementById('email').value;
  let guardaCPF = document.getElementById('CPF').value;
  let guardaNascimento = document.getElementById('nascimento').value;
  let usuario = { nome: guardaNome, senha: guardaSenha, email: guardaEmail, CPF: guardaCPF, nascimento: guardaNascimento, dataCadastro: new Date().toLocaleDateString('pt-BR') };
  if (
    guardaNome.trim().length >= 3 &&
    guardaSenha.trim().length >= 6 && guardaSenha.trim().length <= 10 &&
    validacaoEmail(guardaEmail) &&
    guardaCPF.trim().length == 11 &&
    validacaoNascimento(guardaNascimento)
  ) {
    if (procura_usuario(guardaNome) == -1) {
      usuarios.push(usuario);
      localStorage.setItem('cadastrados', JSON.stringify(usuarios));
      alert('Cadastro realizado!');
      location.assign('login.html');
    } else {
      document.getElementById('alertaNome').innerHTML = 'O Nome de Usuário já está em uso! Tente outro nome';
      document.getElementById('alertaNome').style.color = '#ff4655';
      document.getElementById('alertaNome').style.fontSize = '15px';
      setTimeout(() => {
        document.getElementById('alertaNome').innerHTML = '';
      }, 4000);
    }
  }
  if (guardaNome.length < 3 || guardaNome.trim().length == 0) {
    document.getElementById('alertaNome').innerHTML = 'Mínimo de 3 caracteres';
    document.getElementById('alertaNome').style.color = '#ff4655';
    document.getElementById('alertaNome').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaNome').innerHTML = '';
    }, 3000);
  }
  if (guardaSenha.trim().length == 0 || guardaSenha.length < 6 || guardaSenha.length > 10) {
    document.getElementById('alertaSenha').innerHTML = 'A senha deve conter 6-10 caracteres';
    document.getElementById('alertaSenha').style.color = '#ff4655';
    document.getElementById('alertaSenha').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaSenha').innerHTML = '';
    }, 3000);
  }
  if (!validacaoEmail(guardaEmail)) {
    document.getElementById('alertaEmail').innerHTML = 'Email inválido';
    document.getElementById('alertaEmail').style.color = '#ff4655';
    document.getElementById('alertaEmail').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaEmail').innerHTML = '';
    }, 3000);
  }
  if (guardaCPF.trim().length != 11 || guardaCPF.trim().length == 0) {
    document.getElementById('alertaCPF').innerHTML = 'CPF inválido';
    document.getElementById('alertaCPF').style.color = '#ff4655';
    document.getElementById('alertaCPF').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaCPF').innerHTML = '';
    }, 3000);
  }
  if (!validacaoNascimento()) {
    document.getElementById('alertaNascimento').innerHTML = 'Data de nascimento inválida (Formato: DD-MM-AAAA)';
    document.getElementById('alertaNascimento').style.color = '#ff4655';
    document.getElementById('alertaNascimento').style.fontSize = '15px';
    setTimeout(() => {
      document.getElementById('alertaNascimento').innerHTML = '';
    }, 3000);
  }

  function validacaoEmail() {
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    /*A expressão regular verifica se o email começa com um ou mais caracteres alfanuméricos, seguido por um @,
    seguido por um ou mais caracteres alfanuméricos e um ponto, seguido por dois a quatro caracteres alfanuméricos
    no final do email*/
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function validacaoNascimento() {
    const nascimentoInput = document.getElementById('nascimento');
    const regexData = /^\d{4}(-)?\d{2}(-)?\d{2}$/;
    //mesma coisa da expressão regular do email
    if (regexData.test(nascimentoInput.value)) {
      return true;
    } else {
      return false;
    }
  }

  let nome = document.getElementById('nome');
  let senha = document.getElementById('senha');
  let email = document.getElementById('email');
  let CPF = document.getElementById('CPF');
  let nascimento = document.getElementById('nascimento');

  senha.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  nome.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  email.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  CPF.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });
  nascimento.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      cadastrar()
    }
  });

  function procura_usuario(nome) {
    let index = usuarios.findIndex((element) => {
      return element.nome == nome
    })
    return index
  }
}
