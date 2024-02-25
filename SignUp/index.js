const container = document.querySelector(".container");
const signupBtn = document.querySelector(".green-bg button");

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPasword = document.querySelector('#password');
const btnSubmit = document.querySelector('#btnSubmit');

const login = {
  name: '',
  email: '',
  password: ''
}

inputName.addEventListener('blur', validar);
inputEmail.addEventListener('blur', validar);
inputPasword.addEventListener('blur', validar);

btnSubmit.addEventListener('click', signIn)

signupBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

function signIn(e){
  e.preventDefault();
  alert(`Las credenciales de inicio de sesion son: Email: ${login.email} - Password: ${login.password}`)
}

function validar(e){

  const parent = e.target.parentElement;

  if(e.target.value === ''){
    showErrorIcon(parent, 'fa-close');
    login[e.target.id] = '';
    comprobarLogin();
    return
  };

  if (e.target.id === 'email' && !validarEmail(e.target.value)) {
    showErrorIcon(parent, 'fa-envelope');
    login[e.target.id] = '';
    comprobarLogin();
    return
  }

  removeErrorIcon(parent);

  login[e.target.id] = e.target.value;

  comprobarLogin();
}

function showErrorIcon(parent, iconId){

  removeErrorIcon(parent);

  const icon = document.createElement('i');
  icon.classList.add('fa', `${iconId}`, 'errorIcon');
  parent.appendChild(icon);
}

function removeErrorIcon(parent){
  const icon = parent.querySelector('.errorIcon');

  if (icon) {
    icon.remove();
  }
}

function validarEmail(email){
  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const result = regex.test(email);
  return result;
}

function comprobarLogin(){
  console.log(login);

  if (Object.values(login).includes('')) {
    btnSubmit.style.opacity = '.5';
    btnSubmit.disable = 'true';
  }else{
    btnSubmit.style.opacity = 1;
    btnSubmit.disable = 'false';
  }
}