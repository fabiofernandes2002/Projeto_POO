let achievements;

// CARREGAR AS ACHIEVEMENTS DA LOCALSTORAGE
export function init() {
    achievements = localStorage.achievements ? JSON.parse(localStorage.achievements) : [];
}

// OBTER lista de  achievements
export function getAchievements() {
    return achievements;
}

// ADICIONAR ACHIEVEMENTS
export function add(type, urlImage, achievementName, points, description) {
    
    if (achievements.some((achievement) => achievement.achievementName === achievementName)) {
        throw Error(`Achievement with name "${achievementName}" already exists!`);
      } 
      else {
        achievements.push(new Achievement(type, urlImage, achievementName, points, description));
        localStorage.setItem("achievements", JSON.stringify(achievements));
    }
}

class Achievement {
    idAchievement = 0
    type = "" // medal or avatar
    urlImage = ""
    achievementName = ""
    points = 0
    description = ""
    
    constructor(idAchievement, type, urlImage, achievementName, points, description) {
        
        this.idAchievement = idAchievement;
        this.type = type;
        this.urlImage = urlImage;
        this.achievementName = achievementName;
        this.points = points
        this.description = description
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