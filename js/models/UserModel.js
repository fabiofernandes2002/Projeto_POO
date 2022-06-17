let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, email, city, password, birthDate, sex) {
  username = username.trim() // .trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto
  email = email.trim()
  if (users.some((user) => user.username === username)) {
    throw Error(`O nome de utilizador "${username}" já existe!`);
  } else if (username.includes(" ")) {
    throw Error(`Nome de utilizador inválido!`);
  } else if (users.some((user) => user.email === email) || email.indexOf("@") < 1 || email.includes(" ")) { //Se o email já existe, ou se o email não contêm @, ou se existem espaços em branco entre caracteres
    throw Error(`Email inválido!`);
  } else {
    users.push(new User(username, email, city, password, birthDate, sex));
    localStorage.setItem("users", JSON.stringify(users));
  }
}
// LOGIN DO UTILIZADOR
export function login(usernameOrEmail, password) {
  usernameOrEmail = usernameOrEmail.trim()
  password = password.trim()
  const userByUsername = users.find(
    (user) => user.username === usernameOrEmail && user.password === password
  );
  if (userByUsername != null ) { //Se o utilizador e a password estão válidos
    sessionStorage.setItem("loggedUser", JSON.stringify(userByUsername));
    return true;
  }

  const userByEmail = checkLoginWithEmail(usernameOrEmail, password)
  if (userByEmail != null ) { //Se o email e a password estão válidos
    sessionStorage.setItem("loggedUser", JSON.stringify(userByEmail));
    return true;
  }

  throw Error("Login Inválido!");
}

// VERIFICAR SE O UTILIZADOR QUERIA FAZER LOGIN COM O EMAIL
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
export function getUsers( ) {
  return users;
}


// OBTER USER (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function sortUsers() {
  users.sort((a, b) => a.username.localeCompare(b.username));
  
}

// OBTER USER (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function sortByPontos() {
  users.sort((a, b) => a.totalPoints.localeCompare(b.totalPoints));
  console.log(a.totalPoints);
}



export function getUsersFilterd(filterName = "" , isSorted = false) {
  let filteredUsers = users.filter(
  (user) =>(user.username.toLowerCase().includes(filterName.toLowerCase()) || filterName === "")   );
  console.log(filteredusers);
    
  filteredBands = isSorted
  ? filteredBands.sort((a, b) => a.name.localeCompare(b.name))
  : filteredBands;
    
  return filteredUsers;
    
}


//REMOVER UM UTLIZADOR 
export function removeUser(name) {
  users = users.filter((user) => user.username !== name);
  localStorage.setItem("users", JSON.stringify(users));
}


export function getUserPosition(username) {
  const allStudentUsers = getUsers().filter((u) => u.type == "aluno");
  const index = orderUsers(allStudentUsers).findIndex(user => user.username === username)
  if (index === -1) {
    return false
  } else {
    return index + 1 + `º`
  }
}

export function orderUsers(allStudentUsers) {
  return allStudentUsers.sort((a, b) => {
      const aXP = a.totalPoints ? a.totalPoints : 0;
      const bXP = b.totalPoints ? b.totalPoints : 0;
      return aXP - bXP;
    })
    .reverse();
}

export function isTeacher() {
  return getUserLogged().type === "professor" ? true : false
}

export function updateLoggedUserInfo(newUserInfo) {

  //NA SESSION STORAGE 
  sessionStorage.setItem("loggedUser", JSON.stringify(newUserInfo));

  //NA LOCAL STORAGE
  const newUserList = users.map((userItem) =>
    userItem.idUser === newUserInfo.idUser ? newUserInfo : userItem
  );
  localStorage.setItem("users", JSON.stringify(newUserList));

  users = newUserList
}

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
  videosSeen = []
  videosLiked = []

  //[(number)id da época desbloqueada, (boolean)já realizou a ficha de trabalho? , (number)nota da ficha de trabalho]
  epochs = [
    [1, false, 0],
    [2, false, 0]
  ]



  constructor(username, email, city, password, birthDate, sex , totalPoints) {

    this.idUser = users.length === 0 ? 1 : users.length + 1;
    this.type = "aluno";
    this.username = username
    this.email = email
    this.city = city
    this.password = password
    this.birthDate = birthDate
    this.sex = sex
    this.totalPoints = totalPoints

  }

}


//***********PARA DESIGN DA PÁGINA**************************************************
/**
 * CORRER {@link func} 300 MILISSEGUNDOS DEPOIS DA PÁGINA TER SIDO REDIMENSIONADA
 * @param {function} func - Função definida no addEventListener 
 * @returns {function} - Função que atribuirá à variável "timer" um setTimeout
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
//***********************************************************************************