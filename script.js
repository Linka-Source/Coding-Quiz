//create variables for all elements of the quiz (buttons, scores, results, question structure)
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//added questions and answers

var quizQuestions = [{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},

   {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "World Wrestling Winners",
    choiceC: "World Wide Web",
    choiceD: "Windy Welly Wombats",
    correctAnswer: "c"},

    {
    question: "What HTML attribute references an external JavaScript file?",    
    choiceA: "href",    
    choiceB: "src",    
    choiceC: "class",    
    choiceD: "index",    
    correctAnswer: "b"},   
                
        ];