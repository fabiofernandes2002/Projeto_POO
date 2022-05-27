class Video{
<<<<<<< HEAD
    #idVideo = 0
    #epochTitle = ""
    #videoTitle = ''
    #tags = []
    #urlVideo = ''
    #chapters = {}
    #likes = 0
    #comments = {}

    constructor(idVideo, epochTitle, videoTitle, tags, urlVideo,chapters,likes, comments) {
        
        this.#idVideo = idVideo;
        this.#epochTitle = epochTitle;
        this.#videoTitle = videoTitle
        this.#videoDescription = videoDescription
        this.#tags = tags
        this.#urlVideo = urlVideo
        this.#chapters = chapters
        this.#likes = likes
        this.#comments = comments
    }

}


// let videos = [{
//     idVideo : 0,
//     epochTitle:"Tempo dos descobrimentos",
//     videoTitle: 'Chegada a Cabo Branco',
//     tags:[
//         "#chegada", 
//         "#cabo", 
//         "#branco"
//      ],
//     urlVideo:"https://",
//     chapters:{
//         "0:00" : "Introdução",
//         "1:00" : "Desenvolvimento",
//         "2:00" : "Conclusão"
//     },
//     likes: 20,
//     comments: {
//         tomas:"Muito bom",
//         fabio:"ok"
//     }
// }]
=======
    #title = ''
    #description = ''
    #tags = ''
    #urlVideo = ''
    #chapters = {}
    #like = 0
    #comments = ''

    constructor(title, description, tags, urlVideo, chapters, like, comments) {
        
        this.#title = title
        this.#description = description
        this.#tags = tags
        this.#urlVideo = urlVideo
        this.#chapters = chapters
        this.#like = like
        this.#comments = comments
    }

}
>>>>>>> fde4969144ec877b07c50659014d81be70697692
