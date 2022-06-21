import * as User from "../models/UserModel.js"


function catalog_user(users = []) {
    User.init()
    renderTable();

    //RENDERIZAR A TABELA COM UM UNICO NOME PROCURADO
    document.querySelector('#usernameFilter').addEventListener("input", () => {
        renderTable(document.querySelector('#usernameFilter').value)
    })

    /*ordenar tabela */

    // CLICAR NO BOTÃO ORDENAR POR ORDEM ALFABETICA
    const ordenar_nome = document.querySelector("#btnSort")

    ordenar_nome.addEventListener("click", () => {
        User.sortUsers();
        renderTable();
        //console.log(User.getUsers);
        document.getElementById('ordenarGeral').innerHTML = ordenar_nome.innerHTML
    })


    // CLICAR NO BOTÃO ORDENAR POR PONTOS
    const ordenar_pontos = document.querySelector('#btnPontos')

    ordenar_pontos.addEventListener("click", () => {
        User.sortUsersByPoints();
        renderTable();
        document.getElementById('ordenarGeral').innerHTML = ordenar_pontos.innerHTML
    });

    //BLOQUEAR UM UTILIZADOR 
    let btnsBloquear = document.querySelectorAll(".blockUser");
    for (let button of btnsBloquear) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `Quer mesmo ${button.innerHTML.toLowerCase()}  o utilizador ${button.id}?`,
                showDenyButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não',
                customClass: {
                    actions: 'my-actions',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {

                    const username = button.parentNode.parentNode.children[1].innerHTML
                    const newUserInfo = User.getUsers().find(user => user.username === username)

                    if (!newUserInfo.block) {
                        newUserInfo.block = true
                        button.innerHTML = "Desbloquear"
                    } else {
                        newUserInfo.block = false
                        button.innerHTML = "Bloquear"
                    }

                    User.updateUserInfo(newUserInfo, 1)

                    Swal.fire('Feito!')
                } else if (result.isDenied) {
                    Swal.fire(`Não bloqueou o utilizador ${button.id}. `)
                }
            })

        })
    }

}



function renderTable(filterTxt = "") {

    const table = document.querySelector('table')

    const users = User.getUsers()

    let all_user = ` <thead >
    <tr>
        <th scope="col">Pontos</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Localidade</th>
        <th scope="col">Eliminar</th>
        <th scope="col">Bloquear</th>
    </tr>
    </thead>
    <tbody class="tbody "> `

    for (let user of User.getUsersByName(filterTxt)) {

        all_user += `
            <tr class= "user_line">
            <td>${user.totalPoints}</td>
            <td>${user.username}</td>
            <td>${user.email}</</td>
            <td>${user.city}</</td>
            <td><button type="button" id="${user.username}"
            class="btn btn-danger eliminarUSer">Eliminar</button></td>
            <td><button type="button" id="${user.username}"
            class="btn btn-secondary blockUser">${user.block === false ? "Bloquear" : "Desbloquear"}</button></td>
            </tr>
            </tbody>
            `
    }

    let num_users = users.length - 1
    document.querySelector('.text').innerHTML = ' TOTAL UTILIZADORES: ' + num_users



    table.innerHTML = all_user
    /* ------*/



    //remover utilizador  
    let btnsRemove = document.querySelectorAll(".eliminarUSer");
    for (let button of btnsRemove) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `Tem a certeza que quer eliminar ${button.id}?`,
                showDenyButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não',
                customClass: {
                    actions: 'my-actions',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    User.removeUser(button.id)
                    button.parentNode.parentNode.remove()
                    Swal.fire('Feito!')

                } else if (result.isDenied) {
                    Swal.fire(`O utilizador ${button.id} não foi eliminado! `)
                }
            })

        })
    }

    return all_user




}

catalog_user()
