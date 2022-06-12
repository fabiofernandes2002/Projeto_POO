import * as User from "../models/UserModel.js";
import * as Achievement from "../models/AchievementsModel.js";

function UserProfileView() {
    User.init()
    Achievement.init()
    const userPoints = document.querySelectorAll('.userPoints')
    const quantityMedal = document.querySelectorAll('.quantityMedal')
    const quantityAvatar = document.querySelectorAll('.quantityAvatar')
    const UserPosition = document.querySelectorAll('.UserPosition')
    const imgUser = document.querySelector('.imgUser')
    const userInfo = User.getUserLogged();

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
        position.innerHTML = User.getUserPosition(userInfo.username);
    }

    imgUser.innerHTML = User.getUserLogged().username.charAt(0)


    updateDataUsers(userInfo)
    renderMedal()
}

function renderMedal() {

    const achievement = Achievement.getAchievements()
    const userMedalProfile = User.getUserLogged()

    let result = ''
    for (const idMedal of userMedalProfile.medals) {
        
        const medal = achievement.filter(achievement => achievement.idAchievement === idMedal )
        console.log(medal);
        result += `
            <div class="ms-4"
                style="transform:translateY(35%);background:url(${medal[0].urlImage}) center / contain no-repeat; width:33.3%;height:60%;display: inline-block">
            </div>

        `
    }

    document.querySelector('#medalsUser').innerHTML += result
    

}

function updateDataUsers(userInfo) {

    const profileForm = document.querySelector('#profileForm')

    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const txtUsernameChange = document.querySelector('#txtUsernameChange')
        const oldPw = document.querySelector('#oldPw')
        const newPw = document.querySelector('#newPw')

        if (txtUsernameChange.value.trim() === userInfo.username ||
            User.getUsers().some(user => user.username === txtUsernameChange.value.trim())) 
        {
            Swal.fire({
                icon: 'error',
                title: "Nome de utilizador inválido!",
                confirmButtonColor: "#4DB964",
                confirmButtonText: "Tentar novamente",
            });
            
        } else if (oldPw.value !== userInfo.password) {
            Swal.fire({
                icon: 'error',
                title: "Não inseriste corretamente a password atual!",
                confirmButtonColor: "#4DB964",
                confirmButtonText: "Tentar novamente",
            });
        } else if (newPw.value === userInfo.password) {
            Swal.fire({
                icon: 'error',
                title: "Não podes mudar para a mesma palavra-passe!",
                confirmButtonColor: "#4DB964",
                confirmButtonText: "Tentar novamente",
            });
        } else {

            User.updateLoggedUserInfo({
                ...userInfo,
                username: txtUsernameChange.value.trim(),
                password: newPw.value
            })

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

UserProfileView()