const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const trueButtonElement = document.getElementById
('true-btn')
const falseButtonElement = document.getElementById
('false-btn')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
 
 function startGame(){
 
     startButton.classList.add('hide')
     nextButton.classList.remove('hide')
    //  shuffledQuestions = questions.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     questionContainerElement.classList.remove('hide)')
     setNextQuestion()
 }

 function setNextQuestion() {
    if(currentQuestionIndex ==questionsList.length) {
        alert("Congrats")
        resetState()
        clearStatusClass()
    }

    showQuestion(questionsList[currentQuestionIndex])
    currentQuestionIndex ++
     clearStatusClass ()
 }
function showQuestion(question) {
    questionElement.innerText = question.questionText
    // question.answers.forEach(answer => {
    //     const button =document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', SelectAnswer)
    //     answerButtonsElement.appendChild(button)
    // })

}

function resetState() {
    nextButton.classList.add('hide')
    startButton.classList.remove('hide')
    currentQuestionIndex = 0
    }

function selectAnswer(userAnswer) {
    currentQuestion = questionsList [currentQuestionIndex]
    console.log(currentQuestion.answer== userAnswer)
    setStatusClass(currentQuestion.answer)
}
function setStatusClass(actualAnswer) {
    if(actualAnswer ==true){
    trueButtonElement.classList.add("correct")
    falseButtonElement.classList.add("wrong")
    } else
    {trueButtonElement.classList.add("wrong")
    falseButtonElement.classList.add("correct")}
}

function clearStatusClass() {
    trueButtonElement.classList.remove('correct')
    trueButtonElement.classList.remove('wrong')
    falseButtonElement.classList.remove('correct')
    falseButtonElement.classList.remove('wrong')
}

let questionsList = [
    {
        questionText: 'Did Airedale Terriers Serve in The War?',
        answer: true
    },
    {
        questionText: 'Did Airedale Terriers Serve?',
        answer: false
    },
    {
        questionText: 'Did Airedale Terrien The War?',
        answer: true
    },


]

