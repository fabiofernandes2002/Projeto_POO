import * as User from "../models/UserModel.js";
import * as Video from "../models/VideoModel.js";
import * as Epoch from "../models/EpochModel.js";

function epochView() {
    User.init()
    Video.init()
    Epoch.init()
    renderEpoch()
}

function renderEpoch() {
    const epoch = Epoch.getChoosenEpoch()
    const user = User.getUserLogged()

    document.title = epoch.epochTitle

    const epochInfo = user.epochs.find(epoch => epoch[0] === Epoch.getChoosenEpoch().idEpoch)
    const alreadyDidTheworksheet = epochInfo[1]
    const grade = epochInfo[2]
    let backgroundColorDiv, idDiv = ""

    if (grade < 100 && alreadyDidTheworksheet) {
        backgroundColorDiv = "background-color: #F24444"
    } else if (grade === 100) {
        backgroundColorDiv = "background-color: #4DB964"
    }
    if (alreadyDidTheworksheet) {
        idDiv = "id='worksheetGrade'"
    }

    const epochHeadingHTML = `
        <div class="col-6">
            <div class="row">
                <div class="col-12" style="margin-top: 40px">
                    <h1 id="" style="font-size: 20px; font-family: 'mplus-bold';">${epoch.period}</h1>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-8" style="margin-bottom: 40px">
                    <p style="font-size: 25px; font-family: 'mplus-bold';">${epoch.epochTitle}</p>
                </div>
            </div>
        </div>
        <div class="col-6 d-flex justify-content-end" style="margin:0;padding:0">
            <div width="180" height="180" alt="" style="height:100%;width:180px;background-image: url('.${epoch.image}');${epoch.imageStyle}"></div>
        </div>`

    let resourcesHTML = ""
    const videos = Video.getvideos()
    for (const video of videos) {
        if (video.idEpoch === Epoch.getChoosenEpoch().idEpoch) {
            resourcesHTML += `
            <div class=" p-3 mb-2 rounded" style="background-color: #f2f2f2;">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 1200C268.65 1200 0 931.35 0 600S268.65 0 600 0s600 268.65 600 600s-268.65 600-600 600zM450 300.45v599.1L900 600L450 300.45z"/></svg>
                <a class="resourceName" role="button" style="text-decoration: none; color: black;">
                    <span style="margin-left: 10px;">${video.videoTitle}</span>
                </a>
            </div> `
        }
    }

    const worksheetHTML = `
    <div class="p-3 mt-5 rounded" style="background-color: #fff; box-shadow: 4px 4px 4px #f2f2f2; position: relative">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M23.5 4h-1.67A3.001 3.001 0 0 0 19 2h-6a3.001 3.001 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h5.546a2.49 2.49 0 0 1 .032-1.129l.791-3.051a4.159 4.159 0 0 1 1.01-1.82H11a1 1 0 1 1 0-2h6.86l6.652-6.706A4.36 4.36 0 0 1 27 14.042V7.5A3.5 3.5 0 0 0 23.5 4ZM13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Zm-3 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm1 4h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Zm18.652 3.425l-8.613 8.543c-.352.349-.79.598-1.27.721l-3.02.778a1 1 0 0 1-1.218-1.22l.79-3.051c.118-.456.355-.872.687-1.206l8.57-8.64a2.88 2.88 0 1 1 4.074 4.075Z"/></svg>
        <a href="./worksheet.html" style="margin-left: 10px;text-decoration: none;color:black">Ficha de avaliação</a>
        <div ${idDiv} style="${backgroundColorDiv}" >${alreadyDidTheworksheet? grade + "%": ""}</div>
    </div>`
    document.querySelector('#placeResourcesHere').innerHTML = resourcesHTML + worksheetHTML
    document.querySelector('#placeEpochHeadingHere').innerHTML = epochHeadingHTML

    bindLearnButtons(videos, epoch, user)
}

function bindLearnButtons(videos, choosenEpoch, user) {
    let firstTimeBindingModalElements = 1
    /* https://getbootstrap.com/docs/5.0/components/modal/ */
    const modal = new bootstrap.Modal(document.getElementById('modalVideoTutorial'), {
        keyboard: false
    })

    document.querySelectorAll('.resourceName').forEach((element, index) => {
        element.addEventListener("click", () => {
            const videosSpecificEpoch = videos.filter(video => video.idEpoch === choosenEpoch.idEpoch)
            firstTimeBindingModalElements = renderVideo(videosSpecificEpoch[index], user, firstTimeBindingModalElements, modal)
        })
    });
}

function renderVideo(video, user,firstTimeBindingModalElements,modal) {
    Video.setIdChoosenVideo(video)
    if (!(user.videosSeen.some(idVideo => idVideo === video.idVideo)) && !User.isTeacher()) {
        //ATUALIZAR NA PARTE DO UTILIZADOR
        user.videosSeen.push(video.idVideo)
        User.updateLoggedUserInfo(user)

        //ATUALIZAR NA PARTE DO VIDEO
        video.views += 1
        Video.updateVideoInfo(video)
    }

    const heartIcon = user.videosLiked.some(idVideo => idVideo === video.idVideo) ? "heart_fill" : "heart_outline"
    let result = ""
    document.querySelector('#titleVideo').innerHTML = video.videoTitle
    document.querySelector('.count').innerHTML = video.likes
    document.querySelector('source').src = video.urlVideo

    for (const chapter of video.chapters) {
        result += `<li><span style="color: #3DAAC5;">${chapter.time}</span>  ${chapter.content}</li>`
    }

    document.querySelectorAll('.placeChaptersHere').forEach(ul => {
        ul.innerHTML = result
    });

    document.querySelector('#tagsDiv').innerHTML = `<b>Tags:</b> ${video.tags.join(", ")}`

    document.querySelector('#divNumberViews').innerHTML = video.views

    document.querySelector('#btnHeart').style.background = `url('../assets/img/${heartIcon}.svg') center / contain no-repeat`

    renderComments(video, [...video.comments].reverse())

    modal.show()

    hideShowTags()

    if (firstTimeBindingModalElements) {
        firstTimeBindingModalElements = 0

        document.getElementById('btnHeart').addEventListener('click', () => {
            likeVideo(user)
        })

        const formComment = document.querySelector('#formComment')
        formComment.addEventListener('submit', (e) => {
            e.preventDefault()
            submitComment(user)
            e.target.reset();

        })

        document.querySelector('#showMore').addEventListener("click", () => {
            document.querySelector('#tagsDiv').style.height = document.querySelector('#tagsDiv').style.height === "1.5em" ? "100%" : "1.5em"
            document.querySelector('#showMore').innerHTML = document.querySelector('#showMore').innerHTML === "Mostrar Mais" ? "Mostrar Menos" : "Mostrar Mais"
        })

        window.addEventListener("resize", hideShowTags)
    }

    
}


function renderComments(video, comments) {
    let result = ""
    for (const comment of comments) {
        const user = User.getUsers().find(user => user.idUser === comment.idUser)
        result += `<div class="comment-card">
                        <div class="pic center-display">
                            ${user.username.charAt(0)}
                        </div>
                        <div class="comment-info">
                            <small class="nickname">
                                ${user.username}
                            </small>
                            <p class="comment">
                                ${comment.comment}
                            </p>
                            <div class="comment-bottom">
                                <div class="heart-icon--comment">
                                    ${user.videosLiked.some(idVideo => idVideo === video.idVideo) ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                                </div>
                            </div>
                        </div>
                    </div>`
    }

    document.querySelector('.comments-container').innerHTML = result
}

function submitComment(user, video = Video.getChoosenVideo()) { 
    const commentInput = document.getElementById('inputComment')

    if (commentInput !== '') {

        const newComment = {
            idUser: user.idUser,
            comment: commentInput.value
        }

        video.comments.push(newComment)
        Video.updateVideoInfo(video)
        renderComments(video, [...video.comments].reverse())
    }
}

function likeVideo(user, video = Video.getChoosenVideo()) {
    const likeIcon = document.getElementById('btnHeart')
    if (likeIcon.style.background.includes("heart_outline.svg")) {
        likeIcon.style.background = "url('../assets/img/heart_fill.svg') center / contain no-repeat"
        addRemoveLike(1, user, video)
    } else {
        likeIcon.style.background = "url('../assets/img/heart_outline.svg') center / contain no-repeat"
        addRemoveLike(0, user, video)
    }

}

function addRemoveLike(isToAdd, user, video) {
    let likesCounter = document.querySelector('.count')
    const indexVideo = user.videosLiked.findIndex(idVideo => idVideo === video.idVideo)
    if (isToAdd && indexVideo === -1) {
        likesCounter.innerHTML++
        video.likes++
        user.videosLiked.push(video.idVideo)

    } else if (!isToAdd && indexVideo !== -1) {
        likesCounter.innerHTML--
        video.likes--
        user.videosLiked.splice(indexVideo, 1)
    }

    User.updateLoggedUserInfo(user)
    Video.updateVideoInfo(video)
}

function hideShowTags() {
    document.querySelector('#tagsDiv').style.height = "100%"
    if (document.querySelector('#tagsDiv').offsetHeight > "24") {
        document.querySelector('#tagsDiv').style.height = "1.5em"
        document.querySelector('#showMore').style.display = ""

        if (document.querySelector('#showMore').innerHTML === "Mostrar Menos") {
            document.querySelector('#showMore').innerHTML = "Mostrar Mais"
        }

    } else {
        document.querySelector('#tagsDiv').style.height = "1.5em"
        document.querySelector('#showMore').style.display = "none"
    }
}

epochView()