export default class AchievementModel {
    #idAchievement = 0
    #type = "" // medal or avatar
    #urlImage = ""
    #achievementName = ""
    constructor(idAchievement, type, urlImage, name) {
        
        this.#idAchievement = idAchievement;
        this.#type = type;
        this.#urlImage = urlImage;
        this.#name = name;

    }
}


// let achievements = [{
//     idAchievement : 0,
//     type : "medal",
//     urlImage : "http://",
//     achievementName : "Mestre dos descobrimentos"
// }, 
// {
//     idAchievement :1,
//     type : "avatar",
//     urlImage : "http://",
//     achievementName : "shrek"
// }
// ]