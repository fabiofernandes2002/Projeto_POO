import * as User from "../models/UserModel.js"


let username_filter = document.getElementById('username_filter')
const table = document.getElementsByClassName('table')
let procurar = document.getElementById('procurar')

window.onload( (User) =>{
    User.init()
    render_table(User.getUser());


} )

function render_table( users = []){

    let all_user = ''
    for (let user of users){
        all_user = ` <tr>
        <td>${user.idUse}</td>
        <td>${user.username}</td>
        <td>${user.email}</</td>
        <td>${user.city}</</td>
        <td><button type="button" class="btn btn-danger">Eliminar</button></td>
      </tr>`
    }

    table.innerHTML += all_user
}

procurar.addEventListener(() =>{
    table
} )