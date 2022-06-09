import * as Question from "../models/QuestionModel";
import * as Epoch from "../models/EpochModel.js";


function worksheetView() {
    Epoch.init()
    Question.init()
    renderWorksheet()
}


function renderWorksheet(){
    let questions = Question.getQuestions()
    let result = ""
    for (const question of questions) {
        if (Question.getQuestions().category == 'fill-the-blanks') {
            
            result += `
                <div class="mt-5 p-3" style="background: #C4C4C4; border-radius: 45px 45px 0px 0px; text-align: left;">
                    <p id="tituloExercicio"><b>Tempo dos descobrimentos - Teste de avaliação </b></p>
                </div>
                <div class="corpoFicha" style="border: 3px solid #C4C4C4;border-radius: 0px 0px 45px 45px;">
                    <div class="mt-3 p-3">
                        <p id="questaoNumero1"><b>Questão 1</b></p>
                        <p id="">${question.question[0]}</p>
                        <p id="fillQuestion">
                            ${question.question[1]}
                            <span class="">
                                <input type="number" id="fillAnswer">
                            </span>
                            .
                        </p>
                    </div>
                </div>
            `
        }else if(Question.getQuestions().category == 'quizz'){

            result += `
                <div class=" mt-3 p-3">
                    <p id="questaoNumero2">Questão 2</p>
                    <p>${question.question[0]}</p>
                    <p>${question.question[1]}</p>
                    <button type="button" id="quizAnswer1" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.incorrectAnswers[0]}</button><br>
                    <button type="button" id="quizAnswer2" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.incorrectAnswers[1]}</button><br>
                    <button type="button" id="quizAnswer3" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.incorrectAnswers[2]}</button>
                </div>
            `
        }else{
            result += `
                <div>
                    <p id="questaoNumero1"><b>Questão 3</b></p>
                    <p id="">${question.question}</p>
                    <p id="fillQuestion">
                        
                        <span class="">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button class="dropdown-item" type="button">${question.incorrectAnswers[0]}</button></li>
                                    <li><button class="dropdown-item" type="button">${question.incorrectAnswers[1]}</button></li>
                                    <li><button class="dropdown-item" type="button">${question.correctAnswer}</button></li>
                                </ul>
                                </div>
                        </span>
                    </p>
                </div>
            `
        }
        
    }
    document.querySelector('#worksheetHtml').innerHTML = result
}

worksheetView()