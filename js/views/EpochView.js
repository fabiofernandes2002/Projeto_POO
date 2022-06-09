import * as User from "../models/UserModel.js";
import * as Video from "../models/VideoModel.js";
import * as Epoch from "../models/EpochModel.js";

function epochView() {
    User.init()
    // Video.init()
    Epoch.init()

    renderEpoch()
}

function renderEpoch() {
    console.log("ok");
    const epoch = Epoch.getChoosenEpoch()
    const result = `
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
    document.querySelector('#placeEpochHeadingHere').innerHTML = result
}

epochView()