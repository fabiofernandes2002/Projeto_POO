initdata();


// Injeta dados na localStorage, se não existirem
function initdata() {

    if (!localStorage.videos) {
        const videos = [{
            idVideo: 1,
            idEpoch: 1,
            videoTitle: 'Expansão Marítima Portuguesa (Parte 1)',
            tags: [
                "Idade Moderna",
                "Motivos",
                "Expansão Marítima",
                "Estado",
                "Morte",
                "D. Fernando",
                "Rei",
                "Castela",
                "Mestre",
                "Avis",
                "Aljubarrota",
                "Centralização",
                "Génova",
                "Italia"
            ],
            urlVideo: "../assets/videos/Expansao_maritima_1.mp4",
            chapters: [
                {time:"0:00",seconds:'0', content:"Introdução"},
                {time:"2:40",seconds:'160', content:"Ínicio da Idade Moderna"},
                {time:"3:53",seconds:'350', content:"Os motivos da expansão"},
                {time:"10:40",seconds:'550',content:"O estado português"}
            ],
            comments: [
                {idUser:5, comment:"Muito bom"},
                {idUser:6, comment:"ok"},
            ], 
            views:0,
            likes:0
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
            urlVideo: "../assets/videos/Expansao_maritima_2.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:"Introdução"},
                {time:"2:40", seconds:'160', content:"Ínicio da Idade Moderna"},
                {time:"3:53", seconds:'350', content:"Os motivos da expansão"},
                {time:"10:40", seconds:'550', content:"O estado português"}
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 3,
            idEpoch: 2,
            videoTitle: 'Portugal: da União Ibérica à Restauração',
            tags: [
                "Lenda de D. Sebastião",
                "Batalha de Alcácer-Quibir",
                "Desputa",
                "Herança da coroa",
                "Filipe II",
                "Catalunha",
                "revolta",
                "1 de dezembro de 1640",
                "guerra da restauração"
            ],
            urlVideo: "../assets/videos/y2mate.com - Portugal da União Ibérica à Restauração_360p.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:"Começo da lenda de D. Sebastião (Batalha de Alcácer-Quibir)"},
                {time:"2:16", seconds:'136', content:"Desputa da herança da coroa"},
                {time:"3:45", seconds:'225', content:"Aclamação de Filipe II à coroa"},
                {time:"6:55", seconds:'415', content:"Revolta em Catalunha e revolta portuguesa"},
                {time:"8:50", seconds:'530', content:"1 de dezembro de 1640 e guerra da restauração"}
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 4,
            idEpoch: 2,
            videoTitle: 'O Misterioso Desaparecimento de D. Sebastião & Batalha de Alcácer-Quibir',
            tags: [
                "historia de D.Sebastião",
                "começo da viagem a Alcácer Quibir",
                "batalha de Alcácer Quibir",
                "consequências futuras da derrota",
                "desaparecimento",
            ],
            urlVideo: "../assets/videos/y2mate.com - O Misterioso Desaparecimento de D Sebastião  Batalha de AlcácerQuibir_360p.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:"introdução"},
                {time:"0:34", seconds:'34', content:"historia de D.Sebastião"},
                {time:"5:00", seconds:'300', content:"começo da viagem a Alcácer Quibir"},
                {time:"6:56", seconds:'416', content:"batalha de Alcácer Quibir"},
                {time:"11:28", seconds:'688', content:"consequências futuras da derrota e desaparecimento"}
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 5,
            idEpoch: 2,
            videoTitle: 'O Domínio Filipino e a Restauração 1993 EBM',
            tags: [
                "historia de evora",
                "miados do seculo 16 decdencia do imperio",
                "susseção",
                "batalha",
                "coroação de Filipe II",
                "decadencia do imperio espanhol",
                "protestos populares",
                "revolta da nobreza",
                "reinado de D. João IX"
            ],
            urlVideo: "../assets/videos/y2mate.com - 15 O Domínio Filipino e a Restauração 1993 EBM_360p.mp4.webm",
            chapters: [
                {time:"0:00", seconds:'0', content:"historia de evora "},
                {time:"2:27", seconds:'147', content:" miados do seculo 16 decdencia do imperio"},
                {time:"5:00", seconds:'300', content:"susseção e a sua batalha "},
                {time:"7:20", seconds:'440', content:"coroação de Filipe II"},
                {time:"8:17", seconds:'497', content:"decadencia do imperio espanhol"},
                {time:"9:20", seconds:'560', content:"protestos populares e revolta da nobreza"},
                {time:"10:34", seconds:'634', content:"reinado de D. João IX"}
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 5,
            idEpoch: 3,
            videoTitle: ' Os Anos da Ditadura Salazarista 1993 EBM',
            tags: [
                "guerra mundial",
                "instablidade politica",
                "movimento",
                "nomeação do ministro das finanças",
                "medidas tomadas por salazar",
                "estagnação evidente do estado portugues",
                "colonias de africa",
                "criação do MUD",
                "revolta dos estudantes",
                "guerra colonial"

            ],
            urlVideo: "../assets/videos/y2mate.com - 23 Os Anos da Ditadura Salazarista 1993 EBM_360p.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:"1 guerra mundial"},
                {time:"1:10", seconds:'70', content:"instablidade politica"},
                {time:"1:51", seconds:'111', content:"movimento 1926"},
                {time:"2:50", seconds:'170', content:"nomeação do ministro das finanças "},
                {time:"3:25", seconds:'205', content:"medidas tomadas por salazar "},
                {time:"4:35", seconds:'275', content:"implementação do estado novo"},
                {time:"7:29", seconds:'449', content:"estagnação evidente do estado portugues"},
                {time:"10:00", seconds:'600', content:"colonias de africa"},
                {time:"10:30", seconds:'630', content:"criação do MUD"},
                {time:"11:57", seconds:'717', content:"revolta dos estudantes e guerra colonial"},
                {time:"14:10", seconds:'850', content:"protestos culturais"}
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 6,
            idEpoch: 3,
            videoTitle: 'A Guerra do Colonial Portuguesa',
            tags: [
                "vinheta",
                "guerra colonial",
                "guerra ultramar",
                "angola é Nossa ",
                "Hino nacional de Portuga",

            ],
            urlVideo: "../assets/videos/y2mate.com - A Guerra do Ultramar 19611975_360p.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:"vinheta"},
                {time:"0:46", seconds:'46', content:"Royalty Free Military Music"},
                {time:"4:00", seconds:'240', content:"Musica de Guerra"},
                {time:"6:20", seconds:'380', content:"Angola é Nossa "},
                {time:"10:06", seconds:'606', content:"A War Without End - Sad String Music"},
                {time:"12:01", seconds:'721', content:"Hino nacional de Portugal"},
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 7,
            idEpoch: 4,
            videoTitle: '25 de abril - História',
            tags: [
                "Ditadura",
                "regime",
                "estado novo",
                "Óscar Carmona",
                "Craveiro Lopes",
                "Américo Tomás"


            ],
            urlVideo: "../assets/videos/y2mate.com - 25 de abril  História 1º ciclo  O Troll explica_360p.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:" Introdução"},
                {time:"0:31", seconds:'48', content:" Ditadura do regime do estado novo"},
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        {
            idVideo: 8,
            idEpoch: 4,
            videoTitle: '25 de Abril de 1974: A Revolução dos Cravos',
            tags: [
                "25 de Abril",
                "Estado Novo",
                "Guerra Colonial",
                "Revolução dos Cravos ",
                "Ponte ",
                "Consequências políticas",
                "Consequências sociais",
                "Consequências económicas",
                "Grândola Vila Morena"

            ],
            urlVideo: "../assets/videos/y2mate.com - 25 de Abril de 1974 A Revolução dos Cravos  História de Portugal_v240P.mp4",
            chapters: [
                {time:"0:00", seconds:'0', content:" Introdução"},
                {time:"0:48", seconds:'48', content:"O que foi o 25 de Abril?"},
                {time:"1:09", seconds:'69', content:"O Estado Novo"},
                {time:"4:00", seconds:'240', content:"A Guerra Colonial Portuguesa"},
                {time:"6:00", seconds:'360', content:" O Estado Novo"},
                {time:"7:08", seconds:'428', content:"A Revolução dos Cravos"},
                {time:"10:03", seconds:'603', content:"A Ponte 25 de Abril"},
                {time:"11:07", seconds:'667', content:"Depois da Revolução dos Cravos"},
                {time:"11:42", seconds:'702', content:"Consequências políticas do 25 de Abril"},
                {time:"12:36", seconds:'756', content:"Consequências sociais do 25 de Abril"},
                {time:"14:17", seconds:'857', content:"Consequências económicas do 25 de Abril"},
                {time:"16:00", seconds:'960', content:"Final"},
                {time:"17:12", seconds:'1032', content:"Grândola Vila Morena"},
            ],
            comments: [
                {idUser:8, comment:"Gostei muito!"},
                {idUser:7, comment:"Ganda explicação, obrigado!"}
            ], 
            views:0,
            likes:0
        },
        ];
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
            description: "Época das grandes navegações, descobrimentos maritímos, e muito mais ",
            videos: [0],
            questions: [0],
            medals: [1],
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 2,
            epochTitle: "Da União Ibérica à Restauração da Independência",
            period : "Séc. XVII",
            image: "./assets/img/uniao_iberica.png",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprenda sobre a revolta que cresceu entre a população, culminando no processo da restauração da independência!",
            videos: [0],
            questions: [0],
            medals: [2],
            requirement: "Inicie Sessão"
        },
        {
            idEpoch: 3,
            epochTitle: "O Estado Novo",
            period : "Séc. XX",
            image: "./assets/img/estadoNovo.jpg",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Aprenda os movimentos e regimes autoritários nascidos na Europa da primeira metade do século XX.",
            videos: [0],
            questions: [0],
            medals: [3],
            requirement: "Complete as Duas Primeiras Épocas"
        },
        {
            idEpoch: 4,
            epochTitle: "25 de Abril de 1974 e o Regime Democrático",
            period : "Séc. XX",
            image: "./assets/img/25_Abril.webp",
            imageStyle:"background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;",
            description: "Saiba tudo sobre os maiores narcos da revolução de 25 de Abril.",
            videos: [0],
            questions: [0],
            medals: [3],
            requirement: "Complete as Duas Primeiras Épocas"
        }
    ];
        localStorage.setItem("epochs", JSON.stringify(epochs));
    }

    if (!localStorage.achievements) {
        const achievements = [
            {
                idAchievement: 1,
                type: "avatar",
                urlImage: "../assets/img/avatars/1.png",
                achievementName: "Beleza pura",
                points:100
            },
            {
                idAchievement: 2,
                type: "avatar",
                urlImage: "../assets/img/avatars/2.png",
                achievementName: "Diplomata",
                points:200
            },
            {
                idAchievement: 3,
                type: "avatar",
                urlImage: "../assets/img/avatars/3.png",
                achievementName: "Estiloso",
                points:300
            },
            {
                idAchievement: 4,
                type: "avatar",
                urlImage: "../assets/img/avatars/4.png",
                achievementName: "Gamer",
                points:400
            },
            {
                idAchievement: 5,
                type: "avatar",
                urlImage: "../assets/img/avatars/5.png",
                achievementName: "Hacker",
                points:500
            },
            {
                idAchievement: 6,
                type: "medal",
                urlImage: "../assets/img/medals/bronze-medal.png",
                achievementName: "Medalha bronze",
                description:"Acertar 100% numa ficha de exercícios",
                points: "",
                idEpochs : []
            },
            {
                idAchievement: 7,
                type: "medal",
                urlImage: "../assets/img/medals/bronze-medal2.png",
                achievementName: "Medalha de bronze-2",
                description:"Concluir as duas primeiras epócas",
                points: "",
                idEpochs : [2]
            },
            {
                idAchievement: 8,
                type: "medal",
                urlImage: "../assets/img/medals/silver-medal.png",
                achievementName: "Medalha de prata",
                description:"Desbloquear todas as epócas",
                points:"",
                idEpochs : []
            },
            {
                idAchievement: 9,
                type: "medal",
                urlImage: "../assets/img/medals/medal2.png",
                achievementName: "Medalha de Ouro",
                description:"Concluir a terceira epóca",
                points:"",
                idEpochs : [2]
            },
            {
                idAchievement: 10,
                type: "medal",
                urlImage: "../assets/img/medals/gold-medal.png",
                achievementName: "Medalha de Ouro-2",
                points:800,
                idEpochs : []
            },
            {
                idAchievement: 11,
                type: "medal",
                urlImage: "../assets/img/medals/winner.png",
                achievementName: "Mestre",
                points:1000,
                idEpochs : []
            },
        ];
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 2000,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0],[3,false,0],[4,false,0]],
            block : false   
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
            medals: [7, 8, 9,],
            avatarImg:'./assets/img/avatars/',
            totalPoints: 20,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            medals: [10,6],
            avatarImg:'./assets/img/avatars/',
            totalPoints: 50,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 100,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 150,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 150,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 150,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 150,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 1400,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 
 
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
            avatarImg:'./assets/img/avatars/',
            totalPoints: 150,
            videosSeen: [],
            videosLiked: [],
            epochs : [[1,false,0],[2,false,0]],
            block : false 

            
        }
        ];

        localStorage.setItem("users", JSON.stringify(users));
    }
}