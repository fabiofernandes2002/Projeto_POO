import * as User from "../models/UserModel.js"


function catalog_user(users = []) {
    User.init()
    render_table();
    //SearchBar()
    
    //RENDERIZAR A TABELA COM UM UNICO NOME PROCURADO
    // const btnProcurar = document.getElementById('procurar')
    
    // btnProcurar.addEventListener("click", () => {        
    //     let username_filter = document.querySelector('#username_filter')
    //     User.getUsersByName()
    //     render_table(User.getUsersByName(username_filter.value));
    //     console.log(username_filter.value)
    //     /*----------- */
    // })

    // CLICAR NO BOTÃO FILTRAR
    document.querySelector("#procurar").addEventListener("click", () => {
        //alert('hdh')
        render_table(
        User.getUsersFilter(
            document.getElementById("usernameFilter").value,
        )
        );
    });

    /*ordenar tabela */

    // CLICAR NO BOTÃO ORDENAR POR ORDEM ALFABETICA
    const ordenar_nome = document.querySelector("#btnSort")
    
    ordenar_nome.addEventListener("click", () => {
        User.sortUsers();
        render_table(User.getUsers());
        //console.log(User.getUsers);
        document.getElementById('ordenarGeral').innerHTML = ordenar_nome.innerHTML
    })
    
    
    // CLICAR NO BOTÃO ORDENAR POR PONTOS
    const ordenar_pontos = document.querySelector('#btnPontos')

    ordenar_pontos.addEventListener("click" , () => {
        User.sortUsersByPoints();
        render_table(User.getUsers());
        document.getElementById('ordenarGeral').innerHTML = ordenar_pontos.innerHTML
    });

    //BLOQUEAR UM UTILIZADOR 
    let btnsBloquear = document.querySelectorAll(".bluquearUser");
    for (let button of btnsBloquear) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `QUER MESMO BLOQUEAR O ${button.id}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    for (let user of users) {
                        if(user.username === button.id){
                            localStorage.getItem(user.block) = user.block === false ? true : false 
                            localStorage.setItem("users", JSON.stringify(users));
                            return User.block 

                        }
                    }
                    console.log(User.block , button.id)

                    //setTimeout(function(){window.location.reload(); ;}, 2000);;
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire(`Não bloqueou o utilizador ${button.id}. `)
                }
              })
            
        })
    }

}



function render_table(users = []){
    //renderizar tabala com os utilizadores da localstorage 
    const table = document.querySelector('table')

    users = User.getUsers()

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
    
    for (let user of users){
            if(user.type !== 'professor' ) {
            all_user += `
            <tr class= "user_line">
            <td>${user.totalPoints}</td>
            <td>${user.username}</td>
            <td>${user.email}</</td>
            <td>${user.city}</</td>
            <td><button type="button" id="${user.username}"
            class="btn btn-danger eliminarUSer">Eliminar</button></td>
            <td><button type="button" id="${user.username}"
            class="btn btn-secondary bluquearUser">Bloquear</button></td>
            </tr>
            </tbody>
            `
            
        }
        
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
                title: `Tens a certeza que queres eliminar ${button.id}!`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    User.removeUser(button.id)
                    setTimeout(function(){window.location.reload();}, 2000);;
                    Swal.fire('Saved!', '', 'success')
                     
                } else if (result.isDenied) {
                  Swal.fire(`O utilizador ${button.id} não foi eliminado! `)
                }
              })
            
        })
    }

    

    /*------*/ 
    return all_user




}

// function SearchBar() {
    
//     const result = `
//         <div class="col-4">
//             <div class="input-group">
//                 <input type="search" class="form-control" id="usernameFilter" onkeyup="myFunction() placeholder="Procurar por nome" aria-label="Username" aria-describedby="basic-addon1">
//             </div>
//         </div>
//         <div class="col-auto ">
//                 <a class="btn btn-primary" id="procurar" href="#" role="button">Procurar </a>
//         </div>
            
//         <div class="col  dropdown">    
//             <button type="button" id="ordenarGeral"class="btn btn-dark dropdown-toggle" style="background-color:rgba(54, 63, 115, 1) ;" data-bs-toggle="dropdown">
//             Ordenar
//             </button>
//             <ul class="dropdown-menu">
//                 <li><a class="dropdown-item" id="btnSort">Por ordem alfabetica</a></li>
//                 <li><a class="dropdown-item" id="btnPontos">Ordem por pontos</a></li>
//             </ul>
//         </div>
//     `
//     document.querySelector('#formFilter').innerHTML = result
// }


catalog_user()

