function chksecurityQuestionsFunction(object, ques, ans) {
    isFound = false
    object.forEach(element => {
        if(element["question"]==ques && element["expectedAnswer"]==ans) {
            isFound =  true
        }        
    });
    return isFound
}

var chksecurityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]

                        // TESTCASE 1
ques = "What city were you born in?"
ans = "NYC"

                        // TESTCASE 2
// var ques = "What was your first pet’s name?";
// var ans  =  "DufferNutter";

var status = chksecurityQuestionsFunction(chksecurityQuestions, ques, ans)
console.log(status);