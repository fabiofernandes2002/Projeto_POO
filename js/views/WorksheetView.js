import * as Question from "../models/QuestionModel.js";
import * as Epoch from "../models/EpochModel.js";
import * as User from "../models/UserModel.js";


function worksheetView() {
    Epoch.init()
    Question.init()
    User.init()

    const isTeacher = User.isTeacher() ? true : false

    let questions = Question.getQuestions(),
        epoch

    try {
        if (Epoch.isChoosen()) {
            epoch = Epoch.getChoosenEpoch()
        } else {
            throw Error("Selecione uma época primeiro!")
        }
    } catch (error) {
        alert(error.message)
        return false
    }

    questions = questions.filter(question => question.idEpoch === epoch.idEpoch)

    renderWorksheet(isTeacher, questions, epoch)
    renderSltTypeQuestions()
}


function renderWorksheet(isTeacher, questions, epoch) {

    document.querySelector('#titleEpoch').innerHTML = epoch.epochTitle + ` - Ficha de avaliação`

    let result = "",
        index = 1
    for (const question of questions) {


        if (question.category == 'fill-the-blanks') {

            result = `
                    <div class="mt-5 p-3 row">
                        <div class="col">
                            <p id="questaoNumero1"><b>Questão ${index}</b></p>
                            <p>${question.questions[0]}</p>`

            for (let index = 0; index < question.questions.length; index++) {
                if (!index) continue

                const willAddInput = question.correctAnswers[index - 1] !== undefined ? true : false
                let statement = question.questions[index]

                statement = willAddInput ? (statement.charAt(statement.length - 1) === " " ? statement : statement + " ") : statement

                result += `<p id="fillQuestion" class="d-inline">
                                ${statement}`

                if (willAddInput) {
                    result += `<div class="fillAnswerParent d-inline">
                                    <input type="text" class="fillAnswer input-${question.idQuestion}" ${isTeacher ? "value=" + question.correctAnswers[index-1] + " disabled" : ""} >
                                </div>
                            `
                }
                if (index + 1 == question.questions.length) {
                    result += statement.charAt(statement.length - 1) === "." ? "" : "."
                }


            }

        } else if (question.category == 'quizz') {

            result = `
                <div class=" mt-5 p-3 row">
                    <div class="col">
                        <div class="row">
                            <p id="questaoNumero2">Questão ${index}</p>
                            <p>${question.questions[0]}</p>
                            <p>${question.questions[1]}</p>
                        </div>`

            const answers = [question.incorrectAnswers[0], question.incorrectAnswers[1], question.correctAnswers[0]]

            for (let index = 0, j = 3; index < 3; index++, j--) {
                const randomIndex = Math.floor(Math.random() * j) //numero aleatório entre 0 e 2

                result += `  <div class="row"> 
                                <div class="col-8 offset-2">
                                    <button type="button" class="btn mt-4 rounded-pill btn-${question.idQuestion} 
                                    ${isTeacher ? (answers[randomIndex] === question.correctAnswers[0] ? 'btn-selected': "btn-quizz1") : "btn-quizz"}" 
                                    style="text-align: center; width:100%">
                                        ${answers[randomIndex]}
                                    </button><br>
                                </div>
                            </div>
                            `

                answers.splice(randomIndex, 1)

            }


        } else {
            result = `
                <div class=" mt-5 p-3 row">
                    <div class="col">
                        <p id="questaoNumero1"><b>Questão ${index}</b></p>
                        <p>${question.questions[0]}</p>
                        <p>${question.questions[1]}</p>
                        <p id="fillQuestion">
                            
                            <span>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-dropdown btn-${question.idQuestion}" style="min-width:250px" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    ${isTeacher ? question.correctAnswers[0] : question.incorrectAnswers[0]}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                        <li class="d-${question.idQuestion}"><button class="dropdown-item  btn-dropdown" type="button">${question.incorrectAnswers[0]}</button></li>
                                        <li class="d-${question.idQuestion}"><button class="dropdown-item  btn-dropdown" type="button">${question.incorrectAnswers[1]}</button></li>
                                        <li class="d-${question.idQuestion}"><button class="dropdown-item btn-dropdown" type="button">${question.correctAnswers[0]}</button></li>
                                    </ul>
                                    </div>
                            </span>
                        </p>
                    
                
            `
        }
        result += `
                <div class="mb-5 p-3 text-end">
                    <button type="button" id="${question.idQuestion}" class="btn btn-danger btnRemove rounded-pill">Remover</button>
                </div>
                </div>
                </div>
            `
        document.querySelector('#worksheetBody').innerHTML += result
        index++
    }

    result = `
            <div class="mb-5 p-3 text-end">
                <button type="button" class="btn btn-success btnSubmit rounded-pill">Submeter</button>
            </div>`
    result += User.isTeacher() ? `<div class="mb-5 p-3">
    <button type="button" class="btn btn-success btnAddQuestion rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar Questão</button>
</div>` : ""
    document.querySelector('#worksheetBody').innerHTML += result

    const btnSubmit = document.querySelector('.btnSubmit')
    if (!isTeacher) {
        bindQuizzBtns(questions)
        bindDropdowns(questions)
        
        btnSubmit.addEventListener("click", () => {
            evaluateWorksheet(questions, epoch)
        })
    }

    // esconder botão de remover se não for professor
    const btnRemoves = document.querySelectorAll('.btnRemove')
    for (const btn of btnRemoves) {
        if (isTeacher) {
            btn.style.display = ''
        } else {
            btn.style.display = 'none'
        }
    }

    // esconder o botão de Adicionar questão quando é não professor
    const btnAddQuestions = document.querySelectorAll('.btnAddQuestion')
    for (const btnAddQuestion of btnAddQuestions) {
        if (isTeacher) {
            btnAddQuestion.style.display = ''
        }
        else {
            btnAddQuestion.style.display = 'none'
        }
    }

    // esconder o botão de submeter quando é professor
    
    if (User.isTeacher()) {
        btnSubmit.style.display = 'none'
    } else {
        btnSubmit.style.display = ''
    }


// CLICAR NO BOTÃO REMOVER
const btnRemovesQuestions = document.querySelectorAll(".btnRemove");
for (const button of btnRemovesQuestions) {
    button.addEventListener("click", () => {
        Swal.fire({
            title: `Tens a certeza que queres eliminar a questão " ${button.id} "!`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: 'Não',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Question.removeQuestion(button.id)
                setTimeout(function () {
                    window.location.reload()
                }, 500);;
                Swal.fire('Feito!')

            } else if (result.isDenied) {
                Swal.fire(`A Questão "${button.id}" não foi removida! `)
            }
        })
    });
}
}

function bindQuizzBtns(questions) {
    const questionsTypeQuizz = questions.filter(question => question.category === "quizz")

    for (const question of questionsTypeQuizz) {
        document.querySelectorAll(`.btn-${question.idQuestion}`).forEach(btn => {

            btn.addEventListener("click", () => {
                const selectedBtn = [...document.querySelectorAll(`.btn-${question.idQuestion}`)].find(el => el.classList.contains('btn-selected'))

                if (selectedBtn === undefined) {
                    btn.classList.add("btn-selected")

                } else if (selectedBtn === btn) {
                    btn.classList.remove("btn-selected")

                } else {
                    selectedBtn.classList.remove("btn-selected")
                    btn.classList.add("btn-selected")
                }
            })
        });
    }
}

function bindDropdowns(questions) {
    const questionsTypeDropdown = questions.filter(question => question.category === "dropdown")

    for (const question of questionsTypeDropdown) {
        document.querySelectorAll(`.d-${question.idQuestion}`).forEach(li => {

            li.addEventListener("click", () => {
                li.parentNode.parentNode.children[0].innerHTML = li.firstChild.innerHTML
            })
        });
    }
}

function evaluateWorksheet(questions, epoch) {

    let questionsAnswers = [...questions]

    questions.forEach((question, index) => {
        if (question.category === "fill-the-blanks") {
            questionsAnswers = assessAnswersFill(index, questionsAnswers)

        } else if (question.category === "quizz") {

            questionsAnswers = assessAnswerQuizz(index, questionsAnswers)

        } else {

            questionsAnswers = assessAnswersDrop(index, questionsAnswers)

        }
    });

    let grade
    const nrAnswersRight = questionsAnswers.filter(question => question).length
    const lengthQuestions = questionsAnswers.length
    if (questionsAnswers.includes(false)) {

        
        
        questionsAnswers = questionsAnswers.map((question, index) => !question ? question = index + 1 : false)
            .filter(question => question)

        grade = (nrAnswersRight / lengthQuestions).toFixed(2) * 100

        displaySweetAlert("error", nrAnswersRight, lengthQuestions, grade, questionsAnswers)

    } else {
        grade = 100
        displaySweetAlert("success")

    }

    updateGrade(grade, epoch,lengthQuestions )

}

function assessAnswersFill(index, questions) {
    const questionTypeFill = questions[index]
    let isItCorrect = true
    let inputs = document.querySelectorAll(`.input-${questionTypeFill.idQuestion}`)
    let i = 0

    for (const input of inputs) {
        if (input.value.trim().toLowerCase() === questionTypeFill.correctAnswers[i].toLowerCase()) {
            i++
            continue
        } else {
            isItCorrect = false
            break
        }

    }

    if (!isItCorrect) {
        questions.splice(index, 1, false)
    }

    return questions
}

function assessAnswerQuizz(index, questions) {

    const questionTypeQuizz = questions[index]
    const buttonSelected = document.querySelector(`.btn-${questionTypeQuizz.idQuestion}.btn-selected`)

    const buttonSelectedHTML = buttonSelected !== null ? buttonSelected.innerHTML : ""

    if (buttonSelectedHTML.trim() !== questionTypeQuizz.correctAnswers[0]) {
        questions.splice(index, 1, false)
    }

    return questions
}

function assessAnswersDrop(index, questions) {
    const questionTypeDrop = questions[index]

    let buttonSelected = document.querySelector(`.btn-${questionTypeDrop.idQuestion}`)

    const buttonSelectedHTML = buttonSelected !== null ? buttonSelected.innerHTML : ""

    if (buttonSelectedHTML.trim() !== questionTypeDrop.correctAnswers[0]) {
        questions.splice(index, 1, false)
    }

    return questions

}

/**
 * MOSTRAR UM SWEETALERT
 */
function displaySweetAlert(iconType, ...args) {

    const obj = {
        icon: iconType,
        confirmButtonColor: "#4DB964",
        confirmButtonText: "Ok",
    }

    if (args.length !== 0) { //SE FOI PASSADO 5 ARGUMENTOS, O UTILIZADOR NÃO TEVE TODAS AS RESPOSTAS CERTAS

        const nrAnswersRight = args[0]
        const lengthQuestions = args[1]
        const grade = args[2]
        const questionsAnswers = args[3]

        obj.html = `${nrAnswersRight} de ${lengthQuestions} (${grade + "%"}) respostas certas!<br>Questões erradas: ${questionsAnswers.join()}`
        obj.title = "É uma pena..."

    } else {

        obj.title = "Acertaste tudo, Parabéns!"


    }

    Swal.fire(obj)
}

/**
 * ATUALIZA A NOTA NA LOCALSTORAGE
 * @param {number} grade - nota da ficha (de 0 a 100) 
 */
function updateGrade(grade, epoch, lengthQuestions ) {
    
    const userInfo = User.getUserLogged()
    const indexChoosenEpoch = userInfo.epochs.findIndex(element => element[0] === epoch.idEpoch)
    userInfo.epochs[indexChoosenEpoch][1] = true
    userInfo.epochs[indexChoosenEpoch][2] = grade
    User.updateUserInfo(userInfo)
    

    
}

// Sessaõ de gerencia de questões
function renderSltTypeQuestions() {

    const selector = document.querySelector('#sltCategoryQuestion')
    selector.addEventListener('change', function () {
        if (this.value == 'quizz') {
            document.querySelector('#quizzForm').style.display = ""
            document.querySelector('#fillForm').style.display = "none"
            document.querySelector('#dropForm').style.display = "none"
        } else if (this.value == 'fill-the-blanks') {
            document.querySelector('#fillForm').style.display = ""
            document.querySelector('#dropForm').style.display = "none"
            document.querySelector('#quizzForm').style.display = "none"
        } else {
            document.querySelector('#dropForm').style.display = ""
            document.querySelector('#fillForm').style.display = "none"
            document.querySelector('#quizzForm').style.display = "none"
        }
    })
}

worksheetView()