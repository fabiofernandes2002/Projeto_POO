initdata();


// Injeta dados na localStorage, se não existirem
function initdata() {

    if (!localStorage.videos) {
        const videos = [{
            idVideo: 1,
            idEpoch: 1,
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
            comments: [
                ["tomas", "Muito bom"],
                ["fabio", "ok"]
            ]
            
        },
        {
            idVideo: 2,
            idEpoch: 1,
            videoTitle: 'Expansão Marítima Portuguesa (Parte 2)',
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
                ["2:40", "CAMP"],
                ["6:15", "As etapas da expansão"]
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
        const questions = [
            {
                idQuestion : 1,
                idEpoch: 1,
                questions: [
                    "Completa a frase com um ano em falta.",
                    "A cidade da Ceuta foi conquistada em Agosto de",
                ],
                category:"fill-the-blanks",
                correctAnswers: ["1415"],
                points:10
            },
            {
                idQuestion : 2,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção correta.",
                    "Após a morte do Infante D.Henrique, a exploração da costa africana foi entregue a Fernão Gomes, um...",
                ],
                category:"quizz",
                incorrectAnswers: [
                    "Um rico senhor nobre.",
                    "destacado elemento do clero."
                ],
                correctAnswers: ["Rico mercador burgês."],
                points:10
            },
            {
                idQuestion : 3,
                idEpoch: 1,
                questions:[
                    "Seleciona a afirmação que justifica a importância da passagem do Cabo Bojador.",
                    ""
                ],
                category:"dropdown",
                incorrectAnswers: [
                    "Consolidou a conquista de Ceuta.",
                    "Permitiu acesso às especiarias asiáticas."
                ],
                correctAnswers: ["Abriu caminho para acesso ao ouro africano."],
                points:10
            },
            {
                idQuestion : 4,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção correta.", 
                    "Qual era a embarcação utilizada pelos portugueses para o transporte de grandes quantiades de ouro brasileiro e de especiarias orentais?"
                ],
                category:"quizz",
                incorrectAnswers: [
                    "Caravela.",
                    "Barca."
                ],
                correctAnswers: ["Nau."],
                points:10
            },
            {
                idQuestion : 5,
                idEpoch: 1,
                questions:[
                    "Completa a frase com a expressão correta.",
                    "Diogo de Silves foi um dos marinheiros da célebre 'Escola de Sagres' e foi ele quem descobriu o arquipélago dos"
                ],
                category:"fill-the-blanks",
                correctAnswers: ["Açores"],
                points:10
            },
            {
                idQuestion : 6,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção correta.",
                    "Em que reinado se deu a descoberta do caminho marítimo para a Índia?"
                ],
                category:"dropdown",
                incorrectAnswers: [
                    "D.João III.",
                    "D.João II."
                ],
                correctAnswers: ["D.Manuel I."],
                points:10
            },
            {
                idQuestion : 7,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção que completa corretamente a frase.",
                    "Ceuta situa-se junto ao Estreito de... "
                ],
                category:"quizz",
                incorrectAnswers: [
                    "Magalhães.",
                    "Bering."
                ],
                correctAnswers: ["Gibraltar."],
                points:10
            },
            {
                idQuestion : 8,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção correta.",
                    "Quando se iniciou e terminou a viagem de circum-navegação?"
                ],
                category:"dropdown",
                incorrectAnswers: [
                    "A viagem iniciou-se em 1498 e terminou em 1500.",
                    "A viagem iniciou-se em 1519 e terminou em 1532."
                ],
                correctAnswers: ["A viagem iniciou-se em 1519 e terminou em 1522."],
                points:10
            },
            {
                idQuestion : 9,
                idEpoch: 1,
                questions:[
                    "Preenche o espaço em branco.",
                    "A viagem de circum-navegação comandada por Fernão de Magalhães partiu de",
                    ", perto de Sevilha, em Espanha."
                ],
                category:"fill-the-blanks",
                correctAnswers: ["Cádis"],
                points:10
            },
            {
                idQuestion : 10,
                idEpoch: 1,
                questions:[
                    "Seleciona a opção que completa corretamente a frase.",
                    "Em 1519, Fernão Magalhães inicia a que será a..."
                ],
                category:"quizz",
                incorrectAnswers: [
                    "primeira viagem ao interior de África.",
                    "primeira viagem ao marítima ao Japão."
                ],
                correctAnswers: ["primeira viagem de circum-navegação."],
                points:10
            },
            {
                idQuestion : 11,
                idEpoch: 2,
                questions:[
                    "Seleciona a opção que completa corretamente a frase.",
                    "Em 1519, Fernão Magalhães inicia a que será a..."
                ],
                category:"quizz",
                incorrectAnswers: [
                    "primeira viagem ao interior de África.",
                    "primeira viagem ao marítima ao Japão."
                ],
                correctAnswers: ["primeira viagem de circum-navegação."],
                points:10
            },

        ];
        localStorage.setItem("questions", JSON.stringify(questions));
    }

    if (!localStorage.epochs) {
        const epochs = [{
            idEpoch: 1,
            epochTitle: "Tempo dos descobrimentos",
            period : "Séc. XV - XVI",
            image: "./assets/img/tempo_dos_descobrimentos.png",
            imageStyle:"background-size: contain;background-repeat: no-repeat;background-position: center bottom;",
            description: "Aprende!",
            videos: [0],
            questions: [0],
            medal: 1,
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 2,
            epochTitle: "Da União Ibérica à Restauração da Independência",
            period : "Séc. XVII",
            image: "./assets/img/uniao_iberica.png",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprende1!",
            videos: [0],
            questions: [0],
            medal: 2,
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 3,
            epochTitle: "teste",
            period : "Séc. XVIII",
            image: "./assets/img/uniao_iberica.png",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprende2!",
            videos: [0],
            questions: [0],
            medal: 3,
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
            username: "Professor",
            email: "professor@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "female",
            avatars: [1],
            medals: [0],
            totalPoints: 2000,
            epochs : [[1,false,0],[2,false,0],[3,false,0]]   
        }, {
            idUser: 2,
            type: 'aluno',
            username: "Damião",
            email: "aluno@gmail.com",
            city: "Porto",
            password: "123",
            birthDate: "20-05-2002",
            sex: "male",
            avatars: [1],
            medals: [1, 2, 3, 4, 5],
            totalPoints: 20,
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
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
            epochs : [[1,false,0],[2,false,0]] 
        }
        ];

        localStorage.setItem("users", JSON.stringify(users));
    }
}