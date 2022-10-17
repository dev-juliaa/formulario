





const form = document.getElementById("form");
const username = document.getElementById("username");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

  function checkInputs() {

      if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
      } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
      } else {
        setSuccessFor(email);
      }


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }