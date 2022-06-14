import * as User from "../models/UserModel.js"

const table = document.querySelector('table')


function catalog_user() {
    User.init()
    render_table();
    
    //filtrar por nome 
    const username_filter = document.getElementById('username_filter')
    const btnProcurar = document.getElementById('procurar')

    btnProcurar.addEventListener("click", () => {
        render_table(
            User.getUsersFilterd(
                 username_filter.value
            )
        );
        /*----------- */
    })
}

    



function render_table(users = []){
    //renderizar tabala com os utilizadores da localstorage 
    const table = document.querySelector('table')

    users = User.getUsers()

    let all_user = ` <thead >
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">email</th>
        <th scope="col">localidade</th>
        <th scope="col">Eleminar</th>
    </tr>
    </thead>
    <tbody class="tbody "> `
    
    for (let user of users){
            if(user.type !== 'professor') {
            all_user += `
            <tr class= "user_line">
            <td>${user.idUser}</td>
            <td>${user.username}</td>
            <td>${user.email}</</td>
            <td>${user.city}</</td>
            <td><button type="button" id="${user.username}"
            class="btn btn-danger eleminarUSer">Eliminar</button></td>
            </tr>
            </tbody>
            `
        }
    }

    table.innerHTML = all_user  
    /* ------*/



    //remover utilizador  
    let btnsRemove = document.querySelectorAll(".eleminarUSer");
    for (let button of btnsRemove) {
        button.addEventListener("click", () => {
            //alert('ola mundo')
            if (confirm("tem a certeza que quer remover este utilizador?")) {
                User.removeUser(button.id);
                location.reload();
            }
        })
    }

    /*------*/ 

}


catalog_user()





/*   const value = e.target.value.toLowerCase()

for (let i = 0; i < user_linha.length ; i++) {
    const nome_user = user_linha[i].getElementsByTagName('td')[1]
    const isVisible = nome_user.toLowerCase().includes(value) 
    if(!isVisible){
        user_linha[i].element.classList.toggle("hide", !isVisible)

    }      
} */
