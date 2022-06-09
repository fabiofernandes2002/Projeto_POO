import * as User from "../models/UserModel.js";
import * as Epoch from "../models/EpochModel.js";

function epochsView() {
    User.init()
    Epoch.init()

    //as funções a seguir já estão documentadas

    renderEpochs()

    document.querySelector("[type='checkbox']").addEventListener("change", function () {
        removeBlockedEpochs(this)
    })
}

/**
 * RENDERIZAR AS CARDS 
 */
function renderEpochs() {
    let epochs = Epoch.getEpochs()
    let result = ""

    /**
     * ARRAY COM AS ÉPOCAS QUE O UTILIZADOR JÁ DESBLOQUEOU
     * @type {Array}
     */
    const unlockedEpochs = User.isLogged() ? User.getUserLogged() : {
        epochs: []
    }

    let index = 0
    for (const epoch of epochs) {
        /**
         * INDEX DO ELEMENTO DO ARRAY QUE PROVA QUE A {@link epoch} ESTÁ DESBLOQUEADA
         * @type {number}
         */
        const indexId = unlockedEpochs.epochs.findIndex(id => id === epoch.idEpoch)
        /**
         * TEXTO HTML QUE PINTA A CARD DE PRETO SE ESTIVER BLOQUEADA
         * @type {string}
         */
        const blockingDiv = indexId === -1 ? `<div class="blocked">${epoch.requirement}</div>` : ''
        result += `
        <div class="col">
            <div class="card card-most-popular-right mb-4 position-relative" style="max-width: 514px;max-height: 180px;">
                ${blockingDiv}
                <div class="row g-0">
                    <div class="col-4"
                        style="height:180px;background-image: url('.${epoch.image}');${epoch.imageStyle}">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h6 class="century-title">${epoch.period}</h6>
                            <h5 class="card-title epoch-card-text">${epoch.epochTitle}</h5>
                            <p class="card-text epoch-card-text">${epoch.description}</p>
                            <div class="text-end">
                                <button class="btn btn-card btn-md rounded-pill btn-explore-epoch"
                                    role="button">Aprender</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        index++
    }
    document.querySelector('#placeCardsHere').innerHTML = result

    bindLearnButtons(epochs)
}

/**
 * ADICIONAR EVENT "CLICK" NOS BOTÕES DAS CARDS
 */
function bindLearnButtons(epochs) {
    document.querySelectorAll('.btn-explore-epoch').forEach((element,index) => {
        element.addEventListener("click", () => {
            Epoch.setChoosenEpoch(epochs[index])
            location.href = "./epoch.html";
        })
    });
}
/**
 * ESCONDER/MOSTRAR AS ÉPOCAS BLOQUEADAS
 */
function removeBlockedEpochs(checkbox) {
    document.querySelectorAll('.blocked').forEach(div => {
        if (checkbox.checked) {
            div.parentNode.parentNode.style.display = "none"
        } else {
            div.parentNode.parentNode.style.display = ""
        }
    });
}

epochsView()