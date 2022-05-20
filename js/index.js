/**
 * Elemento <<a>a> que contêm o texto "Aprender" e o ícone da seta que, por defeito, está apontada para baixo
 * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
 * @type {HTMLElement}
 */
const navbarDropdownToggle = document.querySelector("#navbarDropdown")

/**
 * Elemento <<a>div> que contêm o botão, representado por um ícone de uma lupa, da barra de pesquisa
 * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
 * @type {HTMLElement}
 */
const divSearchBtn = document.querySelector(".search-button-div")

navbarDropdownToggle.addEventListener("click", () => {

    /**
     * Ícone da seta (por defeito, apontada para baixo) que se encontra à direita do texto "Aprender" 
     * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
     * @type {HTMLElement}
     */
    const iconArrow = document.querySelector("#iconArrow")

    //Quando este evento é disparado, se o ícone da seta tiver a classe "fa-chevron-down" (i.e, se o ícone for uma seta apontada para baixo), 
    //então esta classe é removida e a classe "fa-chevron-up" é adicionada, portanto, o ícone passa a ser uma seta apontada para cima. 
    // Pode também acontecer o inverso
    iconArrow.classList.toggle("fa-chevron-down")
    iconArrow.classList.toggle("fa-chevron-up")

})

/* https://getbootstrap.com/docs/4.1/components/dropdowns/ */

/**
 *  Quando fechamos o dropdown da navbar, a cor do elemento {@link navbarDropdownToggle} passa a ser preta
 */
$('#navbarDropdown').on('hide.bs.dropdown', function () {
    navbarDropdownToggle.style.color = "black"
})

/**
 *  Quando abrimos o dropdown da navbar, a cor do elemento {@link navbarDropdownToggle} passa a ser azul -> #4b86ca
 */
$('#navbarDropdown').on('show.bs.dropdown', function () {
    navbarDropdownToggle.style.color = "#4b86ca"
})

/**
 *  Quando passamos o cursor por cima do elemento {@link navbarDropdownToggle}, a cor do mesmo passa a ser azul -> #4b86ca
 */
navbarDropdownToggle.addEventListener("mouseover", () => {
    navbarDropdownToggle.style.color = "#4b86ca"
})

/**
 *  Quando deslocamos o cursor para fora do elemento {@link navbarDropdownToggle}, se o dropdown estiver fechado
 *  a cor do deste elemento passa a ser preto
 */
navbarDropdownToggle.addEventListener("mouseout", () => {
    if ($('#navbarDropdown').dropdown('update')[0].ariaExpanded == "false") {
        navbarDropdownToggle.style.color = "black"
    }
})

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll */

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    /**
     * Elemento <<a>nav>
     * @description Navbar
     * @type {HTMLElement}
     */
    const navbar = document.querySelector(".navbar")

    /**
     * Elemento <<a>div>
     * @description Menu que aparece quando clicamos no menu hamburguer
     * @type {HTMLElement}
     */
    const menuDropdown = document.querySelector("#containerMenuDropdown")

    //Se o site foi deslizado menos do que 65px (altura da navbar) para cima, ainda conseguimos ver a navbar fixa no topo da página com o fundo transparente
    if (currentScrollPos <= 65) {

        navbar.classList.remove("shadow-sm")
        navbar.style.top = `-${currentScrollPos}px`;
        navbar.style.backgroundColor = "transparent";

        menuDropdown.style.top = `-${currentScrollPos}px`;
        document.querySelector("#navbarToggleExternal").style.border = "none"

    } //Caso contrário, se fizermos scroll para cima, aparece a navbar com um fundo branco e com uma sombra
    else if (prevScrollpos > currentScrollPos) {

        navbar.classList.add("shadow-sm")
        navbar.style.backgroundColor = "#fff";
        navbar.style.top = "0px";

        menuDropdown.style.top = `0px`;
        document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"

    } //Caso contrário, se fizermos scroll para baixo, a navbar desaparece   
    else {
        navbar.style.top = "-65px";
        menuDropdown.style.top = `-63px`;
        document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"
    }
    prevScrollpos = currentScrollPos;
}

/**
 *  Quando passamos o cursor por cima do elemento {@link divSearchBtn}, a cor da respetiva lupa passa a ser azul -> #4b86ca
 */
divSearchBtn.addEventListener("mouseover", () => {
    document.querySelector(".fa-magnifying-glass").style.color = "#4b86ca"
})

/**
 *  Quando deslocamos o cursor para fora do elemento {@link divSearchBtn}, a cor do deste elemento passa a ser preto
 */
divSearchBtn.addEventListener("mouseout", () => {
    document.querySelector(".fa-magnifying-glass").style.color = "black"
})

//Esta estrutura de repetição for anima o menu hamburger da navbar quando este é premido
for (const element of document.querySelectorAll(".menu-hamburguer, .menu-hamburguer-after")) {

    element.addEventListener("click", () => {

        //Se clicarmos no menu hamburguer no momento em que estiver representado por três barras deitadas na horizontal,
        //o mesmo passará a ser representado por duas barras em forma de "X"
        if (document.querySelector(".menu-hamburguer").style.display == "") {

            //O menu hamburguer é pintado da cor da bandeira de Portugal
            for (const element of document.querySelectorAll("[class*=verde]")) {
                element.style.backgroundColor = "green"
            }
            for (const element of document.querySelectorAll("[class*=amarelo]")) {
                element.style.backgroundColor = "yellow"
            }
            for (const element of document.querySelectorAll("[class*=vermelho]")) {
                element.style.backgroundColor = "red"
            }

            //Algumas partes da barra do meio do menu hamburguer são movidas para a barra de baixo
            for (const element of document.querySelectorAll(" [class*=verde-1], [class*=vermelho-1]")) {
                element.classList.add("sair-1")
            }
            for (const element of document.querySelectorAll(" [class*=verde-2], [class*=vermelho-2]")) {
                element.classList.add("sair-2")
            }

            //400 milisegundos depois, essas partes da barra do meio deixam de estar visíveis e o menu é substituido por outro 
            // em que a barra de cima e a barra de baixo são rotacionadas de forma a que se cruzem e formem um "X" 
            setTimeout(
                () => {
                    document.querySelector(".menu-hamburguer").style.display = "none"
                    document.querySelector(".menu-hamburguer-after").style.display = ""

                    document.querySelector("#navbarToggleExternal").style.display = ""
                    document.querySelector("#navbarToggleExternal").classList.add("menuShow")
                    document.querySelector("#navbarToggleExternal").classList.remove("menuHide")
                }, 400);




        } else { //Se clicarmos no menu hamburguer no momento em que estiver representado por duas barras em forma de "X",
            //o mesmo passará a ser representado por três barras deitadas na horizontal

            document.querySelector("#navbarToggleExternal").classList.remove("menuShow")
            document.querySelector("#navbarToggleExternal").classList.add("menuHide")
            setTimeout(() => {
               document.querySelector("#navbarToggleExternal").style.display = "none" 
            }, 400);
            
            document.querySelector(".menu-hamburguer").style.display = ""
            document.querySelector(".menu-hamburguer-after").style.display = "none"

            for (const element of document.querySelectorAll("[class*=sair-2]")) {
                element.classList.remove("sair-2")
            }
            for (const element of document.querySelectorAll("[class*=sair-1]")) {
                element.classList.remove("sair-1")
            }
            for (const element of document.querySelectorAll("[class*=vermelho]")) {
                element.style.backgroundColor = ""
            }
            for (const element of document.querySelectorAll("[class*=amarelo]")) {
                element.style.backgroundColor = ""
            }
            for (const element of document.querySelectorAll("[class*=verde]")) {
                element.style.backgroundColor = ""
            }
        }
    })
}

// https://www.w3schools.com/howto/howto_js_media_queries.asp 
/**
 * Muda o layout da página de acordo com a largura desta
 */
function resizeContent() {

    // BOOTSTRAP GRID TABLE
    // XL --> >= 1200px
    // LG --> >= 992px
    // MD --> >= 768px
    // SM --> >= 576px

    // Se a largura da página for maior ou igual que 992px
    if (window.matchMedia("(min-width: 992px)").matches) { // If media query matches

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 50% e está posicionado no centro
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.add("w-50");
        document.querySelector("#btnEntrarNavBar").classList.remove("position-absolute", "end-0", "top-50", "translate-middle-y") //https://getbootstrap.com/docs/5.0/utilities/position/

        //"Top10", "Sobre" e "Aprender" ficam visíveis
        document.querySelector("#top10").classList.add("d-inline")
        document.querySelector("#sobre").classList.add("d-inline");
        document.querySelector("#aprender").classList.add("d-inline");
        document.querySelector("#aprender").style.transform = "translateX(25px)"
        document.querySelector("#top10").style.transform = "translateX(25px)";

        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"



    } // Se a largura da página for maior ou igual que 768px e menor que 991px
    else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 50% e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.add("w-50");
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        //"Aprender" fica visível e fica mais encostado ao botão, exceto "Top10", "Sobre"
        document.querySelector("#aprender").classList.remove("d-inline");
        document.querySelector("#top10").style.transform = "translateX(60px)";
        document.querySelector("#sobre").classList.remove("d-inline");

        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"



    } // Se a largura da página for maior ou igual que 576px e menor que 767px
    else if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 60% e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.remove("w-50");
        document.querySelector("#btnEntrarNavBar").style.width = "60%"
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        //"Top10", "Sobre" e "Aprender" ficam invisíveis

        document.querySelector("#sobre").classList.remove("d-inline");
        document.querySelector("#aprender").classList.remove("d-inline");
        document.querySelector("#aprender").style.display = "none";


        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"


    } // Se a largura da página for maior ou igual que 450px e menor que 575px
    else if (window.matchMedia("(min-width: 450px) and (max-width: 575px)").matches) {

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 100px e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").style.width = "100px";
        document.querySelector("#btnEntrarNavBar").classList.remove("w-50");
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"



    } // Se a largura da página for maior ou igual que 350px e menor que 449px
    else if (window.matchMedia("(min-width: 350px) and (max-width: 449px)").matches) {

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 90px e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.remove("w-50");
        document.querySelector("#btnEntrarNavBar").style.width = "90px";
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")


        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"


    } // Se a largura da página for menor que 349px
    else {

        //O botão entrar fica invisível
        document.querySelector("#btnEntrarNavBar").style.display = "none"

        //A largura do logo varia de acordo com a largura da página
        document.querySelector("#imgLogo").style.width = "calc(100% + 50px)"
    }
}

/**
 * Chama a função que foi passada como argumento para a função debounce 300 milisegundos depois da página ter 
 * sido redimensionada
 * @param {function} func - Função definida no addEventListener 
 * @returns {function} - Função que declará a variável "timer" com um setTimeout quando pararmos de redimensionar a página
 */
function debounce(func) { // função debouncing inspirada do site https://flaviocopes.com/canvas/
    let timer;
    return () => {
        if (timer) {
            clearTimeout(timer)
        } // if(timer) se timer tiver um valor, caso contrário não funciona
        timer = window.setTimeout(func, 300)
    };
};

window.addEventListener('resize', debounce(() => {
    resizeContent()
}))

resizeContent()

//Quando digitamos algo no input da barra de pesquisa da navbar, a lupa desloca-se para a direita e aparece o "X"
document.querySelector("#imputProcurar").addEventListener("input", ()=> {
    if (document.querySelector("#imputProcurar").value === "") {
        document.querySelector('.search-button-div').style.transform="translate(0,0)"
        document.querySelector('#x').style.display="none"
    }else{
        document.querySelector('.search-button-div').style.transform="translate(40px,0)"
        document.querySelector('#x').style.display=""
    }
})

document.querySelector('#x').addEventListener('click', ()=> {
    document.querySelector("#imputProcurar").value = ""
    document.querySelector('.search-button-div').style.transform="translate(0,0)"
    document.querySelector('#x').style.display="none"
})