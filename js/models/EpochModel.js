import * as User from "../models/UserModel.js";
let epochs;

// CARREGAR ÉPOCAS DA LOCALSTORAGE
export function init() {
    epochs = localStorage.epochs ? JSON.parse(localStorage.epochs) : [];
}

// OBTER lista de Épocas 
export function getEpochs() {
    return epochs;
}

//ORDENAR EPOCAS ALFABETICAMENTE
export function sortEpoch() {
    epochs.sort((a, b) => a.epochTitle.localeCompare(b.epochTitle));
}



//MARCAR A ÉPOCA ESCOLHIDA
export function setChoosenEpoch(epoch) {
    sessionStorage.setItem("choosenEpoch", JSON.stringify(epoch));
}

// ADICIONAR EPOCHS
export function add(period, epochTitle, image, description, requirement) {

    if (epochs.some((epoch) => epoch.epochTitle === epochTitle)) {
        throw Error(`Period with name "${epochTitle}" already exists!`);
    } else {
        epochs.push(new Epoch(period, epochTitle, image, description, requirement));
        localStorage.setItem("epochs", JSON.stringify(epochs));
    }
}

//REMOVER UMA EPOCA
export function removeEpoch(name) {
    epochs = epochs.filter((epochs) => epochs.epochTitle !== name);
    localStorage.setItem("epochs", JSON.stringify(epochs));
}

// VERIFICA EXISTÊNCIA DE ÉPOCA ESCOLHIDA
export function isChoosen() {
    return sessionStorage.getItem("choosenEpoch") ? true : false;
}

// DEVOLVE ÉPOCA ESCOLHIDA
export function getChoosenEpoch() {
    return JSON.parse(sessionStorage.getItem("choosenEpoch"));
}

// ATUALIZA A LISTA DE ÉPOCAS
export function updateEpochInfo(newEpochInfo) {

    //NA LOCAL STORAGE
    newEpochInfo = epochs.map((epochItem) =>
        epochItem.idEpoch === newEpochInfo.idEpoch ? newEpochInfo : epochItem
    );
    localStorage.setItem("epochs", JSON.stringify(newEpochInfo));

    epochs = newEpochInfo
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
    medals = [] //MEDALHA QUE O UTILIZADOR GANHA QUANDO COMPLETA UMA ÉPOCA
    requirement = "" //REQUISITO PARA DESBLOQUEAR A ÉPOCA

    constructor(period = '', 
        epochTitle = '', 
        image = '', 
        description = '', 
        imageStyle = "background-size: contain;background-repeat: no-repeat;background-position: center bottom;",
        videos = [],
        questions = [],
        medals = [],
        requirement = ''
    ) {
        this.idEpoch = epochs.length === 0 ? 1 : epochs.length + 1;
        this.period = period;
        this.imageStyle = imageStyle;
        this.epochTitle = epochTitle;
        this.image = image;
        this.description = description;
        this.videos = videos;
        this.questions = questions;
        this.medals = medals;
        this.requirement = requirement;
    }
}
