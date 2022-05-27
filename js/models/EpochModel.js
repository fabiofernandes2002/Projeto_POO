class Epoch{
    #idEpoch = 0
    #epochTitle = ""
    #image = ''
    #description = ''
    #videos = []
    #questions = []
    #modal = 0
    constructor(idEpoch, epochTitle, image, description, videos,questions, medal) {
        this.#idEpoch = idEpoch;
        this.#epochTitle = epochTitle;
        this.#image = image;
        this.#description = description;
        this.#videos = videos;
        this.#questions = questions;
        this.#medal = medal;
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


