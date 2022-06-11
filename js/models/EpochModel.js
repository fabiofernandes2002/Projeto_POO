let epochs;

// CARREGAR ÉPOCAS DA LOCALSTORAGE
export function init() {
    epochs = localStorage.epochs ? JSON.parse(localStorage.epochs) : [];
}

// OBTER lista de Épocas 
export function getEpochs() {
    return epochs;
}

//MARCAR A ÉPOCA ESCOLHIDA
export function setChoosenEpoch(epoch) {
    sessionStorage.setItem("choosenEpoch", JSON.stringify(epoch));
}

// VERIFICA EXISTÊNCIA DE ÉPOCA ESCOLHIDA
export function isChoosen() {
    return sessionStorage.getItem("choosenEpoch") ? true : false;
}

// DEVOLVE ÉPOCA ESCOLHIDA
export function getChoosenEpoch() {
    return JSON.parse(sessionStorage.getItem("choosenEpoch"));
}
class Epoch {
    idEpoch = 0
    period = "" // P.E "SÉC. XV"
    imageStyle = "" // ESTILO CSS DA IMAGEM
    epochTitle = "" // TÍTULO DA ÉPOCA
    image = '' // URL DA IMAGEM
    description = '' // DESCRITIVO DA ÉPOCA
    videos = [] //LISTA COM OS IDS DOS VIDEOS
    questions = [] //LISTA COM OS IDS DAS QUESTÕES
    medal = 0 //MEDALHA QUE O UTILIZADOR GANHA QUANDO COMPLETA UMA ÉPOCA
    requirement = "" //REQUISITO PARA DESBLOQUEAR A ÉPOCA

    constructor(idEpoch, period, imageStyle, epochTitle, image, description, videos, questions, medal, requirement) {
        this.idEpoch = idEpoch;
        this.period = period;
        this.imageStyle = imageStyle;
        this.epochTitle = epochTitle;
        this.image = image;
        this.description = description;
        this.videos = videos;
        this.questions = questions;
        this.medal = medal;
        this.requirement = requirement;
    }
}

// let epochs = [{
//     idEpoch:0,
//     epochTitle: "Tempo dos descobrimentos",
//     image:"http://",
//     description:"lasdasd",
//     videos: {
//         1:0,
//         2:1
//     },
//     questions: {
//         1:0,
//         2:1
//     },
//     medal:0
// }]