import * as Achievement from "../models/AchievementsModel.js"
import * as Epoch from "../models/EpochModel.js";
import * as User from "../models/UserModel.js"

function achievementView() {
    Achievement.init()
    Epoch.init()
    renderAchievement(Achievement.getAchievements())
    renderCheckBoxes()

    document.querySelector('#sltAchievements').addEventListener("change", () => {
        if (document.querySelector('#sltAchievements').value === "avatar") {

            document.querySelector('#txtDescription').disabled = true
            for (const checkbox of document.querySelectorAll('[type="checkbox"]')) {
                checkbox.disabled = true
            }
        } else {
            document.querySelector('#txtDescription').disabled = false
            for (const checkbox of document.querySelectorAll('[type="checkbox"]')) {
                checkbox.disabled = false
            }
        }

    })

    document.querySelector('#quantityXP').addEventListener("input", function () {
        if (this.value !== "") {
            for (const checkbox of document.querySelectorAll('[type="checkbox"]')) {
                checkbox.checked = false;
                checkbox.disabled = true

            }
        } else {
            for (const checkbox of document.querySelectorAll('[type="checkbox"]')) {
                checkbox.disabled = false
            }
        }

    })
}

function renderAchievement() {

    const achievements = Achievement.getAchievements()
    let avatars = ''
    let medals = ''
    for (const achievement of achievements) {

        if (achievement.type === "avatar") {
            avatars += `
                <div class="col mb-2">
                    <div class="card" style="height:100%">
                    <div class="card-body">
                        <img
                        class="card-img-top" width="100%" height="60%"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2" style = "text-overflow: ellipsis;white-space: nowrap;
                        overflow: hidden;">${achievement.achievementName}</h5>
                        <p class="card-text text-center" style = "word-break: break-all;height:10%;width:100%">${achievement.points}XP</p>
                        <button id="${achievement.achievementName}" class="btn btn-danger btnRemove">Remover</button>
                    </div>
                    </div>
                </div>
            `
        } else {


            medals += `
                <div class="col mb-2">
                    <div class="card" style="height:100%">
                    <div class="card-body">
                        <img
                        class="card-img-top" width="100%" height="60%"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2" style = "text-overflow: ellipsis;white-space: nowrap;
                        overflow: hidden;">${achievement.achievementName}</h5>
                        <p class="card-text text-center" style = "word-break: break-all;height:10%;width:100%">${achievement.points === 0 ? achievement.description : achievement.points + "XP"}</p>
                        <button id="${achievement.achievementName}" class="btn btn-danger btnRemove">Remover</button>
                    </div>
                    </div>
                </div>
            `
        }
    }
    document.querySelector('#bodyAvatares').innerHTML = avatars
    document.querySelector('#bodyMedals').innerHTML = medals

    // CLICAR NO BOTÃO REMOVER
    const btnRemoves = document.querySelectorAll(".btnRemove");
    for (const button of btnRemoves) {
        button.addEventListener("click", () => {
            Swal.fire({
                title: `Tens a certeza que queres eliminar o(a) " ${button.id} "!`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Sim',
                denyButtonText: 'Não',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const url = Achievement.getAchievements().find((achievement) => achievement.achievementName === button.id).urlImage
                    const achievementName = button.id
                    Achievement.removeAchievement(achievementName)
                    User.removeAchievement(url)
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                    Swal.fire('Guardado!')

                } else if (result.isDenied) {
                    Swal.fire(`A conquista "${button.id}" não foi eliminada! `)
                }
            })

        });
    }

}

function renderCheckBoxes() {
    const epochs = Epoch.getEpochs()
    let checkbox = ''
    for (const epoch of epochs) {
        checkbox += `
            <div class="form-check">
                <input class="form-check-input epochName" type="checkbox" value="${epoch.idEpoch}" id="check${epoch.idEpoch}">
                <label class="form-check-label" for="check${epoch.idEpoch}">
                    ${epoch.epochTitle}
                </label>
            </div>
        `
    }
    document.querySelector('#ckeckBoxs').innerHTML = checkbox
}

function configureMedal(quantityXP, ckeckboxes) {
    const achievementId = Achievement.getAchievements().length
    const epochs = Epoch.getEpochs()
    if (+quantityXP === 0) {

        for (const ckeckBox of ckeckboxes) {
            const idEpoch = ckeckBox.value
            const epoch = epochs.find(epoch => epoch.idEpoch === +idEpoch).medals
            epoch.push(achievementId)
            Epoch.updateEpochInfo(epoch)
        }
    }

    renderCheckBoxes()
}



document.querySelector('#modalAddNewAchievement').addEventListener('submit', function (e) {
    e.preventDefault()
    const sltAchievements = document.querySelector('#sltAchievements').value
    const txtUrl = document.querySelector('#txtUrl').value
    const txtName = document.querySelector('#txtName').value
    const quantityXP = document.querySelector('#quantityXP').value
    const txtDescription = document.querySelector('#txtDescription').value
    const ckeckboxes = document.querySelectorAll('.epochName:checked')
    try {
        Achievement.add(sltAchievements, txtUrl, txtName, +quantityXP, txtDescription, ckeckboxes)
        renderAchievement(Achievement.getAchievements());
        alert(`${sltAchievements === "medal" ? "Medalha adicionada" : "Avatar adicionado"} com sucesso!`);
        configureMedal(quantityXP, ckeckboxes)

    } catch (error) {
        alert(error.message);
    }

})

achievementView()