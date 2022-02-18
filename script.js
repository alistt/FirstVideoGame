   console.log("javascriptloaded")
class Question {
    questionText = ""
    answer = false
    constructor(answer, question){
        this.questionText = question
        this.answer = answer
    }
}
// let question1 = new Question(true, "Is George Cool?")
// console.log(question1)
// console.log(question1.answer == false)

let questionList =[new Question(true, "Is George Cool?"),new Question(false, "Is George Lame?")]
for (let index = 0; index < questionList.length; index++) {
console.log(questionList[index])


    
}