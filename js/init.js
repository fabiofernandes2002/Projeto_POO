initdata();


// Injeta dados na localStorage, se não existirem
function initdata() {

    if (!localStorage.videos) {
        const videos = [];
        localStorage.setItem("videos", JSON.stringify(videos));
    }

    if (!localStorage.questions) {
        const questions = [];
        localStorage.setItem("questions", JSON.stringify(questions));
    }

    if (!localStorage.epochs) {
        const epochs = [];
        localStorage.setItem("epochs", JSON.stringify(epochs));
    }

    if (!localStorage.achievements) {
        const achievements = [{
            idAchievement: 1,
            type: "avatar",
            urlImage: "avatar1.png",
            achievementName: "FirstAvatar"
        }];
        localStorage.setItem("achievements", JSON.stringify(achievements));
    }

    // USERS
    if (!localStorage.users) {
        const users = [{
            idUser: 1,
            type: 'professor',
            username: "Maria",
            email: "professor@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "female",
            avatars: [1],
            medals: [0],
            totalPoints: 2000
        }, {
            idUser: 2,
            type: 'aluno',
            username: "Damião",
            email: "aluno@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 0
        }];

        localStorage.setItem("users", JSON.stringify(users));
    }
}