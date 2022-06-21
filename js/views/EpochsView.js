import * as User from "../models/UserModel.js";
import * as Epoch from "../models/EpochModel.js";

function epochsView(epochs= []) {
    User.init()
    Epoch.init()

    //as funções a seguir já estão documentadas

    renderEpochs()

    document.querySelector("[type='checkbox']").addEventListener("change", function () {
        removeBlockedEpochs(this)
    })


    // ORDENAR EPOCAS
    
    //ORDENAR POR ORDEM DECRESCENTE
    
    const ordenarAsc = document.querySelector("#ordenarAsc")
    
    ordenarAsc.addEventListener("click", ()=>{
        let epochs = Epoch.getEpochs()

        for (const epoch of epochs) {
            let period = epoch.period
            
            if(!period.includes(" - ")){
                let space = period.indexOf(" ")
                period = period.slice(space).trim()
                const periodDecimal = romanToInt(+period)



                console.log(period,periodDecimal);
            }

        }
        //romanToInt()
        document.querySelector(".btnOrdenar").innerHTML = ordenarAsc.innerHTML
        
    })
    
    //ORDENAR POR ORDEM DECRESCENTE
    const ordenarDesc = document.querySelector("#ordenarDesc")
    
    ordenarDesc.addEventListener("click", ()=>{
        
        
        
        
       // romanToInt()
        document.querySelector(".btnOrdenar").innerHTML = ordenarDesc.innerHTML
        
    })
    
    //ORDENAR AS EPOCAS POR ORDEM ALFABETICA
    
    const ordenarAlf = document.querySelector("#ordenarAlf")
    
    ordenarAlf.addEventListener("click", ()=>{
        Epoch.sortEpoch();
        renderEpochs(Epoch.getEpochs());
        document.querySelector(".btnOrdenar").innerHTML = ordenarAlf.innerHTML 
        

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

    const unlockedEpochs = User.isLogged() ? User.getUserLogged().epochs.map(element => element = element[0] ) : []

    let index = 0
    for (const epoch of epochs) {
        /**
         * INDEX DO ELEMENTO DO ARRAY {@link unlockedEpochs} QUE PROVA QUE A {@link epoch} ESTÁ DESBLOQUEADA
         * @type {number}
         */
        const indexId = unlockedEpochs.findIndex(idEpoch => idEpoch === epoch.idEpoch)
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
                        style="height:180px;${epoch.image.includes('/assets/img') ? 'background-image: url(.' + epoch.image + ')' : 'background-image: url(' + epoch.image + ')'};${epoch.imageStyle}">
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

//PROCURAR EPOCAS 
function searchEpoch(){
    let epochs = Epoch.getEpochs()
    Epoch.init()

    let placeCardsHere = document.querySelector("#placeCardsHere").value
    for (let i = 0; i < epochs.length; i++) {
        
        
    }
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
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



/// TRANSFORMAR NUMEROS RUMANOS EM DECIMAIS 
const romanNubers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s) {
    let accumulator = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "I" && s[i + 1] === "V") {
            accumulator += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            accumulator += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            accumulator += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            accumulator += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            accumulator += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            accumulator += 900;
            i++;
        } else {
            accumulator += romanNubers[s[i]];
        }
    }
    return accumulator;

}

epochsView()