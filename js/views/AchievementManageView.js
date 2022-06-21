import * as Achievement from "../models/AchievementsModel.js"
import * as Epoch from "../models/EpochModel.js";

function achievementView() {
    Achievement.init()
    Epoch.init()
    renderAchievement(Achievement.getAchievements())
    renderCheckBoxs()
    //addNewAchievement()
}
function renderAchievement() {

    const achievements = Achievement.getAchievements()
    let avatars = ''
    let medals = ''
    for (const achievement of achievements) {
        
        if (achievement.type === "avatar") {
            avatars += `
                <div class="col mb-2">
                    <div class="card">
                    <div class="card-body">
                        <img
                        class="card-img-top"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2">${achievement.achievementName}</h5>
                        <p class="card-text text-center">${achievement.points}XP</p>
                        <button id="${achievement.achievementName}" class="btn btn-danger btnRemove">Remover</button>
                    </div>
                    </div>
                </div>
            `
        } else {

            
            medals += `
                <div class="col mb-2">
                    <div class="card">
                    <div class="card-body">
                        <img
                        class="card-img-top"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2">${achievement.achievementName}</h5>
                        <p class="card-text text-center">${achievement.points === "" ? achievement.description : achievement.points + "XP"}</p>
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
                    Achievement.removeAchievement(button.id)
                    setTimeout(function(){window.location.reload(); ;}, 2000);;
                    Swal.fire('Saved!', '', 'success')
                     
                } else if (result.isDenied) {
                  Swal.fire(`A conquista "${button.id}" não foi eliminada! `)
                }
              })   
            // if (confirm("Deseja mesmo remover a conquista?")) {
            //     Achievement.removeAchievement(button.id);
            //     location.reload();
            // }
        });
    }
    
}

//const ckeckBoxs = document.querySelector('#ckeckBoxs');
function renderCheckBoxs() {
    
    const epochs = Epoch.getEpochs()
    //console.log(epochs);
    let checkbox = ''
    for (const epoch of epochs) {
        checkbox += `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="${epoch.idEpoch}" id="check${epoch.idEpoch}">
                <label class="form-check-label" for="check${epoch.idEpoch}">
                    ${epoch.epochTitle}
                </label>
            </div>
        `
        //console.log(epoch.epochTitle);
    }
    document.querySelector('#ckeckBoxs').innerHTML = checkbox
}

function configureMedals() {
    const epochs = Epoch.getEpochs()
    const ckeckBoxs = document.querySelectorAll('.form-check-input:checked')
    for (const ckeckBox of ckeckBoxs) {
            
        const idEpoch = ckeckBox.value
        console.log(ckeckBox.value);
        const idEspecific = epochs.findIndex(id => id.idEpoch === idEpoch)
        epochs[idEspecific].medals.push(achievement.length + 1)
        
    }


    renderCheckBoxs()
}



const achievement = Achievement.getAchievements()
document.querySelector('#modalAddNewAchievement').addEventListener('submit', function (e) {
    e.preventDefault()
    const sltAchievements = document.querySelector('#sltAchievements').value
    const txtUrl = document.querySelector('#txtUrl').value
    const txtName = document.querySelector('#txtName').value
    const quantityXP = document.querySelector('#quantityXP').value
    const txtDescription = document.querySelector('#txtDescription').value
    const ckeckBoxs = document.querySelectorAll('.form-check-input:checked')
    try {
        Achievement.add(sltAchievements,txtUrl ,txtName, quantityXP, txtDescription,)
        
        
        
        alert("Achievement added with success!");
        renderAchievement(Achievement.getAchievements());
        
      } catch (error) {
        alert(error.message);
    }
    e.target.reset();
    configureMedals()
    
    
})

achievementView()