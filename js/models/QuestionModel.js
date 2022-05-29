class Question{
    #idQuestion = 0
    #idEpoch = 0
    #title = ""
    #category = ''
    #incorrectAnswers = []
    #correctAnswer = ""
    #points = 0
    constructor(idQuestion, idEpoch, title, category, incorrectAnswers, correctAnswer, points) {
        
        this.#idQuestion = idQuestion
        this.#idEpoch = idEpoch;
        this.#title = title;
        this.#category = category;
        this.#incorrectAnswers = incorrectAnswers;
        this.#correctAnswer = correctAnswer;
        this.#points = points;
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