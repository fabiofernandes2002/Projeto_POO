class Video {
    idVideo = 0
    epochTitle = ""
    videoTitle = ''
    tags = []
    urlVideo = ''
    chapters = []
    likes = 0
    comments = {}

    constructor(idVideo, epochTitle, videoTitle, tags, urlVideo, chapters, likes, comments) {

        this.idVideo = idVideo;
        this.epochTitle = epochTitle;
        this.videoTitle = videoTitle
        this.videoDescription = videoDescription
        this.tags = tags
        this.urlVideo = urlVideo
        this.chapters = chapters
        this.likes = likes
        this.comments = comments
    }

}


// let videos = [{
//     idVideo: 0,
//     epochTitle: "Tempo dos descobrimentos",
//     videoTitle: 'Expansão Marítima Portuguesa (Parte 1)',
//     tags: [
//         "idade",
//         "moderna",
//         "motivos",
//         "expansão",
//         "estado",
//         "morte",
//         "fernando",
//         "rei",
//         "castela",
//         "mestre",
//         "avis",
//         "aljubarrota",
//         "centralizaçao",
//         "genova",
//         "italia"
//     ],
//     urlVideo: "https://www.youtube.com/watch?v=On2TAh0EejI",
//     chapters: [
//         ["0:00", "Introdução"],
//         ["2:40", "Ínicio da Idade Moderna"],
//         ["3:53", "Os motivos da expansão"],
//         ["10:40", "O estado português"]
//     ],
//     likes: 20,
//     comments: {
//         tomas: "Muito bom",
//         fabio: "ok"
//     }
// }]