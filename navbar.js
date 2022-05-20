document.querySelector("#navbarDropdown").addEventListener("click", () => {
    const iconArrow = document.querySelector("#iconArrow")
    iconArrow.classList.toggle("fa-chevron-down")
    iconArrow.classList.toggle("fa-chevron-up")

})

/* https://getbootstrap.com/docs/4.1/components/dropdowns/ */
$('#navbarDropdown').on('hide.bs.dropdown', function () {
    document.querySelector("#navbarDropdown").style.color = "black"
})

$('#navbarDropdown').on('show.bs.dropdown', function () {
    document.querySelector("#navbarDropdown").style.color = "#4b86ca"
})


document.querySelector("#navbarDropdown").addEventListener("mouseover", () => {
    document.querySelector("#navbarDropdown").style.color = "#4b86ca"
})

document.querySelector("#navbarDropdown").addEventListener("mouseout", () => {
    if ($('#navbarDropdown').dropdown('update')[0].ariaExpanded == "false") {
        document.querySelector("#navbarDropdown").style.color = "black"
    }
})

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll */

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 65) {
        console.log("ok");
        document.querySelector(".navbar").style.top = `-${currentScrollPos}px`;
        document.querySelector(".navbar").style.backgroundColor = "transparent";
    }else if (prevScrollpos > currentScrollPos) {    // Se subirmos
        document.querySelector(".navbar").style.backgroundColor = "#fff";
        document.querySelector(".navbar").style.top = "0px";
    } else {    // Se descermos
        document.querySelector(".navbar").style.top = "-65px";
    }

    prevScrollpos = currentScrollPos;
}

document.querySelector(".search-button-div").addEventListener("mouseover", () => {
    document.querySelector(".fa-magnifying-glass").style.color = "#4b86ca"
})

document.querySelector(".search-button-div").addEventListener("mouseout", () => {
    document.querySelector(".fa-magnifying-glass").style.color = "black"
})


for (const element of document.querySelectorAll(".menu-hamburguer, .menu-hamburguer-after")) {

    element.addEventListener("click", () => {

        if (document.querySelector(".menu-hamburguer").style.display == "") {
            // for (const element of document.querySelectorAll("[class*=verde]")) {
            //     element.style.backgroundColor = "green"
            // }
            // for (const element of document.querySelectorAll("[class*=amarelo]")) {
            //     element.style.backgroundColor = "yellow"
            // }
            // for (const element of document.querySelectorAll("[class*=vermelho]")) {
            //     element.style.backgroundColor = "red"
            // }

            // for (const element of document.querySelectorAll(" [class*=verde-1], [class*=vermelho-1]")) {
            //     element.classList.add("sair-1")
            // }
            // for (const element of document.querySelectorAll(" [class*=verde-2], [class*=vermelho-2]")) {
            //     element.classList.add("sair-2")
            // }

            setTimeout(
                () => {
                    document.querySelector(".menu-hamburguer").style.display = "none"
                    document.querySelector(".menu-hamburguer-after").style.display = ""
                }, 400);

        } else {

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

    function myFunction() {
        if (window.matchMedia("(min-width: 992px)").matches) { // If media query matches
            document.querySelector("[class*=btn-entrar]").classList.add("w-50");
            document.querySelector("#top10").classList.add("d-inline")
            document.querySelector("#sobre").classList.add("d-inline");
            document.querySelector("#aprender").classList.add("d-inline");
            document.querySelector("#imputProcurar").disabled = false
            document.querySelector("#imputProcurar").placeholder = "Procurar"
            document.querySelector("#imputProcurar").style.backgroundColor = "#f2f2f2"
            document.querySelector("[class*=btn-entrar]").style.display = ""
            document.querySelector("#imgLogo").style.width = "115px"
            document.querySelector("#btnEntrarNavBar").classList.remove("position-absolute", "end-0", "top-50", "translate-middle-y")

        } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
            document.querySelector("[class*=btn-entrar]").classList.add("w-50");
            document.querySelector("#aprender").classList.add("d-inline");
            document.querySelector("#top10").classList.remove("d-inline");
            document.querySelector("#sobre").classList.remove("d-inline");
            document.querySelector("#imputProcurar").disabled = false
            document.querySelector("#imputProcurar").placeholder = "Procurar"
            document.querySelector("#imputProcurar").style.backgroundColor = "#f2f2f2"
            document.querySelector("[class*=btn-entrar]").style.display = ""
            document.querySelector("#imgLogo").style.width = "115px"
            document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        } else if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {
            document.querySelector("[class*=btn-entrar]").classList.remove("w-50");
            document.querySelector("#top10").classList.remove("d-inline");
            document.querySelector("#sobre").classList.remove("d-inline");
            document.querySelector("#aprender").classList.remove("d-inline");
            document.querySelector("#imputProcurar").disabled = false
            document.querySelector("#imputProcurar").placeholder = "Procurar"
            document.querySelector("#imputProcurar").style.backgroundColor = "#f2f2f2"
            document.querySelector("[class*=btn-entrar]").style.width = "60%"
            document.querySelector("[class*=btn-entrar]").style.display = ""
            document.querySelector("#imgLogo").style.width = "115px"
            document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        } else if (window.matchMedia("(min-width: 450px) and (max-width: 575px)").matches) {
            document.querySelector("#imputProcurar").disabled = true
            document.querySelector("#imputProcurar").placeholder = ""
            document.querySelector("#imputProcurar").style.backgroundColor = "white"
            document.querySelector("[class*=btn-entrar]").style.width = "100px";
            document.querySelector("[class*=btn-entrar]").classList.remove("w-50");
            document.querySelector("[class*=btn-entrar]").style.width = "50%"
            document.querySelector("[class*=btn-entrar]").style.display = ""
            document.querySelector("#imgLogo").style.width = "115px"
            document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        } else if (window.matchMedia("(min-width: 350px) and (max-width: 449px)").matches) {
            document.querySelector("#imputProcurar").disabled = true
            document.querySelector("#imputProcurar").placeholder = ""
            document.querySelector("#imputProcurar").style.backgroundColor = "white"
            document.querySelector("[class*=btn-entrar]").style.width = "100px";
            document.querySelector("[class*=btn-entrar]").classList.remove("w-50");
            document.querySelector("[class*=btn-entrar]").style.width = "65%"
            document.querySelector("[class*=btn-entrar]").style.display = ""
            document.querySelector("#imgLogo").style.width = "115px"
            document.querySelector("#btnEntrarNavBar").classList.add("position-absolute", "end-0", "top-50", "translate-middle-y")

        } else {
            document.querySelector("#imputProcurar").disabled = true
            document.querySelector("#imputProcurar").placeholder = ""
            document.querySelector("#imputProcurar").style.backgroundColor = "white"
            document.querySelector("[class*=btn-entrar]").classList.remove("w-50");
            document.querySelector("[class*=btn-entrar]").style.display = "none"
            document.querySelector("#imgLogo").style.width = "calc(100% + 50px)"
        }
    }

    function debounce(func) {    // função debouncing inspirada do site https://flaviocopes.com/canvas/
        let timer;
        return () => {
            if (timer) { clearTimeout(timer) }    // if(timer) se timer tiver um valor, caso contrário não funciona
            timer = window.setTimeout(func, 300)
        };
    };

    window.addEventListener('resize', debounce(() => {
        myFunction()
        console.log("ok");
    }))

    myFunction()

    // =
    // let timer;
    // function debounce() {    // função debouncing inspirada do site https://flaviocopes.com/canvas/
    //     console.log(timer);
    //     if (timer) { clearTimeout(timer) }    // if(timer) se timer tiver um valor, caso contrário não funciona
    //     timer = window.setTimeout(() => {console.log("oka");}, 600)
    // };

    // window.addEventListener('resize', debounce)
}