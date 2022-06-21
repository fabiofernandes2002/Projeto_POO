let achievements;

// CARREGAR AS ACHIEVEMENTS DA LOCALSTORAGE
export function init() {
    achievements = localStorage.achievements ? JSON.parse(localStorage.achievements) : [];
}

// OBTER lista de  achievements
export function getAchievements() {
    return achievements;
}

// OBTER lista de avatares
export function getAvatars() {
    return achievements.filter(achievement => achievement.type === "avatar")
}


export function updateMedalsInfo(newMedalInfo) {

    //NA LOCAL STORAGE
    const newMedal = epochs.map((medalItem) =>
        medalItem.idEpoch === newMedalInfo.idEpoch ? newVideoInfo : medalItem
    );
    localStorage.setItem("epochs", JSON.stringify(newMedal));

    epochs = newMedal
}

// ADICIONAR ACHIEVEMENTS
export function add(type, urlImage, achievementName, points, description, ckeckboxes) {

    if (achievements.some((achievement) => achievement.achievementName.toLowerCase() === achievementName.toLowerCase())) {
        throw Error(`Conquista com o nome "${achievementName}" já existe!`);
    }else if (!["avatar", "medal"].includes(type)) {
        throw Error(`Especifique o tipo`);

    }else if (points === 0 && type === "medal" && ckeckboxes.length === 0) {
        throw Error(`Especifique um número de pontos ou épocas`);
    }
    achievements.push(new Achievement(type, urlImage, achievementName, points, description));
    localStorage.setItem("achievements", JSON.stringify(achievements));
}

// REMOVER ACHIEVEMENTS
export function removeAchievement(achievementName) {
    achievements = achievements.filter((achievement) => achievement.achievementName !== achievementName);
    localStorage.setItem("achievements", JSON.stringify(achievements));
}

class Achievement {
    idAchievement = 0
    type = "" // medal or avatar
    urlImage = ""
    achievementName = ""
    points = 0
    description = ""
    
    constructor(type = '', urlImage = '', achievementName = '', points = 0, description = '') {
        
        this.idAchievement = achievements.length === 0 ? 1 : achievements.length + 1;
        this.type = type;
        this.urlImage = urlImage;
        this.achievementName = achievementName;
        this.points = points
        this.description = description
    }
}
