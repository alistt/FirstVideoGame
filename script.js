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

let questionList =[new Question(true, "Airedale Terriers Served In World Wars"),
new Question(false, "Airedale Terriers Are Primarily White"),
new Question(true, "Airedale Terriers Were Bred To Hunt Feasants"),
new Question(true, "Airedale Terriers Wore Gas Masks In The War"),
new Question(true, "An Airedale named Bob Received A Victorian Medal"),
new Question(false, "Airedale Terriers Are Known As The Golden Terrier")]
for (let index = 0; index < questionList.length; index++) {
console.log(questionList[index])


    
}