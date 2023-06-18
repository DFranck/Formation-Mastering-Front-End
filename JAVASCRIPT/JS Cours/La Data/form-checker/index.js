// const pseudo = document.getElementById("pseudo");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirm = document.getElementById("confirm");
// console.log(pseudo, email, password, confirm);
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"],input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;
//====================================================================
//====================================================================
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo dois faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
  //   console.log(pseudo);
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.+[a-z]{2,4}$/i)) {
    errorDisplay("email", "L'email n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
  //   console.log(email);
};

const passwordChecker = (value) => {
  progressBar.classList = "";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Le mot de passe doit contenir au minimum 8 caractères, une majuscule, un chiffre"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressBlue");
    password = value;
  } else {
    errorDisplay("password", "", true);
    progressBar.classList.add("progressGreen");
    password = value;
  }
  //SECURITE!!!!!!!!
  if (confirmPass) confirmChecker(confirmPass);
  //   console.log(password);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
  //   console.log(confirmPass);
};

console.log(pseudo, email, password, confirmPass);

//====================================================================
//====================================================================
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;

      default:
        null;
        break;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      //   pseudo: pseudo,
      //   email: email,
      //   password: password,
      pseudo,
      email,
      password,
    };
    console.log(data);

    inputs.forEach((input) => {
      input.value = "";
      //   progressBar.classList.remove('progressGreen')
      //   progressBar.classList.remove('progressBlue')
      progressBar.classList = "";
    });

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
