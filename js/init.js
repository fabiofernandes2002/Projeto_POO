initdata();


// Injeta dados na localStorage, se não existirem
function initdata() {

    if (!localStorage.videos) {
        const videos = [{
            idVideo: 0,
            epochTitle: "Tempo dos descobrimentos",
            videoTitle: 'Expansão Marítima Portuguesa (Parte 1)',
            tags: [
                "idade",
                "moderna",
                "motivos",
                "expansão",
                "estado",
                "morte",
                "fernando",
                "rei",
                "castela",
                "mestre",
                "avis",
                "aljubarrota",
                "centralizaçao",
                "genova",
                "italia"
            ],
            urlVideo: "https://www.youtube.com/watch?v=On2TAh0EejI",
            chapters: [
                ["0:00", "Introdução"],
                ["2:40", "Ínicio da Idade Moderna"],
                ["3:53", "Os motivos da expansão"],
                ["10:40","O estado português"]
            ],
            likes: 20,
            comments: {
                tomas: "Muito bom",
                fabio: "ok"
            }
        },
        {
            idVideo: 0,
            epochTitle: "Tempo dos descobrimentos",
            videoTitle: 'Expansão Marítima Portuguesa (Parte 1)',
            tags: [
                "idade",
                "moderna",
                "motivos",
                "expansão",
                "estado",
                "morte",
                "fernando",
                "rei",
                "castela",
                "mestre",
                "avis",
                "aljubarrota",
                "centralizaçao",
                "genova",
                "italia"
            ],
            urlVideo: "https://www.youtube.com/watch?v=On2TAh0EejI",
            chapters: [
                ["0:00", "Introdução"],
                ["2:40", "Ínicio da Idade Moderna"],
                ["3:53", "Os motivos da expansão"],
                ["10:40","O estado português"]
            ],
            likes: 20,
            comments: {
                tomas: "Muito bom",
                fabio: "ok"
            }
        }];
        localStorage.setItem("videos", JSON.stringify(videos));
    }

    if (!localStorage.questions) {
        const questions = [];
        localStorage.setItem("questions", JSON.stringify(questions));
    }

    if (!localStorage.epochs) {
        const epochs = [{
            idEpoch: 0,
            epochTitle: "Tempo dos descobrimentos",
            period : "Séc. XV - XVI",
            image: "./assets/img/tempo_dos_descobrimentos.png",
            imageStyle:"background-size: contain;background-repeat: no-repeat;background-position: center bottom;",
            description: "Aprende!",
            videos: [0],
            questions: [0],
            medal: 0,
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 1,
            epochTitle: "Da União Ibérica à Restauração da Independência",
            period : "Séc. XVII",
            image: "./assets/img/uniao_iberica.png",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprende1!",
            videos: [0],
            questions: [0],
            medal: 0,
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 2,
            epochTitle: "teste",
            period : "Séc. XVIII",
            image: "./assets/img/uniao_iberica.png",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprende2!",
            videos: [0],
            questions: [0],
            medal: 0,
            requirement: "Complete as Duas Primeiras Épocas"
        }];
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
            totalPoints: 2000,
            epochs : [0,1,2]
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
            totalPoints: 20,
            epochs : [0,1]
        },
        {
            idUser: 3,
            type: 'aluno',
            username: "Joana",
            email: "joana@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "female",
            avatars: [],
            medals: [],
            totalPoints: 50,
            epochs : [0,1]
        },
        {
            idUser: 4,
            type: 'aluno',
            username: "Pedro",
            email: "pedro@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 100,
            epochs : [0,1]
        },
        {
            idUser: 5,
            type: 'aluno',
            username: "Miguel",
            email: "miguel@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        },
        {
            idUser: 6,
            type: 'aluno',
            username: "Jacinta",
            email: "jacinta@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "female",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        },
        {
            idUser: 7,
            type: 'aluno',
            username: "Gustavo",
            email: "gustavo@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        },
        {
            idUser: 8,
            type: 'aluno',
            username: "Sebatião",
            email: "sebastiao@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        },
        {
            idUser: 9,
            type: 'aluno',
            username: "Catarina",
            email: "catarina@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "female",
            avatars: [],
            medals: [],
            totalPoints: 1400,
            epochs : [0,1]
        },
        {
            idUser: 10,
            type: 'aluno',
            username: "Zé",
            email: "ze@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        },
        {
            idUser: 11,
            type: 'aluno',
            username: "Abel",
            email: "abel@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [],
            medals: [],
            totalPoints: 150,
            epochs : [0,1]
        }
        ];

        localStorage.setItem("users", JSON.stringify(users));
    }
}