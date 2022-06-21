import * as User from "../models/UserModel.js";
import * as Epoch from "../models/EpochModel.js";

function navbarView() {
    User.init();
    Epoch.init()

    //as funções a seguir já estão documentadas

    //***DESIGN***********************
    changeNavbarContent()
    animateDropdownTogglers()
    animateSearchBar()
    animateMenuHamburguer()

    //REDIMENSIONAR A PÁGINA
    window.addEventListener('resize', User.debounce(() => {
        changeNavbarContent()
    }))

    window.addEventListener('scroll', animateOnScroll)
    //********************************

    showHidePassword()
    bindRegisterForm()
    bindLoginForm()

    let pathOtherPages, pathIndexPage
    if (!document.querySelector('[src *= "IndexView.js"]')) { //EM QUALQUER PÁGINA QUE NÃO SEJA O INDEX.HTML

        //** || ANIMAÇÕES AO FAZER SCROLL *********************************
        //Em qualquer página que não seja o index.html, não vai haver animações quando fazemos scroll.
        removeScrollAnimations()
        // *******************************************************************

        pathOtherPages = "./"
        pathIndexPage = "../index.html"

    } else {
        pathOtherPages = "./html/"
        pathIndexPage = "./index.html"
    }

    if (User.isLogged()) { // USER AUTENTICADO
        renderLoggedUserContent(pathOtherPages)
    } else {
        document.querySelector("#btnEntrarNavBar").classList.remove("d-none")
    }

    // CLICAR NO BOTÃO LOGOUT (O BOTÃO PODE NÃO EXISTIR POR ISSO USAR "?"" - OPTIONAL CHAINING)
    document.querySelector("#logout") ?.addEventListener("click", (e) => {
        e.preventDefault();
        User.logout(pathIndexPage);

    })
    bindLearnButtons()

}

function bindLearnButtons() {
    document.querySelectorAll('.epoch-item').forEach((element) => {
        element.addEventListener("click", function() {
            
            const epoch = Epoch.getEpochs().find(epoch => epoch.epochTitle === this.innerHTML)
            Epoch.setChoosenEpoch(epoch)
            location.href = "./epoch.html";
        })
    });
}


/**
 * VALIDAR OS DADOS PREENCHIDOS PELO UTILIZADOR NO FORMULÁRIO DE REGISTO
 */
function validateRegistrationData() {
    /**
     * INPUT DA PASSWORD (REGISTO)
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const txtPassword = document.querySelector("#userPasswordRegister")

    /**
     * INPUT DE CONFIRMAR PASSWORD
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const txtConfPassword = document.querySelector("#userPasswordConfirm")

    /**
     * INPUT DO NOME DE UTILIZADOR
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const txtUsername = document.querySelector("#userNameRegister")

    /**
     * INPUT DA LOCALIDADE
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const txtCity = document.querySelector("#txtCity")

    /**
     * INPUT DO EMAIL
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const txtEmail = document.querySelector("#txtEmail")

    /**
     * DATA DE NASCIMENTO
     * @type {string}
     */
    const txtBirthDate = document.querySelector("#txtBirthDate").value
    /**
     * RADIO BUTTON "Feminino"
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const female = document.querySelector("#radioFemale")

    const today = new Date()

    if (!(txtPassword.value === txtConfPassword.value)) {

        throw Error("Password e Confirmar Password não são iguais");

    } else if ( //Se a data de nascimento provar que o utilizador tem menos do que 4 anos
        !((txtBirthDate.substring(0, 4) == (today.getFullYear() - 4) && txtBirthDate.substring(5, 7) <= (today.getMonth() + 1) && txtBirthDate.substring(8, 10) <= (today.getDate())) ||
            (txtBirthDate.substring(0, 4) < (today.getFullYear() - 4)))

    ) {
        throw Error("Tem que ter mais de 4 anos para se poder registar")

    } else {
        /* Criar conta */
        User.add(
            txtUsername.value,
            txtEmail.value,
            txtCity.value,
            txtPassword.value,
            txtBirthDate,
            female.checked ? "Feminino" : "Masculino"
        );
    }

    return [txtUsername.value, txtPassword.value]
}

/**
 * ADICIONAR O EVENTO "SUBMIT" AO FORMULARIO DE REGISTO
 */
function bindRegisterForm() {
    /**
     * FORMULÁRIO DE REGISTO
     * @description Elemento que aparece na modal de registo
     * @type {HTMLElement}
     */
    const formRegister = document.querySelector("#formRegister")

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault()
        let errorFound, usernameAndPassword

        try {
            usernameAndPassword = validateRegistrationData()
        } catch (error) {
            errorFound = 1;
            displayMessage("#divAlertParentRegistration", error.message, "danger")
        }
        if (!errorFound) { //Se os dados foram validados e a conta foi criada
            displayMessage(
                "#divAlertParentRegistration",
                "Conta criada com sucesso!",
                "success"
            )
            User.login(usernameAndPassword[0], usernameAndPassword[1])
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    });
}

/**
 * ADICIONAR EVENTO "SUBMIT" AO FORMULARIO DE LOGIN
 */
function bindLoginForm() {

    // CLICAR NO BOTÃO DE LOGIN
    document.querySelector("#formLogin").addEventListener("submit", (event) => {
        event.preventDefault();
        try {
            User.login(
                document.getElementById("userNameLogin").value,
                document.getElementById("userPasswordLogin").value
            );
            // Wait 1 second before reloading, so the user can see the login success message
            location.reload();
        } catch (e) {
            displayMessage("#divAlertParentLogin", e.message, "danger");
        }
    })
}
/**
 * MOSTRAR UMA MENSAGEM DE ALERTA NO TOPO DO CORPO DA MODAL DE REGISTO
 */
function displayMessage(element, message, type) {
    const divMessage = document.querySelector(element);
    divMessage.innerHTML = "";
    divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

/**
 * RENDERIZAR NOVO CONTEÚDO NA NAVBAR SE O UTILIZADOR ESTIVER AUTENTICADO
 */
function renderLoggedUserContent(path) {
    const menuDropdown = document.querySelector("[aria-labelledby='navbarDropdown1']")
    let result

    document.querySelector("#loggedUser").classList.remove("d-none")
    document.querySelector("#divUsernmame").innerHTML += User.getUserLogged().username
    //document.querySelector('#navbarDropdown1Image').innerHTML += renderAvatar()


    if (User.isTeacher()) { // COMO ADMIN/PROFESSOR
        result = `
                        <div class="position-relative options-menu">
                            <li id="myProfile"><a class="dropdown-item" href=${path+ "myProfile.html"}>Meu Perfil</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li class="manageResources"><a class="dropdown-item" href="${path + "manageResources.html"}">Gerir recursos</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li class="manageResources"><a class="dropdown-item" href="${path + "manageEpochs.html"}">Gerir épocas</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li class="manageResources"><a class="dropdown-item" href="${path + "manageAchiements.html"}">Gerir conquistas</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li id="manageUsers"><a class="dropdown-item" href="../html/manageUser.html">Gerir utilizadores</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li id="logout"><a class="dropdown-item">Sair</a></li>
                        </div>`;
    } else {
        result = `
                        <div class="position-relative options-menu">
                            <li id="myProfile"><a class="dropdown-item" href=${path + "myProfile.html"}>Meu Perfil</a></li>
                        </div>
                        <div class="position-relative options-menu">
                            <li id="logout"><a class="dropdown-item">Sair</a></li>
                        </div>`;
    }
    menuDropdown.innerHTML = result
    renderAvatarNavBar()
}

// função que renderiza o avatar da navbar
function renderAvatarNavBar(){
    const imgUser = document.querySelector('#navbarDropdown1Image') 
    const user = User.getUserLogged()

    if (user.avatarImg === '') {
        imgUser.innerHTML = user.username.charAt(0)
    }
    else{
        imgUser.style.background =`url(${user.avatarImg}) center / cover no-repeat `
        
    }
}

/**
 * MOSTRAR/OCULTAR O CONTEÚDO DO INPUT PASSWORD
 */
function showHidePassword() {
    const eyeDivs = document.querySelectorAll('.eyeDiv');
    eyeDivs.forEach(element => {
        element.addEventListener('click', function () {
            const passwordInput = this.previousElementSibling
            if (passwordInput.getAttribute('type') === 'password') {
                passwordInput.setAttribute('type', "text");
                this.style.background = 'url("../assets/img/eye-open.svg") center / contain no-repeat'
            } else {
                passwordInput.setAttribute('type', "password");
                this.style.background = 'url("../assets/img/eye-close.svg") center / contain no-repeat'
            }
        });
    });
}

// ****************************  DESIGN ********************************************************************************************************************************************
/**
 * ESTILIZAR O TEXTO "Aprender" E A SETA QUE SE ENCONTRA À DIREITA QUANDO O UTILIZADOR CLICA POR CIMA DESSES DOIS ELEMENTOS
 */
function animateDropdownTogglers() {

    /**
     * Elemento <<a>a> que contêm o texto "Aprender" e o ícone da seta que, por defeito, está apontada para baixo
     * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
     * @type {HTMLElement}
     */
    const navbarDropdownTogglers = document.querySelectorAll("#navbarDropdown, #navbarDropdown1 ")

    navbarDropdownTogglers.forEach((element, index) => {
        element.addEventListener("click", () => {
            /**
             * Ícone da seta (por defeito, apontada para baixo) que se encontra à direita do texto "Aprender" 
             * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
             * @type {HTMLElement}
             */
            const iconArrow = document.querySelectorAll(".icon-arrow")[index]

            //Quando este evento é disparado, se o ícone da seta tiver a classe "fa-chevron-down" (i.e, se o ícone for uma seta apontada para baixo), 
            //então esta classe é removida e a classe "fa-chevron-up" é adicionada, portanto, o ícone passa a ser uma seta apontada para cima. 
            // Pode também acontecer o inverso
            iconArrow.classList.toggle("fa-chevron-down")
            iconArrow.classList.toggle("fa-chevron-up")

        })
    });


    /* https://getbootstrap.com/docs/4.1/components/dropdowns/ */

    /**
     *  Quando fechamos os dropdowns da navbar, a cor dos elementos {@link navbarDropdownTogglers} passam a ser pretas
     */
    $('#navbarDropdown').on('hide.bs.dropdown', function () {
        navbarDropdownTogglers[0].style.color = "black"
        if (document.querySelectorAll(".icon-arrow")[0].classList.contains("fa-chevron-up")) {
            document.querySelectorAll(".icon-arrow")[0].classList.add("fa-chevron-down")
            document.querySelectorAll(".icon-arrow")[0].classList.remove("fa-chevron-up")
        }

    })

    $('#navbarDropdown1').on('hide.bs.dropdown', function () {
        navbarDropdownTogglers[0].style.color = "black"
        if (document.querySelectorAll(".icon-arrow")[1].classList.contains("fa-chevron-up")) {
            document.querySelectorAll(".icon-arrow")[1].classList.add("fa-chevron-down")
            document.querySelectorAll(".icon-arrow")[1].classList.remove("fa-chevron-up")
        }

    })

    /**
     *  Quando abrimos o dropdown da navbar, a cor do elemento {@link navbarDropdownTogglers} passa a ser azul -> #4b86ca
     */
    $('#navbarDropdown').on('show.bs.dropdown', function () {
        navbarDropdownTogglers[0].style.color = "#4b86ca"
    })

    /**
     *  Quando passamos o cursor por cima do elemento {@link navbarDropdownTogglers}, a cor do mesmo passa a ser azul -> #4b86ca
     */
    navbarDropdownTogglers[0].addEventListener("mouseover", () => {
        navbarDropdownTogglers[0].style.color = "#4b86ca"
    })

    /**
     *  Quando deslocamos o cursor para fora do elemento {@link navbarDropdownTogglers}, se o dropdown estiver fechado
     *  a cor do deste elemento passa a ser preto
     */
    navbarDropdownTogglers[0].addEventListener("mouseout", () => {
        if ($('#navbarDropdown').dropdown('update')[0].ariaExpanded == "false") {
            navbarDropdownTogglers[0].style.color = "black"
        }
    })

}
/**
 * ANIMAR E ESTILIZAR A BARRA DE PESQUISA
 */
function animateSearchBar() {
    /**
     * Elemento <<a>div> que contêm o botão, representado por um ícone de uma lupa, da barra de pesquisa
     * @description Elemento que aparece na Navbar em dispositivos com uma largura maior do que 768px
     * @type {HTMLElement}
     */
    const divSearchBtn = document.querySelector(".search-button-div")

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

    //Quando digitamos algo no input da barra de pesquisa da navbar, a lupa desloca-se para a direita e aparece o "X"
    document.querySelector(".imputProcurar").addEventListener("input", () => {
        if (document.querySelector(".imputProcurar").value === "") {
            document.querySelector('.search-button-div').style.transform = "translate(0,0)"
            document.querySelector('#x').style.display = "none"
        } else {
            document.querySelector('.search-button-div').style.transform = "translate(40px,0)"
            document.querySelector('#x').style.display = ""
        }
    })

    document.querySelector('#x').addEventListener('click', () => {
        document.querySelector(".imputProcurar").value = ""
        document.querySelector('.search-button-div').style.transform = "translate(0,0)"
        document.querySelector('#x').style.display = "none"
    })
}

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll */

let prevScrollpos = window.pageYOffset;

/**
 * ANIMAR AO FAZER SCROLL
 */
function animateOnScroll() {
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

    const currentScrollPos = window.pageYOffset;

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
 * ANIMAR O MENU HAMBURGUER QUANDO É CLICADO
 */
function animateMenuHamburguer() {

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
}

// https://www.w3schools.com/howto/howto_js_media_queries.asp 
/**
 * MUDAR O LAYOUT DA NAVBAR DE ACORDO COM A LARGURA DA JANELA DO BROWSER
 */
function changeNavbarContent() {

    // BOOTSTRAP GRID TABLE
    // XL --> >= 1200px
    // LG --> >= 992px
    // MD --> >= 768px
    // SM --> >= 576px
    // -  --> < 576px

    //If media query matches 
    if (window.matchMedia("(min-width: 1920px)").matches) { //Se a largura da página for maior ou igual que 1920px

        if (document.querySelector('[src *= "IndexView.js"]')) {
            // || ANIMAÇÕES AO FAZER SCROLL 

            window.removeEventListener('scroll', animateOnScroll);
            /* Adicionar o eventlistener*/
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll()
        }
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


    } else if (window.matchMedia("(min-width: 1200px) and (max-width: 1919px)").matches) { //Se a largura da página for maior ou igual que 1200ox e menor que 1919px


        if (document.querySelector('[src *= "IndexView.js"]')) {
            // || ANIMAÇÕES AO FAZER SCROLL 

            window.removeEventListener('scroll', animateOnScroll);
            /* Adicionar o eventlistener*/
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll()
        }
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
    } else if (window.matchMedia("(min-width: 992px) and (max-width:1199px)").matches) { // Se a largura da página for maior ou igual que 992px e menor que 1199px

        if (document.querySelector('[src *= "IndexView.js"]')) {
            // || ANIMAÇÕES AO FAZER SCROLL 

            window.removeEventListener('scroll', animateOnScroll);
            /* Adicionar o eventlistener*/
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll()
        }
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
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) { // Se a largura da página for maior ou igual que 768px e menor que 991px

        if (document.querySelector('[src *= "IndexView.js"]')) {
            // || ANIMAÇÕES AO FAZER SCROLL 

            window.removeEventListener('scroll', animateOnScroll);
            /* Adicionar o eventlistener*/
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll()
        }
        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 50% e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.add("w-50");
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        //"Aprender" fica visível e fica mais encostado ao botão, exceto "Top10", "Sobre"
        document.querySelector("#aprender").classList.remove("d-inline");

        if (User.isLogged()) {
            document.querySelector("#top10").style.transform = "translateX(-10px)";
        } else {
            document.querySelector("#top10").style.transform = "translateX(60px)";
        }

        document.querySelector("#sobre").classList.remove("d-inline");

        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"
    } else if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) { // Se a largura da página for maior ou igual que 576px e menor que 767px

        if (document.querySelector('[src *= "IndexView.js"]')) {
            // || ANIMAÇÕES AO FAZER SCROLL 

            window.removeEventListener('scroll', animateOnScroll);
            /* Adicionar o eventlistener*/
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll()
        }
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
    } else if (window.matchMedia("(min-width: 450px) and (max-width: 575px)").matches) { // Se a largura da página for maior ou igual que 450px e menor que 575px
        // || ANIMAÇÕES AO FAZER SCROLL 
        //Nos telemóveis não vai haver animações quando fazemos scroll. assim, o site fica mais rápido

        /* Pintamos a navbar e o dropdown menu */
        document.querySelector(".navbar").classList.add("shadow-sm")
        document.querySelector(".navbar").style.backgroundColor = "#fff";
        document.querySelector(".navbar").style.top = "0px";

        document.querySelector("#containerMenuDropdown").style.top = `0px`;
        document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"

        /* Como, em dispositivos móveis, este eventlistener não precisa de ser disparado, removemos o eventlistener*/
        window.removeEventListener('scroll', animateOnScroll);

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 100px e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").style.width = "100px";
        document.querySelector("#btnEntrarNavBar").classList.remove("w-50");
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"
    } else if (window.matchMedia("(min-width: 350px) and (max-width: 449px)").matches) { // Se a largura da página for maior ou igual que 350px e menor que 449px

        // || ANIMAÇÕES AO FAZER SCROLL 
        //Nos telemóveis não vai haver animações quando fazemos scroll. assim, o site fica mais rápido

        /* Pintamos a navbar e o dropdown menu */
        document.querySelector(".navbar").classList.add("shadow-sm")
        document.querySelector(".navbar").style.backgroundColor = "#fff";
        document.querySelector(".navbar").style.top = "0px";

        document.querySelector("#containerMenuDropdown").style.top = `0px`;
        document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"

        /* Como, em dispositivos móveis, este eventlistener não precisa de ser disparado, removemos o eventlistener*/
        window.removeEventListener('scroll', animateOnScroll);

        // || NAVBAR

        //O botão "Entrar" fica visível, o seu width = 90px e está posicionado no extremo direito
        document.querySelector("#btnEntrarNavBar").style.display = ""
        document.querySelector("#btnEntrarNavBar").classList.remove("w-50");
        document.querySelector("#btnEntrarNavBar").style.width = "90pdx";
        document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")


        //A largura do logo é fixa --> 115px 
        document.querySelector("#imgLogo").style.width = "115px"
    } else { // Se a largura da página for menor que 349px

        // || ANIMAÇÕES AO FAZER SCROLL 
        //Nos telemóveis não vai haver animações quando fazemos scroll. assim, o site fica mais rápido

        /* Pintamos a navbar e o dropdown menu */
        document.querySelector(".navbar").classList.add("shadow-sm")
        document.querySelector(".navbar").style.backgroundColor = "#fff";
        document.querySelector(".navbar").style.top = "0px";

        document.querySelector("#containerMenuDropdown").style.top = `0px`;
        document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"

        /* Como, em dispositivos móveis, este eventlistener não precisa de ser disparado, removemos o eventlistener*/
        window.removeEventListener('scroll', animateOnScroll);

        // || NAVBAR 

        //O botão entrar fica invisível
        document.querySelector("#btnEntrarNavBar").style.display = "none"

        //A largura do logo varia de acordo com a largura da página
        document.querySelector("#imgLogo").style.width = "calc(100% + 50px)"
    }

}

function removeScrollAnimations() {
    /* Pintamos a navbar e o dropdown menu */
    document.querySelector(".navbar").classList.add("shadow-sm")
    document.querySelector(".navbar").style.backgroundColor = "#fff";
    document.querySelector(".navbar").style.top = "0px";

    document.querySelector("#containerMenuDropdown").style.top = `0px`;
    document.querySelector("#navbarToggleExternal").style.border = "0.1px solid rgba(0, 0, 0, 0.189)"

    /*removemos o eventlistener*/
    window.removeEventListener('scroll', animateOnScroll);
}
// **********************************************************************************************************************************************************************************

navbarView()