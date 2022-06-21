let videos;

// CARREGAR VIDEOS DA LOCALSTORAGE
export function init() {
    videos = localStorage.videos ? JSON.parse(localStorage.videos) : [];
}

//MARCAR O VÍDEO ESCOLHIDO
export function setIdChoosenVideo(video) {
    sessionStorage.setItem("choosenVideo", video.idVideo);
}

// DEVOLVE O VÍDEO ESCOLHIDO
export function getChoosenVideo() {
    const videoInfo = videos.find(video => video.idVideo === JSON.parse(sessionStorage.getItem("choosenVideo")))
    return videoInfo;
}

// OBTER lista de Videos 
export function getvideos() {
    return videos;
}

// ADICIONAR Videos
export function add(idEpoch, videoTitle, urlVideo, tags, chapters) {

    if (videos.some((video) => video.videoTitle === videoTitle)) {
        throw Error(`Video with name "${videoTitle}" already exists!`);
    } else {
        videos.push(new Video(idEpoch, videoTitle, urlVideo, tags.split(','), chapters));
        localStorage.setItem("videos", JSON.stringify(videos));
    }
}

//REMOVER UMA Videos
export function removeVideo(videoTitle) {
    videos = videos.filter((video) => video.videoTitle !== videoTitle);
    localStorage.setItem("videos", JSON.stringify(videos));
}

export function updateVideoInfo(newVideoInfo) {

    //NA LOCAL STORAGE
    const newVideosList = videos.map((videoItem) =>
        videoItem.idVideo === newVideoInfo.idVideo ? newVideoInfo : videoItem
    );
    localStorage.setItem("videos", JSON.stringify(newVideosList));

    videos = newVideosList
}


class Video {
    idVideo = 0
    idEpoch = 0
    videoTitle = ''
    tags = []
    urlVideo = ''
    chapters = []
    likes = 0
    comments = []
    viewa = 0
    likes = 0

    constructor(idEpoch, videoTitle, urlVideo, tags, chapters, likes, comments) {

        this.idVideo = videos.length === 0 ? 1 : videos.length + 1;
        this.idEpoch = idEpoch;
        this.videoTitle = videoTitle
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