import * as User from "../models/UserModel.js";
import * as Epoch from "../models/EpochModel.js";

function epochsView() {
    User.init()
    Epoch.init()
    renderEpochs()
}

function renderEpochs() {
    let epochs = Epoch.getEpochs()
    let result = ""
    for (const epoch of epochs) {
        result += `
        <div class="col">
            <div class="card card-most-popular-right mb-4" style="max-width: 514px;max-height: 180px;">
                <div class="row g-0">
                    <div class="col-4"
                        style="height:180px;background-image: url('.${epoch.image}');${epoch.imageStyle}">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h6 class="century-title">${epoch.period}</h6>
                            <h5 class="card-title" style="text-overflow: ellipsis;white-space: nowrap;
                            overflow: hidden;">${epoch.epochTitle}</h5>
                            <p class="card-text" style="text-overflow: ellipsis;white-space: nowrap;
                            overflow: hidden;">${epoch.description}</p>
                            <div class="text-end">
                                <a class="btn btn-card btn-md rounded-pill   " href="#"
                                    role="button">Aprender</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.querySelector('#placeCardsHere').innerHTML = result
}

epochsView()