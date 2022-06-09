import * as Question from "../models/QuestionModel.js";
import * as Epoch from "../models/EpochModel.js";


function worksheetView() {
    Epoch.init()
    Question.init()
    renderWorksheet()
}


function renderWorksheet(){
    let questions = Question.getQuestions()
    const epoch = Epoch.getChoosenEpoch()
    document.querySelector('#titleEpoch').innerHTML = epoch.epochTitle + `- Teste de avaliação`
    let result = ""
    for (const question of questions) {
        
        
        if (question.category == 'fill-the-blanks') {
            
            result += `
                    
                    <div class="mt-3 p-3">
                        <p id="questaoNumero1"><b>Questão ${question.idQuestion}</b></p>
                        <p id="">${question.question[0]}</p>
                        <p id="fillQuestion">
                            ${question.question[1]}
                            <span class="">
                                <input type="text" id="fillAnswer">
                            </span>
                            .
                        </p>
                    </div>
            `
        }else if(question.category == 'quizz'){

            result += `
                <div class=" mt-3 p-3">
                    <p id="questaoNumero2">Questão ${question.idQuestion}</p>
                    <p>${question.question[0]}</p>
                    <p>${question.question[1]}</p>
                    <button type="button" id="quizAnswer1" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.incorrectAnswers[0]}</button><br>
                    <button type="button" id="quizAnswer2" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.incorrectAnswers[1]}</button><br>
                    <button type="button" id="quizAnswer3" class="btn btn-primary mt-4 rounded-pill" style="text-align: left; width: 850px;">${question.correctAnswer}</button>
                </div>
            `
        }else{
            console.log(question.question);
            result += `
                <div>
                    <p id="questaoNumero1"><b>Questão ${question.idQuestion}</b></p>
                    <p>${question.question[0]}</p>
                    <p>${question.question[1]}</p>
                    <p id="fillQuestion">
                        
                        <span class="">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Escolha a resposta certa
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
    result += `
            <div class="mb-5 p-3 text-end">
                <button type="button" class="btn btn-danger rounded-pill">Cancelar</button>
                <button type="button" class="btn btn-success rounded-pill">Submeter</button>
            </div>
        `
    document.querySelector('#worksheetBody').innerHTML = result
}

worksheetView()