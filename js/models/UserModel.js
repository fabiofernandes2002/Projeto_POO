let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, email, city, password, birthDate, sex) {
  if (users.some((user) => user.username === username)) {
    throw Error(`O nome de utilizador "${username}" já existe!`);
  } else if (users.some((user) => user.email === email) || email.indexOf("@") < 1) { //Se o email já existe ou se o email não contêm @
    throw Error(`Email inválido!`);
  } else {
    users.push(new User(username, email, city, password, birthDate, sex));
    localStorage.setItem("users", JSON.stringify(users));
  }
}
// LOGIN DO UTILIZADOR
export function login(username, password) {

  const userByUsername = users.find(
    (user) => user.username === username && user.password === password
  );
  
  console.log(userByUsername, "1");
  if (userByUsername != null) {
    sessionStorage.setItem("loggedUser", JSON.stringify(userByUsername));
    return true;
  } 

  const userByEmail = checkLoginWithEmail(username, password)
  console.log(userByEmail, "2");
  if (userByEmail != null) {
    
    sessionStorage.setItem("loggedUser", JSON.stringify(userByEmail));
    return true;
  } 
  
  throw Error("Login Inválido!");
}

function checkLoginWithEmail(email, password) {
  return users.find(
    (user) => user.email === email && user.password === password
  );  
}

// LOGOUT DO UTILIZADOR
export function logout(pathIndexPage) {
  sessionStorage.removeItem("loggedUser");
  location.href = pathIndexPage;
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

// OBTER lista de Users 
export function getUsers() {
  return users;
}

/**
 * CORRER {@link func} 300 MILISSEGUNDOS DEPOIS DA PÁGINA TER SIDO REDIMENSIONADA
 * @param {function} func - Função definida no addEventListener 
 * @returns {function} - Função que declará a variável "timer" com um setTimeout quando pararmos de redimensionar a página
 */
export function debounce(func) { // função debouncing inspirada do site https://flaviocopes.com/canvas/
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer)
    } // if(timer) se timer tiver um valor, caso contrário não funciona
    timer = window.setTimeout(func, 300)
  };
};

/**
 * CLASSE QUE MODELA UM UTILIZADOR NA APLICAÇÃO
 */
class User {
  idUser
  type = ""
  username = ''
  email = ''
  city = ''
  password = ''
  birthDate = ''
  sex = ''
  avatars = []
  medals = []
  totalPoints = 0


  constructor(username, email, city, password, birthDate, sex) {

    this.idUser = users.length === 0 ? 1 : users.length + 1;
    this.type = "aluno";
    this.username = username
    this.email = email
    this.city = city
    this.password = password
    this.birthDate = birthDate
    this.sex = sex
  }

}


// let users = [{
//     idUser : 0,
//     type: 'user',
//     name: "tomas",
//     email:"tomas@gmail.com",
//     city:"Porto",
//     password:"123",
//     birthDate: "20-05-2002",
//     sex:"male",
//     avatars:[1],
//     medals: [0], 
//     totalPoints:0
// }]