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
    new Question("If (4,19) is a solution of the equation y = a x + 3, then a = ", ["3", "4","5", "6"], "4"),
    new Question("If each edge of a cube, of volume V, is doubled, then volume of the new cube is", ["2 V", "4 V", "6 V", "8 V"], "8 V"),
    new Question("Volume of a Cuboid is 12 cm^3. The volume in (in cm^3) if a cuboid whose sides are double of the above cuboid is", ["24", "48","72", "96"], "96"),
    new Question("50% of 50 will be", ["2500", "25", "50", "1"], "25"),
    new Question("Let ABC be a triangle of area 24 sq. units and PQR be a triangle formed by mid-points of sides of triangle ABC. Then the area of triangle PQR will be", ["12 sq. units", "6 sq. units", "4 sq. units", "3 sq units"], "6 sq. units"),
    new Question("The remainder on dividing given integers a and b by 7 are respectively 5 and 4. The remainder when ab is divided by, is ", ["4", "3", "6", "2"],"6"),
    new Question("A circular field has a circumfurence of 360km. Two cyclists Sumeet and John start together and can cycle at the speed of 12km/hr and 15km/hr respectively, round the circular field. They will meet again at the starting point after ",["120hr","140hr","100hr","Can not be justified."],"120hr"),
    new Question("Find the sum of the zeroes of quadratic polynomial x^2+7x+10=0.",["7","10","-7","-10"],"-7"),
    new Question("If 4 times the area of smaller square is subtracted from the area of a larger square, the result is 144m sq. The sum of the area of two squares is 464m sq. Determine the sides of the two squares.",["8m and 20m","4m and 40m","12m and 12m","Can not be Determined"],"8m and 20m"),
    new Question("8 men and 12 boys can finish a piece of work in 10 days while 6 men and 8 boys can finish it in 14 days. Find the time taken to finish the work by one man alone.",["140 days","10 days","14 days","None of the given"],"140 days"),
    new Question("12-n, 12, 12+n<br>What is the average (arithmetic mean) of the following quantities?",["4","12","18","n"],"12"),
    new Question("What is the maximum number of rectangular blocks measuring 3 inches by 2 inches by 1 inch that can be packed into a cube shaped box whose interior measures 6 inches on edge.",["24","28","30","36"],"36"),
    new Question("If a!=0 and 5/x = (5+a)/(x+a), what is the value of x ?",["-5","-1","2","5"],"5"),
    new Question("If x+k = 12 and p(x+k)=36, what is the value of p ?",["3","4","6","9"],"3"),
    new Question("If y = 2x+3 and x<2 which of the following represents all the possible values of y.",["y<7","y>7","y<5","y>5"],"y<7")    
];

// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();








