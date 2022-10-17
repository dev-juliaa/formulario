const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const telefone = document.getElementById('telefone');
const cep = document.getElementById('cep');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;


  if (usernameValue === "") {
    setErrorFor("O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") { 
    setErrorFor("Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (telefone === "") {
  } else if (telefone.length <8) {
    setErrorFor("Por favor, insira um telefone válido.");
  } else {
    setSuccessFor(telefone);
  }

  if (cep === "") {
    setErrorFor( "O cep é obrigatório.");
  } else if (cep.length <7) {
    setErrorFor("Por favor, insira um cep válido.");
  } else {
    setSuccessFor(cep);
  }

  if (passwordValue === "") {
    setErrorFor("A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor("A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}