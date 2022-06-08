import * as User from "../models/UserModel.js";


function displayUserInfo() {
    
    const userPoints = document.querySelector('#userPoints')
    const quantityMedal = document.querySelector('#quantityMedal') 
    const quantityAvatar = document.querySelector('#quantityAvatar')
    const UserPosition = document.querySelector('#UserPosition')
    const userInfo = JSON.parse(sessionStorage.getItem("loggedUser"));

    userPoints.innerHTML = userInfo.totalPoints;
    quantityMedal.innerHTML = userInfo.medals
    quantityAvatar.innerHTML = userInfo.avatars;
    UserPosition.innerHTML = userInfo.classification


}
displayUserInfo()


function updateDataUsers() {
    
    User.init()

    const profileForm = document.querySelector('#profileForm')
    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const txtUsernameChange = document.querySelector('#txtUsernameChange')
        const oldPw = document.querySelector('#oldPw')
        const newPw = document.querySelector('#newPw')
        const userInfo = JSON.parse(sessionStorage.getItem("loggedUser"));


        if (txtUsernameChange.value === userInfo.username) {
            Swal.fire({
                icon: 'error',
                title: "Não podes mudar para o mesmo nome de utilizador!",
                confirmButtonColor: "#4DB964",
                confirmButtonText: "Tentar novamente",
            });
            }
            else if (oldPw.value !== userInfo.password) {
            Swal.fire({
            icon: 'error',
            title: "Não inseriste corretamente a password atual!",
            confirmButtonColor: "#4DB964",
            confirmButtonText: "Tentar novamente",
            });
            }
            else if (newPw.value === userInfo.password) {
            Swal.fire({
            icon: 'error',
            title: "Não podes mudar para a mesma palavra-passe!",
            confirmButtonColor: "#4DB964",
            confirmButtonText: "Tentar novamente",
            });
            } else {
            sessionStorage.setItem("loggedUser", JSON.stringify({ ...userInfo,username:txtUsernameChange.value, password: newPw.value }));
            const userList = JSON.parse(localStorage.getItem("users"));
            const newUserList = userList.map((userItem) =>
            userItem.username === userInfo.username
                ? { ...userItem,username:txtUsernameChange.value, password: newPw.value }
                : userItem
            );
            localStorage.setItem("users", JSON.stringify(newUserList));
            Swal.fire({
            icon: 'success',
            title: "Alteraste seus dados com sucesso!",
            confirmButtonColor: "#4DB964",
            confirmButtonText: "Voltar",
            })
            this.profileForm.reset();
            
        }

    })

}

updateDataUsers()