let achievements;

// CARREGAR ÉPOCAS DA LOCALSTORAGE
export function init() {
    achievements = localStorage.achievements ? JSON.parse(localStorage.achievements) : [];
}

// OBTER lista de  
export function getAchievements() {
    return achievements;
}

class Achievement {
    idAchievement = 0
    type = "" // medal or avatar
    urlImage = ""
    achievementName = ""
    
    constructor(idAchievement, type, urlImage, name) {
        
        this.idAchievement = idAchievement;
        this.type = type;
        this.urlImage = urlImage;
        this.name = name;

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