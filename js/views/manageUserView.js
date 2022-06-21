import * as User from "../models/UserModel.js"



function catalog_user(users = []) {
    User.init()
    render_table();
    
    //RENDERIZAR A TABELA COM UM UNICO NOME PROCURADO
    const btnProcurar = document.getElementById('procurar')
    
    btnProcurar.addEventListener("click", () => {        
        let username_filter = document.querySelector('#username_filter')
        User.getUsersByName()
        render_table(User.getUsersByName(username_filter.value));
        console.log(username_filter.value)
        /*----------- */
    })

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
        <th scope="col">pontos</th>
        <th scope="col">Nome</th>
        <th scope="col">email</th>
        <th scope="col">localidade</th>
        <th scope="col">Eleminar</th>
        <th scope="col">bloquear</th>
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
            class="btn btn-danger eleminarUSer">Eliminar</button></td>
            <td><button type="button" id="${user.username}"
            class="btn btn-secondary bluquearUser">bloquar</button></td>
            </tr>
            </tbody>
            `
            
        }
        
    }

    let num_users = users.length - 1
    document.querySelector('.text').innerHTML = ' o site já tem ' + num_users + ' utilizadores'



    table.innerHTML = all_user  
    /* ------*/



    //remover utilizador  
    let btnsRemove = document.querySelectorAll(".eleminarUSer");
    for (let button of btnsRemove) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `tens a certeza que queres eleminar ${button.id}`,
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
                  Swal.fire(`o utilizador ${button.id} não foi eleminado `)
                }
              })
            
        })
    }

    

    /*------*/ 
    return all_user



}

catalog_user()

