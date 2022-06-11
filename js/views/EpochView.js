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

    const worksheetHTML =`
    <div class="p-3 mt-5 rounded" style="background-color: #fff; box-shadow: 4px 4px 4px #f2f2f2;">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M23.5 4h-1.67A3.001 3.001 0 0 0 19 2h-6a3.001 3.001 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h5.546a2.49 2.49 0 0 1 .032-1.129l.791-3.051a4.159 4.159 0 0 1 1.01-1.82H11a1 1 0 1 1 0-2h6.86l6.652-6.706A4.36 4.36 0 0 1 27 14.042V7.5A3.5 3.5 0 0 0 23.5 4ZM13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2Zm-3 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Zm1 4h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Zm18.652 3.425l-8.613 8.543c-.352.349-.79.598-1.27.721l-3.02.778a1 1 0 0 1-1.218-1.22l.79-3.051c.118-.456.355-.872.687-1.206l8.57-8.64a2.88 2.88 0 1 1 4.074 4.075Z"/></svg>
    <a href="./worksheet.html" style="margin-left: 10px;">Teste de avaliação</a>
    </div>`
    document.querySelector('#placeResourcesHere').innerHTML = resourcesHTML + worksheetHTML
    document.querySelector('#placeEpochHeadingHere').innerHTML = epochHeadingHTML

    bindLearnButtonsVideo(videos, epoch)
}

function bindLearnButtonsVideo(videos, choosenEpoch) {
    /* https://getbootstrap.com/docs/5.0/components/modal/ */
    const myModal = new bootstrap.Modal(document.getElementById('modalVideoTutorial'), {
        keyboard: false
    })

    document.querySelectorAll('.resourceName').forEach((element,index) => {
        element.addEventListener("click", () => {
            const videosSpecificEpoch = videos.filter(video => video.idEpoch === choosenEpoch.idEpoch)
            myModal.show()
            renderVideo(videosSpecificEpoch[index])
        })
    });
}

function renderVideo(video) {
    let result = ""
        result += `
        <div class="modal-content">
            <div class="modal-header shadow-sm" style="background-color:white">
                <h5 class="modal-title" style="color:black">${video.videoTitle}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12 mb-3">
                        ${video.tags}
                    </div>
                    <div class="col-8">
                        <div class="ratio ratio-16x9">
                            <video width="320" height="240" controls>
                                <source src="${video.urlVideo}" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="col-4">
                        <h3 style="font-family: 'mplus-bold'; font-size:16px">Capítulos</h3>
                        <ul style="list-style-type: none;">
                        <li><span style="color: #3DAAC5;">${video.chapters[0].time}</span>  ${video.chapters[0].content}</li>
                        <li><span style="color: #3DAAC5;">${video.chapters[1].time}</span>  ${video.chapters[1].content}</li>
                        <li><span style="color: #3DAAC5;">${video.chapters[2].time}</span>  ${video.chapters[2].content}</li>
                        <li><span style="color: #3DAAC5;">${video.chapters[3].time}</span>  ${video.chapters[3].content}</li>
                        </ul>
                    </div>
                    <div>
                        <form id='formComment'>
                            <div class="row">
                                <div class="col-2 mt-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0z"/></g></svg>
                                    167
                                </div>
                                <div class="col-2 mt-3" id="heart_icon">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="inputComment" class="form-label">Comentários</label>
                                <input type="text" id="inputComment" style="box-shadow: none !important;background: none;border-width: 0 0 1px 0;" class="form-control" name="" placeholder="adicionar comentário" required="required">
                            </div>
                            <div class="col-6 mt-2 text-end">
                                <button type="submit" class="btn btn-outline-primary">Comentar</button>
                            </div>
                        </form>
                        <div class="likes__count">
                            <i class="far fa-heart"></i>
                            <small class="count">0</small>
                        </div>
                        <div class="comments__container center__display">
                            <div class="comment__card">
                            <div class="pic center__display">
                            ${userInfo.username.charAt(0)}
                            </div>
                            <div class="comment__info">
                            <small class="nickname">
                                ${userInfo.username}
                            </small>
                            <p class="comment">
                                ${video.comment}
                            </p>
                            <div class="comment__bottom">
                                <div class="heart__icon--comment">
                                    ${video.comments.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                                </div>
                            </div>
                        </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        
    document.querySelector('#videoModalBody').innerHTML = result
    
    const likeIcon = document.getElementById('heart_icon')
    likeIcon.addEventListener('click', likeVideo)

    const formComment = document.querySelector('#formComment')
    formComment.addEventListener('submit', (e) => {
        e.preventDefault()
        submitComment(video)
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        e.target.reset();
        
    })
}

//const divListComments = document.querySelector('.comments')
const usernameForm = document.querySelectorAll('#usernameForm')
const userInfo = JSON.parse(sessionStorage.getItem("loggedUser"));

let positiveFeedback = false
let likesCount = 0



function submitComment(video) {
    
    User.init()
    Video.init()
    const videos = Video.getvideos()
    for (const element of usernameForm) {
        element.innerHTML = userInfo.username
    }

    const inputComment = document.querySelector('#inputComment')
    const commentForm = inputComment.value
    //console.log(userInfo.username, commentForm);

    if (userInfo.username && commentForm !== '') {
       
        const newComment = {
            'username': userInfo.username,
            'comment': commentForm,
            'typeOfFeedback': positiveFeedback
        }
        
        // upsert(newComment)
        //video.comments.push(newComment);
        //console.log(newComment);
        // const videoSubstituty = videos.find(el => el.video === video)
        // videoSubstituty.comments.push(newComment);
        const videoList = JSON.parse(localStorage.getItem("videos"));
        const newVideoList = videoList.map((videoItem) =>
            videoItem.idVideo === video.idVideo
                ? { ...videoItem,username:userInfo.username, comment: commentForm, typeOfFeedback: positiveFeedback }
                : videoItem
            );
        localStorage.setItem("users", JSON.stringify(newVideoList));

        if(positiveFeedback === true){
            addLikes()
        }
        addComment(newComment)
    }
}

function likeVideo() {
    const likeIcon = document.getElementById('heart_icon')
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
        //set comment to liked
        positiveFeedback = true
    } 
    else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        
        // set comment to not liked
        positiveFeedback = false
    }
    
}

function addLikes(){
    const likes_count = document.querySelector('.count')
    likesCount++
    likes_count.innerHTML = likesCount
}

function addComment(item) {
    
    let result = ''
    // select first letter of the username
    const letter = (item.username).charAt(0)

    // add html
    result += `
    <div class="pic center__display">
                    ${letter}
                </div>
                <div class="comment__info">
                    <small class="nickname">
                        ${item.username}
                    </small>
                    <p class="comment">
                        ${item.comment}
                    </p>
                    <div class="comment__bottom">
                        <div class="heart__icon--comment">
                            ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                        </div>
                    </div>
                </div>
    `
    // insert comment into the div
    document.querySelector('.comment__card').innerHTML = result

}

// function upsert(video, item) { // (1)
//     const i = video.findIndex(_item => _item.idVideo === item.idVideo);
//     if (i > -1) video[i] = item; // (2)
//     else video.push(item);
// }



epochView()