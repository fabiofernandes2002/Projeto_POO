import * as User from "../models/UserModel.js";
import * as Achievement from "../models/AchievementsModel.js";

function UserProfileView() {
    User.init()
    Achievement.init()

    changeUserPhoto()

    const userPoints = document.querySelectorAll('.userPoints')
    const quantityMedal = document.querySelectorAll('.quantityMedal')
    const quantityAvatar = document.querySelectorAll('.quantityAvatar')
    const UserPosition = document.querySelectorAll('.UserPosition')
    
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

    // const user = User.getUserLogged()

    // if (user.avatarImg === './assets/img/avatars/') {
    //     imgUser.innerHTML = User.getUserLogged().username.charAt(0)
    // }
    // else{
    //     User.updateLoggedUserInfo(user)
    // }
    
    //imgUser.innerHTML = User.getUserLogged().username.charAt(0)


    updateDataUsers(userInfo)
    renderMedal()
    renderAvatar()
}

function renderAvatar(){
    const imgUser = document.querySelector('.imgUser') 
    const user = User.getUserLogged()

    if (user.avatarImg === './assets/img/avatars/') {
        imgUser.innerHTML = user.username.charAt(0)
    }
    else{
        imgUser.style.background =`url(${"." + user.avatarImg}) center / contain no-repeat `
        
    }
}


function renderMedal() {

    const achievement = Achievement.getAchievements()
    const userMedalProfile = User.getUserLogged()

    let result = ''
    for (const idMedal of userMedalProfile.medals) {
        
        const medal = achievement.filter(achievement => achievement.idAchievement === idMedal )
        //console.log(medal);
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


function changeUserPhoto() {

    const avatars = Achievement.getAchievements().filter((u) => u.type === "avatar");
    const userInfo = User.getUserLogged()
    const points = userInfo.totalPoints

    let modalBody = ''

    //console.log(userInfo);
    for (let pos = 0; pos < avatars.length; pos++) {  
        //console.log(points,avatars[pos].points);
        
        if (points >= avatars[pos].points) {
            modalBody += `
                <div class="col mt-4">
                    <button id="btnAvatarsImg" type="button" class="col rounded bntDesbloqueado">
                        <img src="../assets/img/avatars/${pos+1}.png" id=${pos+1} alt="" width="100%">
                        <p style="color: #45BF63">Desbloqueado</p>
                    </button>
                </div>
            `   
        }
        else{
            modalBody += `
                <div class="col mt-4">
                    <button  type="button" class="col rounded" disabled>
                        <img src="../assets/img/avatars/${pos+1}.png" id=${pos+1} alt="" width="100%">
                        <p style="color: #D9674E">${avatars[pos].points}XP</p>
                    </button>
                </div>
            `
        }
    }

    document.querySelector('#modalBodyAvatars').innerHTML = modalBody
    modalChangeAvatars()
    bindModal()
    
}

function modalChangeAvatars() {
    const btnAvatarsImg = document.querySelectorAll('#btnAvatarsImg')

    for (const btnAvatar of btnAvatarsImg) {
        btnAvatar.addEventListener('click', () => {
            const id = btnAvatar.children[0].id
            changeUserAvatars(id)

            setTimeout(() => {
                location.reload()
            }, 500);
        })
    }
}

function changeUserAvatars(idAvatar) {
    const users = User.getUsers()
    const user = User.getUserLogged()
    console.log(user);
    user.avatarImg = `./assets/img/avatars/${idAvatar}.png`
    
    User.updateLoggedUserInfo(user)
    
}

function bindModal() {
    const btnAvatars = document.querySelector('#btnAvatars');
    const exampleModal = document.querySelector('#exampleModal');

    btnAvatars.addEventListener('click', () => {
        exampleModal.style.display = "block";
        changeUserPhoto();
    })
}


UserProfileView()