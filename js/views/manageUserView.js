import * as User from "../models/UserModel.js"



function catalog_user() {
    User.init()
    render_table();
    
    //filtrar por nome 
    //renderizar a tabela com o nome procurado
    const username_filter = document.getElementById('username_filter')
    const btnProcurar = document.getElementById('procurar')

    btnProcurar.addEventListener("click", () => {        
        render_table(
            User.getUsersFilterd
            (username_filter.value)
            );
            console.log(username_filter.value)
        /*----------- */
    })

    /*ordenar tabela */

    // CLICAR NO BOTÃO ORDENAR POR NOME 


    const ordenar_nome = document.querySelector("#btnSort")
    const ordenar_pontos = document.querySelector('#btnPontos')
    ordenar_nome.addEventListener("click", () => {
        User.sortUsers();
        render_table(User.getUsers());
        //console.log(User.getUsers);
    })

    
    // CLICAR NO BOTÃO ORDENAR POR PONTOS

    ordenar_pontos.addEventListener("click" , () => {
        User.sortByPontos();
        render_table(User.getUsers())

    })




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
                    setTimeout(function(){
                        window.location.reload();Swal.fire('Saved!', '', 'success')
                        User.removeUser(button.id);}  , 2000);; 
                } else if (result.isDenied) {
                  Swal.fire(`o utilizador ${button.id} não foi eleminado `)
                }
              })
            s
        })
    }

    /*------*/ 
    return all_user



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
9