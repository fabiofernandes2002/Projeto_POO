import * as User from "../models/UserModel.js"


let username_filter = document.getElementById('username_filter')
let procurar = document.getElementById('procurar')


function add_user() {
    User.init()
    render_table();
}


function render_table(users = []){
    //renderizar tabala com os utilizadores da localstorage 
    const table = document.querySelector('table')
    
    users = User.getUsers()
    
    let all_user = ''
    
    for (let user of users){
        all_user += `
        <tr>
        <td>${user.idUser}</td>
        <td>${user.username}</td>
        <td>${user.email}</</td>
        <td>${user.city}</</td>
        <td><button type="button" id="elminarUser"
         class="btn btn-danger">Eliminar</button></td>
      </tr>
      `
    }

    table.innerHTML += all_user

    const btnsRemove = document.getElementsByClassName("eleminarUSer");
    for (const button of btnsRemove) {
        button.addEventListener("click", () => {
            if (confirm("Desje mesmo remover a banda?")) {
                Band.removeBand(button.id);
                location.reload();
            }
        })
    }


}


add_user()


procurar.addEventListener('click',() =>{
    // 
    /* render_tabel_search(
    
        Band.getBands(
            document.querySelector("#txtBand").value,
            document.querySelector("#sltGenre").value
        )
    ) */

    alert( 'funciona fds')


}) 
