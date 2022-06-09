import * as User from "../models/UserModel.js";
// import * as Achievement from "../models/AchievementsModel.js";

function displayUserInfo() {
    User.init()

    const userPoints = document.querySelectorAll('.userPoints')
    const quantityMedal = document.querySelectorAll('.quantityMedal')
    const quantityAvatar = document.querySelectorAll('.quantityAvatar')
    const UserPosition = document.querySelectorAll('.UserPosition')
    const userInfo = JSON.parse(sessionStorage.getItem("loggedUser"));

    for (const element of userPoints) {
        element.innerHTML = userInfo.totalPoints;
    }

    for (const medal of quantityMedal) {
        medal.innerHTML = userInfo.medals.length;
    }

    for (const avatar of quantityAvatar) {
        avatar.innerHTML = userInfo.avatars.length;
    }

    for (const position of UserPosition) {
        position.innerHTML = User.getUserPosition(User.getUserLogged().username);
    }

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
            e.target.reset();

        }

    })

}

updateDataUsers()