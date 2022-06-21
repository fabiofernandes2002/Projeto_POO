import * as User from "../models/UserModel.js";
import * as Achievement from "../models/AchievementsModel.js";

function UserProfileView() {
    User.init()
    Achievement.init()

    renderAvatars()

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


    updateDataUsers(userInfo)
    renderMedals()
    renderAvatar()
}

function renderAvatar() {
    const imgUser = document.querySelector('.imgUser')
    const user = User.getUserLogged()

    if (user.avatarImg === '') {
        imgUser.innerHTML = user.username.charAt(0)
    } else {
        imgUser.style.background = `url(${user.avatarImg}) center / cover no-repeat `

    }
}


function renderMedals() {

    const achievements = Achievement.getAchievements()
    const userMedalProfile = User.getUserLogged()

    let result = ''
    for (const idMedal of userMedalProfile.medals) { //de todas as medalhas do utilizador

        let medal = achievements.find(achievement => achievement.idAchievement === idMedal)
        result += `
            <div class="medal_owned"
                style="margin-left:10%;transform:translate(calc(0%),35%);background:url(${medal.urlImage}) center / contain no-repeat; width:33.3%;height:60%;display: inline-block">
            </div>

        `
    }


    for (const element of document.getElementsByClassName('medalsUser')) {
        element.innerHTML += result
    }

    animateMedalsInventory()


}

let xPosition = 0, running = false

function animateMedalsInventory() {
    for (const arrowRight of document.querySelectorAll('.arrow-right-medal')) {
        if (document.querySelectorAll('.medal_owned').length/2 <= 1) { 
            arrowRight.style.display = "none"
            continue
        }
        arrowRight.addEventListener('mousedown', ()=>{
            running = true
            pushMedalsLeft(arrowRight)
        })
        arrowRight.addEventListener('mouseup', () => {
            running = false
        })
    }
    for (const arrowLeft of document.querySelectorAll('.arrow-left-medal')) {
        if (document.querySelectorAll('.medal_owned').length/2 <= 1) {
            arrowLeft.style.display = "none"
            continue
        }
        arrowLeft.addEventListener('mousedown', ()=>{
            running = true
            pushMedalsRight(arrowLeft)
        })
        arrowLeft.addEventListener('mouseup', () => {
            running = false
        })
    }

}
function pushMedalsRight(arrowLeft){
    if (xPosition >= 0) {
        running = false
        arrowLeft.style.display = 'none'
    } else {

        if (xPosition > -docum) {
            for (const arrowRight of document.querySelectorAll('.arrow-right-medal')) {
                arrowRight.style.display=""
            }
        }
        xPosition += 1
        for (const medal of document.querySelectorAll('.medal_owned')) {
            medal.style.transform = `translate(calc(${xPosition}%),35%)`
        }
    }
    if (running) {
        window.requestAnimationFrame(()=>pushMedalsRight(arrowLeft))
    }
}
function pushMedalsLeft(arrowRight){
    if (xPosition <= (document.querySelectorAll('.medal_owned').length*33.5)+50) {
        running = false
        arrowRight.style.display = 'none'
    } else {
        if (xPosition < 0) {
            for (const arrowLeft of document.querySelectorAll('.arrow-left-medal')) {
                arrowLeft.style.display=""
            }
        }
        xPosition -= 1
        for (const medal of document.querySelectorAll('.medal_owned')) {
            medal.style.transform = `translate(calc(${xPosition}%),35%)`
        }
    }
    if (running) {
        window.requestAnimationFrame(()=>pushMedalsLeft(arrowRight))
    }
    
}
function updateDataUsers(userInfo) {

    const profileForm = document.querySelector('#profileForm')

    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const txtUsernameChange = document.querySelector('#txtUsernameChange')
        const oldPw = document.querySelector('#oldPw')
        const newPw = document.querySelector('#newPw')

        if (txtUsernameChange.value.trim() === userInfo.username ||
            User.getUsers().some(user => user.username === txtUsernameChange.value.trim())) {
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

            User.updateUserInfo({
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


function renderAvatars() {

    const avatars = Achievement.getAchievements().filter((u) => u.type === "avatar");
    const userInfo = User.getUserLogged()
    const points = userInfo.totalPoints

    let modalBody = ''

    for (let pos = 0; pos < avatars.length; pos++) {

        if (points >= avatars[pos].points) {
            modalBody += `
                <div class="col mt-4">
                    <button type="button" class="col rounded bntDesbloqueado btnAvatarsImg">
                        <img src="${avatars[pos].urlImage}" id=${pos+1} alt="" width="100%" height="70%">
                        <p style="color: #45BF63">Desbloqueado</p>
                    </button>
                </div>
            `
        } else {
            modalBody += `
                <div class="col mt-4">
                    <button  type="button" class="col rounded" disabled>
                        <img src="${avatars[pos].urlImage}" id=${pos+1} alt="" width="100%" height="70%">
                        <p style="color: #D9674E">${avatars[pos].points}XP</p>
                    </button>
                </div>
            `
        }
    }

    document.querySelector('#modalBodyAvatars').innerHTML = modalBody
    modalChangeAvatar()
    bindModal()

}

function modalChangeAvatar() {
    const btnAvatarsImg = document.querySelectorAll('.btnAvatarsImg')
    const avatars = Achievement.getAchievements().filter(achivement => achivement.type === "avatar")
    for (const btnAvatar of btnAvatarsImg) {
        btnAvatar.addEventListener('click', () => {
            const id = btnAvatar.children[0].id

            changeUserAvatars(avatars[id - 1])

            setTimeout(() => {
                location.reload()
            }, 500);
        })
    }
}

function changeUserAvatars(avatar) {
    
    const user = User.getUserLogged()
    user.avatarImg = avatar.urlImage

    User.updateUserInfo(user)

}

function bindModal() {
    const btnAvatars = document.querySelector('#btnAvatars');
    const exampleModal = document.querySelector('#exampleModal');

    btnAvatars.addEventListener('click', () => {
        exampleModal.style.display = "block";
        renderAvatars();
    })
}


UserProfileView()