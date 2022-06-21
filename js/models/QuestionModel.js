let questions;

// CARREGAR AS QUESTIONS DA LOCALSTORAGE
export function init() {
    questions = localStorage.questions ? JSON.parse(localStorage.questions) : [];
}

// OBTER lista de questions
export function getQuestions() {
    return questions;
}

//REMOVER UMA QUESTIONS
export function removeQuestion(idQuestion) {
    questions = questions.filter((question) => question.idQuestion !== +idQuestion);
    localStorage.setItem("questions", JSON.stringify(questions));
}



class Question{
    idQuestion 
    idEpoch = 0
    question = []
    category = ''
    incorrectAnswers = []
    correctAnswer = []
    points = 0
    constructor(idEpoch, question = [], category = '', incorrectAnswers = [], correctAnswer = '', points = 0) {
        
        this.idQuestion = questions.length === 0 ? 1 : questions.length + 1;
        this.idEpoch = idEpoch;
        this.question = question;
        this.category = category;
        this.incorrectAnswers = incorrectAnswers;
        this.correctAnswer = correctAnswer;
        this.points = points;
    }

}


// let questions = [{
//     idQuestion : 0,
//     idEpoch: 0,
//     title:"Em que ano foi conquistada a Ceuta",
//     category:"quizz",
//     incorrectAnswers: [
//         "1916",
//         "1919",
//         "1920"
//     ],
//     correctAnswer: "1914",
//     points:10
// }]