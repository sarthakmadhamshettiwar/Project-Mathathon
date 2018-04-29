function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    
    new Question("If 13 is added to one-half of a certain number, the result is 37. What is the original number ?",["24","40","48","80"],"48"),
    new Question("If 16 + 4x is 10 more than 14, what is the value of 8x?",["2","6","16","80"],"16"),
    new Question("If 3x-y=12, what is the value of 8^x/2^y ?",["2^12","4^4","8^2","The value cannot be determined by the information given."],"2^12"),
    new Question("If a=5root2 and 2a=root2x, what is the value of x ?",["100","10","root10","I would guess."],"100"),
    new Question("In a group of 800 people, 550 can speak Hindi and 450 can speak English. How many can speak both English and Hindi?",["450","225","200","400"],"200"),
    new Question("If the sum of squares of LCM & HCF of two psitive numbers is 3609 and their LCM is 57 more than their HCF, then the product of two numbers is ",["360","609","180","810"],"180"),
    new Question("Value of n for which nth term of two A.P's 63, 65, 67,... and 3, 10, 17,... are equal.",["14","15","12","13"],"13"),
    new Question("The present ratio of ages of P & Q is 4:6. If the sum of present ages of P & Q is 50 years, then the sum of ages of P & Q before 4 years is",["42 years","52 years","50 years","26 years"],"42 years"),
    new Question("Find the least  square number which is exactly divisible by 10, 12, 15 and 18 ?",["400","900","1600","None"],"900"),
    new Question("f(x)=(x+1)/(x^2+1) then f(-1)+f(1) is ...",["1","0","1/2","1/4"],"1"),
    new Question("If a1, a2, a3,...an are in A.P., such that (a4/a1) =(3/2), then 13th term of AP is ... ",["3/2","0","12a1","14a1"],"0"),
    new Question("Sides of two similar triangle are in the ratio 2:3, then their areas are in the ratio...",["9:4","4:9","2:3","3:2"],"4:9"),
    new Question("n Σ k=1 (2k-1) is ...",["k^2","n^2","(2k-1)^2","n(n+1)/2"],"n^2"),
    new Question("The first term of an A.P. is 4, last term is 44, there are 7 terms. Hence their sum is... ",["48","333","168","280"],"168"),
    new Question("If a,b,c are in A.P., then (a-b)/(b-c) is equal to ...",["a/b","b/c","a/c","1"],"")
];

// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();








