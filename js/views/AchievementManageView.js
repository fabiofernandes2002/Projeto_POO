import * as Achievement from "../models/AchievementsModel.js"

function achievementView() {
    Achievement.init()
    renderAchievement()
    //addNewAchievement()
}
function renderAchievement() {

    const achievements = Achievement.getAchievements()
    let avatars = ''
    let medals = ''
    for (const achievement of achievements) {
        
        if (achievement.type === "avatar") {
            avatars += `
                <div class="col-sm-3 mb-2">
                    <div class="card">
                    <div class="card-body">
                        <img
                        class="card-img-top"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2">${achievement.achievementName}</h5>
                        <p class="card-text text-center">${achievement.points}XP</p>
                        <button class="btn btn-danger removerConquista">Remover</button>
                    </div>
                    </div>
                </div>
            `
        } else {

            
            medals += `
                <div class="col-sm-3 mb-2">
                    <div class="card">
                    <div class="card-body">
                        <img
                        class="card-img-top"
                        src="${achievement.urlImage}"
                        alt="" 
                        />
                        <h5 class="card-title text-center my-2">${achievement.achievementName}</h5>
                        <p class="card-text text-center">${achievement.points === undefined ? achievement.description : achievement.points + "XP"}</p>
                        <button class="btn btn-danger btnRemove">Remover</button>
                    </div>
                    </div>
                </div>
            `
        }
    }
    document.querySelector('#bodyAvatares').innerHTML = avatars
    document.querySelector('#bodyMedals').innerHTML = medals
    const modalAddNewAchievement = document.querySelector('#modalAddNewAchievement')
    modalAddNewAchievement.addEventListener('submit', function (e) {
        e.preventDefault()
        addNewAchievement()
        e.target.reset();
    })
}

// function addNewAchievement() {
    
//     const achievements = Achievement.getAchievements()

//     const sltAchievements = document.querySelector('#sltAchievements').value
//     const txtUrl = document.querySelector('#txtUrl').value
//     const txtName = document.querySelector('#txtName').value
//     const txtDescription = document.querySelector('#txtDescription').vlaue
//     const quantityXP = document.querySelector('#quantityXP').value
//     const formCheck = document.querySelectorAll('.form-check-input:checked').value

//     let avatars = ''
//     let medals = ''
//     for (const achievement of achievements){
//         if (sltAchievements == 'avatar' ) {
//             avatars += `
//                 <div class="col-sm-3 mb-2">
//                     <div class="card">
//                     <div class="card-body">
//                         <img
//                         class="card-img-top"
//                         src="${achievement.txtUrl}"
//                         alt="" 
//                         />
//                         <h5 class="card-title text-center my-2">${achievement.txtName}</h5>
//                         <p class="card-text text-center">${achievement.quantityXP}XP</p>
//                         <button class="btn btn-danger removerConquista">Remover</button>
//                     </div>
//                     </div>
//                 </div>
//             `
//             Achievement.add(sltAchievements,txtUrl, txtName,quantityXP)
            
//         }else{
//             medals += `
//                 <div class="col-sm-3 mb-2">
//                     <div class="card">
//                     <div class="card-body">
//                         <img
//                         class="card-img-top"
//                         src="${achievement.txtUrl}"
//                         alt="" 
//                         />
//                         <h5 class="card-title text-center my-2">${achievement.txtName}</h5>
//                         <p class="card-text text-center">${achievement.quantityXP === undefined ? achievement.txtDescription : achievement.quantityXP + "XP"}</p>
//                         <button class="btn btn-danger btnRemove">Remover</button>
//                     </div>
//                     </div>
//                 </div>
//             `
//             Achievement.add(sltAchievements,txtUrl, txtName, txtDescription,quantityXP)
            
//         }
//     }
    

// }

achievementView()