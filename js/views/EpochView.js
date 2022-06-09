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
    console.log(videos);
    for (const video of videos) {
        console.log(video.idEpoch);
        if (video.idEpoch === Epoch.getChoosenEpoch().idEpoch) {
            resourcesHTML += `
            <div class=" p-3 mb-2 rounded" style="background-color: #f2f2f2;">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 1200C268.65 1200 0 931.35 0 600S268.65 0 600 0s600 268.65 600 600s-268.65 600-600 600zM450 300.45v599.1L900 600L450 300.45z"/></svg>
                <a href="#modalVideoTutorial" data-bs-toggle="modal" role="button" style="text-decoration: none; color: black;"><span style="margin-left: 10px;">${video.videoTitle}</span></a>
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
}

epochView()