// o catálogo recorre à classe Cat, descrita em CatModel.js
import * as User from "../models/UserModel.js";

function indexView() {
    User.init();

    //funções a seguir já documentadas

    changeIndexContent()

    window.addEventListener('resize', User.debounce(() => {
        changeIndexContent()
    }))

    bindFooter()

}

function bindFooter() {
    if (User.isLogged()){

        document.querySelector('#loginFooter').classList.add("d-none")
        document.querySelector('#registerFooter').classList.add("d-none")

        document.querySelector('#logoutFooter').classList.remove("d-none")
        document.querySelector('#logoutFooter').addEventListener("click", (e) => {
            e.preventDefault()
            User.logout("./index.html");

        })
        
    } else{
        const loginModal = new bootstrap.Modal(document.getElementById('modalLogin'), {
            keyboard: false
        })
    
        const registerModal = new bootstrap.Modal(document.getElementById('modalRegister'), {
            keyboard: false
        })
    
        document.querySelector('#loginFooter').addEventListener("click", (event) => {
            event.preventDefault()
    
            loginModal.show()
        })
    
        document.querySelector('#registerFooter').addEventListener("click", (event) => {
            event.preventDefault()
    
            registerModal.show()
        })
        
    }
    

}


// ****************************  DESIGN ********************************************************************************************************************************************
// https://www.w3schools.com/howto/howto_js_media_queries.asp 
/**
 * MUDAR O LAYOUT DA PÁGINA DE ACORDO COM A LARGURA DA JANELA DO BROWSER
 */
function changeIndexContent() {

    // BOOTSTRAP GRID TABLE
    // XL --> >= 1200px
    // LG --> >= 992px
    // MD --> >= 768px
    // SM --> >= 576px
    // -  --> < 576px

    //If media query matches 
    if (window.matchMedia("(min-width: 1920px)").matches) { //Se a largura da página for maior ou igual que 1920px

        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""

        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "340px"
        document.querySelector("#imgHistory").style.marginTop = "100px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = "5em"
        });

        [...document.querySelectorAll(".card-most-popular-right, .div-margin-right")].forEach(element => {
            element.style.marginRight = "5em"
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = "5em"
        });


        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_1920.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "200px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "700px"

        // cards
        document.querySelector("#cardBelow1").classList.add("d-none")
        document.querySelector("#cardBelow1").classList.remove("mt-5", "mb-5")
        document.querySelector("#cardBelow2").classList.add("d-none")
        document.querySelector("#midCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("ms-5", "mb-5")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"
    } else if (window.matchMedia("(min-width: 1200px) and (max-width: 1919px)").matches) { //Se a largura da página for maior ou igual que 1200ox e menor que 1919pc
        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""

        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "340px"
        document.querySelector("#imgHistory").style.marginTop = "100px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = "5em"
        });

        [...document.querySelectorAll(".card-most-popular-right, .div-margin-right")].forEach(element => {
            element.style.marginRight = "5em"
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = "5em"
        });


        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_1920.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "200px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "700px"

        // cards
        document.querySelector("#cardBelow1").classList.add("d-none")
        document.querySelector("#cardBelow1").classList.remove("mt-5", "mb-5")
        document.querySelector("#cardBelow2").classList.add("d-none")
        document.querySelector("#midCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("ms-5", "mb-5")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"


    } else if (window.matchMedia("(min-width: 992px) and (max-width:1199px)").matches) { // Se a largura da página for maior ou igual que 992px e menor que 1199px

        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""

        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "2em"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "300px"
        document.querySelector("#imgHistory").style.marginTop = "60px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = "5em"
        });

        //Os quatro cards referentes às épocas mais populares
        document.querySelectorAll(".card-most-popular-left").forEach(element => {
            element.style.marginLeft = "5em"
        });
        document.querySelectorAll(".card-most-popular-right, .div-margin-right").forEach(element => {
            element.style.marginRight = "5em"
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = "5em"
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_1366.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "150px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "518px"

        // cards
        document.querySelector("#cardBelow1").classList.add("d-none")
        document.querySelector("#cardBelow1").classList.remove("mt-5", "mb-5")
        document.querySelector("#cardBelow2").classList.add("d-none")
        document.querySelector("#midCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.remove("ms-5", "mb-5")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"


    } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) { // Se a largura da página for maior ou igual que 768px e menor que 991px

        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "230px"
            element.style.height = "275px"
        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"


        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "230px"
        document.querySelector("#imgHistory").style.marginTop = "70px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = ""
        });

        //Os quatro cards referentes às épocas mais populares
        document.querySelectorAll(".card-most-popular-left").forEach(element => {
            element.style.marginLeft = ""
        });
        document.querySelectorAll(".card-most-popular-right, .div-margin-right").forEach(element => {
            element.style.marginRight = ""
        });

        [...document.querySelectorAll(".div-headings-index, .div-margin-left")].forEach(element => {
            element.style.marginLeft = ""
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_1366.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "90px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "458px"

        // cards
        document.querySelector("#cardBelow1").classList.remove("d-none")
        document.querySelector("#cardBelow1").classList.remove("mt-5", "mb-5")
        document.querySelector("#cardBelow1 > div").style.marginBottom = "91px"
        document.querySelector("#cardBelow2").classList.add("d-none")
        document.querySelector("#midCard").classList.add("d-none")
        document.querySelector("#lastCard").classList.remove("d-none")
        document.querySelector("#lastCard").classList.add("ms-5", "mb-5")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"

    } else if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) { // Se a largura da página for maior ou igual que 576px e menor que 767px

        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""
        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "340px"
        document.querySelector("#imgHistory").style.marginTop = "60px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = ""
        });

        //Os quatro cards referentes às épocas mais populares
        document.querySelectorAll(".card-most-popular-left").forEach(element => {
            element.style.marginLeft = ""
        });
        document.querySelectorAll(".card-most-popular-right, .div-margin-right").forEach(element => {
            element.style.marginRight = ""
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = ""
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_720.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "100px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "500px"

        // cards
        document.querySelector("#cardBelow1").classList.remove("d-none")
        document.querySelector("#cardBelow1").classList.add("mt-5", "mb-5")
        document.querySelector("#cardBelow1 > div").style.marginBottom = "0px"
        document.querySelector("#cardBelow2").classList.remove("d-none")
        document.querySelector("#midCard").classList.add("d-none")
        document.querySelector("#lastCard").classList.add("d-none")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"

    } else if (window.matchMedia("(min-width: 450px) and (max-width: 575px)").matches) { // Se a largura da página for maior ou igual que 450px e menor que 575px

        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""
        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "200px"
        document.querySelector("#imgHistory").style.marginTop = "120px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = ""
        });

        //Os quatro cards referentes às épocas mais populares
        document.querySelectorAll(".card-most-popular-left").forEach(element => {
            element.style.marginLeft = ""
        });
        document.querySelectorAll(".card-most-popular-right, .div-margin-right").forEach(element => {
            element.style.marginRight = ""
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = ""
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "/assets/img/fundo_720.jpg"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "100px"

        //O tamanho da letra do botão "Explorar Recursos" aumenta
        document.querySelector("#btnLandingPage").style.fontSize = "16px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "500px"

        // cards
        document.querySelector("#cardBelow1").classList.remove("d-none")
        document.querySelector("#cardBelow1").classList.add("mt-5", "mb-5")
        document.querySelector("#cardBelow1 > div").style.marginBottom = "0px"
        document.querySelector("#cardBelow2").classList.remove("d-none")
        document.querySelector("#midCard").classList.add("d-none")
        document.querySelector("#lastCard").classList.add("d-none")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "15px"

    } else if (window.matchMedia("(min-width: 350px) and (max-width: 449px)").matches) { // Se a largura da página for maior ou igual que 350px e menor que 449px
        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""

        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "150px"
        document.querySelector("#imgHistory").style.marginTop = "100px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = ""
        });

        //Os quatro cards referentes às épocas mais populares
        document.querySelectorAll(".card-most-popular-left").forEach(element => {
            element.style.marginLeft = ""
        });
        document.querySelectorAll(".card-most-popular-right, .div-margin-right").forEach(element => {
            element.style.marginRight = ""
        });

        [...document.querySelectorAll(".div-headings-index , .div-margin-left, .card-most-popular-left")].forEach(element => {
            element.style.marginLeft = ""
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_420.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "60px"

        //O tamanho da letra do botão "Explorar Recursos" diminui
        document.querySelector("#btnLandingPage").style.fontSize = "13px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "450px"

        // cards
        document.querySelector("#cardBelow1").classList.remove("d-none")
        document.querySelector("#cardBelow1").classList.add("mt-5", "mb-5")
        document.querySelector("#cardBelow1 > div").style.marginBottom = "0px"
        document.querySelector("#cardBelow2").classList.remove("d-none")
        document.querySelector("#midCard").classList.add("d-none")
        document.querySelector("#lastCard").classList.add("d-none")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "13px"

    } else { // Se a largura da página for menor que 349px
        // || index.html 

        //cards dos fundadores
        document.querySelectorAll(".card-fundador").forEach(element => {
            element.style.width = "250px"
            element.style.height = ""

        });
        //card do luis paiva
        document.querySelector('.luis-paiva').style.marginLeft = "0"

        //primeira imagem 
        document.querySelector("#imgHistory").style.width = "150px"
        document.querySelector("#imgHistory").style.marginTop = "100px"

        //As duas primeiras frases e o primeiro botão do index.html
        document.querySelectorAll(".first-elements-index").forEach(element => {
            element.style.marginLeft = ""
        });

        //imagem de fundo
        document.querySelector("#imgBackground").style.backgroundImage = "url(/assets/img/fundo_420.jpg)"

        // O texto "Prepara-te para conhecer [...]" sobe
        document.querySelector("#divTextLandingPage").style.marginTop = "30px"

        //O tamanho da letra do botão "Explorar Recursos" diminui
        document.querySelector("#btnLandingPage").style.fontSize = "12px"

        //tamanho da primeira secção
        document.querySelector("#divImgHistory").style.height = "450px"

        // cards
        document.querySelector("#cardBelow1").classList.remove("d-none")
        document.querySelector("#cardBelow1").classList.add("mt-5", "mb-5")
        document.querySelector("#cardBelow1 > div").style.marginBottom = "0px"
        document.querySelector("#cardBelow2").classList.remove("d-none")
        document.querySelector("#midCard").classList.add("d-none")
        document.querySelector("#lastCard").classList.add("d-none")

        //O tamanho do texto " De uma forma simples e [...]"
        document.querySelector("#pLandingPage").style.fontSize = "13px"
    }
}
// **********************************************************************************************************************************************************************************
indexView()