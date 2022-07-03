/////*-__ MY VARIABLES __-*\\\\\

let correctsTxt = document.getElementById("Corrects").innerHTML;
let wrongsTxt = document.getElementById("Wrongs").innerHTML;
let questionsTxt = document.getElementById("Questions").innerHTML;
let accuracyTxt = document.getElementById("Accuracy").innerHTML;

let result = 0, num1 = 0, num2 = 0;
let index, value;
let questionsAnswered = 0, totalCorrect = 0, totalWrong = 0, totalAccuracy = 0;

let mathOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
mathOptions = mathOptions.sort(function() {return Math.random() - 0.5});
let mathOpt = 0;
let cultureOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
cultureOptions = cultureOptions.sort(function() {return Math.random() - 0.5});
let cultureOpt = 0;

let mathQuestions = [
    "What is the graphical representation of the number nine thousand thirty-six?",
    "How many units do 10 tens of thousands equal to?\n100000, 10000 or 1000?",
    "If you are three places before 22nd in a race, where are you?",
    "What is the name of the seven-sided polygon?",
    "How many square meters is a hectare?",
    "What is the name of the triangle that has two equal sides and one unequal side?",
    "Express in grams 7 kg and 670 g.",
    "How many years is a lustrum?",
    "Write the 35th ordinal number in digits.",
    "What quantity does the Roman numeral XVIII express?"
];

let cultureQuestions = [
    "What is the name of the longest river in the world?",
    "What is the largest ocean in the world?",
    "What is the largest country in the world?",
    "What is the most crowded country on earth?",
    "What is the city of the \"skyscrapers\"?",
    "In which country is the city of Medellin located?",
    "What is the smallest nation in the world?",
    "What is the Italian city known as \"the bride of the sea\"?",
    "What is the only city that is on two different continents?",
    "What is the second highest mountain in the world?"
];

let mathPictures = [
    "./pictures/9036.webp",
    "./pictures/thousands.gif",
    "./pictures/race.jpg",
    "./pictures/poligons.png",
    "./pictures/hectare.jfif",
    "./pictures/triangles.png",
    "./pictures/grams.jpg",
    "./pictures/years.jfif",
    "./pictures/numbers.jpg",
    "./pictures/roman.jpg",
];

let culturePictures = [
    "./pictures/river.jpg",
    "./pictures/ocean.jpg",
    "./pictures/country.jpg",
    "./pictures/crowded.jpg",
    "./pictures/skyscrapers.webp",
    "./pictures/medellin.jpg",
    "./pictures/small-city.jfif",
    "./pictures/city-sea.jfif",
    "./pictures/continents.PNG",
    "./pictures/mountain.png",
];

let mathAnswers = new Array(
    new Array ("90036", "936", "9036"),
    new Array ("100000", "10000", "1000"),
    new Array ("Ninth", "Thirteenth", "Nineteenth"),
    new Array ("Heptagon", "Hexagon", "Septagon"),
    new Array ("100", "100000", "10000"),
    new Array ("Isosceles", "Scalene", "Equilateral"),
    new Array ("70670", "7670", "767"),
    new Array ("1", "5", "10"),
    new Array ("135", "25", "35"),
    new Array ("118", "18", "13"),
);

let cultureAnswers = new Array(
    new Array ("Nile", "Amazon", "Danubi"),
    new Array ("Pacific", "Indian", "Atlantic"),
    new Array ("China", "Russia", "India"),
    new Array ("United States", "China", "Russia"),
    new Array ("Tokyo", "New York", "Hong Kong"),
    new Array ("Colombia", "Venezuela", "Peru"),
    new Array ("Andorra", "Monaco", "The Vatican"),
    new Array ("Rome", "Florence", "Venice"),
    new Array ("Moscow", "Istanbul", "Berlin"),
    new Array ("K1", "K3", "K2"),
);

let mathCorrectAnswers = [
    "9036",
    "100000",
    "Nineteenth",
    "Heptagon",
    "10000",
    "Isosceles",
    "7670",
    "5",
    "35",
    "18",
]; 

let cultureCorrectAnswers = [
    "Amazon",
    "Pacific",
    "China",
    "China",
    "New York",
    "Colombia",
    "The Vatican",
    "Venice",
    "Istanbul",
    "K2",
];

/////*-__ MY FUNCTIONS __-*\\\\\

function chooseCulture() {
    questionType = 1;
    activateButtons();
    activateCultureQuestion();
}

function chooseMaths() {
    questionType = 2;
    activateButtons();
    activateMathQuestion();
}

function chooseMultiplication() {
    questionType = 3;
    activateText();
    activateMultiplicationQuestion();
}

function activateButtons() {
    closeExplain();
    desactivateText();
    document.getElementById("Image").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("Image").style.visibility = "visible";
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("button2").style.visibility = "visible";
    document.getElementById("button3").style.visibility = "visible";
}

function activateCultureQuestion() {
    document.getElementById("QuestionText").innerHTML = cultureQuestions[cultureOptions[cultureOpt]];
    document.getElementById("button1").value = cultureAnswers[cultureOptions[cultureOpt]][0];
    document.getElementById("button2").value = cultureAnswers[cultureOptions[cultureOpt]][1];
    document.getElementById("button3").value = cultureAnswers[cultureOptions[cultureOpt]][2];
    document.getElementById("Image").src = culturePictures[cultureOptions[cultureOpt]];
}

function activateMathQuestion() {
    document.getElementById("QuestionText").innerHTML = mathQuestions[mathOptions[mathOpt]];
    document.getElementById("button1").value = mathAnswers[mathOptions[mathOpt]][0];
    document.getElementById("button2").value = mathAnswers[mathOptions[mathOpt]][1];
    document.getElementById("button3").value = mathAnswers[mathOptions[mathOpt]][2];
    document.getElementById("Image").src = mathPictures[mathOptions[mathOpt]];
}

function desactivateButtons() {
    document.getElementById("Image").disabled = false;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("Image").style.visibility = "visible";
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
}

function activateText() {
    closeExplain();
    desactivateButtons();
    document.getElementById("Image").disabled = false;
    document.getElementById("textField").disabled = false;
    document.getElementById("textButton").disabled = false;
    document.getElementById("Image").src = "./pictures/multiplications.png";
    document.getElementById("Image").style.visibility = "visible";
    document.getElementById("textField").style.visibility = "visible";
    document.getElementById("textButton").style.visibility = "visible";
}

function activateMultiplicationQuestion() {
    num1 = parseInt(Math.random() * 30) + 10;
    num2 = parseInt(Math.random() * 30) + 10;
    result = num1 * num2;
    document.getElementById("QuestionText").innerHTML = "What is the result of multiplying " + num1 + " x " + num2 + "?";
}

function cleanText() {
    document.getElementById("textField").value = "";
}

function desactivateText() {
    document.getElementById("textField").disabled = true;
    document.getElementById("textButton").disabled = true;
    document.getElementById("textField").style.visibility = "hidden";
    document.getElementById("textButton").style.visibility = "hidden";
}

function checkAnswerButton1() {
    questionsAnswered++;
    if (questionType == 1) {
        value = document.getElementById("button1").value;
        if (value == cultureCorrectAnswers[cultureOptions[cultureOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        }
    } else if (questionType == 2) {
        value = document.getElementById("button1").value;
        if (value == mathCorrectAnswers[mathOptions[mathOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        }
    }
}

function checkAnswerButton2() {
    questionsAnswered++;
    if (questionType == 1) {
        value = document.getElementById("button2").value;
        if (value == cultureCorrectAnswers[cultureOptions[cultureOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        }
    } else if (questionType == 2) {
        value = document.getElementById("button2").value;
        if (value == mathCorrectAnswers[mathOptions[mathOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        }
    }
}

function checkAnswerButton3() {
    questionsAnswered++;
    if (questionType == 1) {
        value = document.getElementById("button3").value;
        if (value == cultureCorrectAnswers[cultureOptions[cultureOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (cultureOpt == 9) { cultureOpt = 0; } else { cultureOpt++; }
        }
    } else if (questionType == 2) {
        value = document.getElementById("button3").value;
        if (value == mathCorrectAnswers[mathOptions[mathOpt]]) {
            totalCorrect++;
            index = 1;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        } else {
            totalWrong++;
            index = 0;
            showExplain(index, value);
            showStats();
            checkWinner();
            if (mathOpt == 9) { mathOpt = 0; } else { mathOpt++; }
        }
    }
}

function checkAnswerText() {
    questionsAnswered++;
    value = parseInt(document.getElementById("textField").value);
    if (value == result) {
        totalCorrect++;
        index = 2;
        showExplain(index, value);
        showStats();
        checkWinner();
    } else {
        totalWrong++;
        index = 0;
        showExplain(index, value);
        showStats();
        checkWinner();
    }
}

function checkWinner() {
    if (totalWrong == 10) {
        document.getElementById("Image").src = "./pictures/loser.jpg";
        document.getElementById("Wrongs").innerHTML = "You got 10 wrong answers. You are a loser!";

        document.getElementById("Corrects").style.visibility = "hidden";
        document.getElementById("Accuracy").style.visibility = "hidden";
        document.getElementById("Questions").style.visibility = "hidden";
        document.getElementById("buttonMath").disabled = true;
        document.getElementById("buttonCulture").disabled = true;
        document.getElementById("buttonMultiplication").disabled = true;
        document.getElementById("Image").style.visibility = "visible";
        document.getElementById("button1").style.visibility = "hidden";
        document.getElementById("button2").style.visibility = "hidden";
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("textField").style.visibility = "hidden";
        document.getElementById("textButton").style.visibility = "hidden";
        document.getElementById("AnswerExplain").style.visibility = "hidden";
    }
    if (totalCorrect == 10) {
        document.getElementById("Image").src = "./pictures/winner.jpg";
        document.getElementById("Wrongs").innerHTML = "You got 10 correct answers. You are my hero!";

        document.getElementById("Corrects").style.visibility = "hidden";
        document.getElementById("Accuracy").style.visibility = "hidden";
        document.getElementById("Questions").style.visibility = "hidden";
        document.getElementById("buttonMath").disabled = true;
        document.getElementById("buttonCulture").disabled = true;
        document.getElementById("buttonMultiplication").disabled = true;
        document.getElementById("Image").style.visibility = "visible";
        document.getElementById("button1").style.visibility = "hidden";
        document.getElementById("button2").style.visibility = "hidden";
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("textField").style.visibility = "hidden";
        document.getElementById("textButton").style.visibility = "hidden";
        document.getElementById("AnswerExplain").style.visibility = "hidden";
    }
}

function showStats() {
    document.getElementById("Corrects").innerHTML = correctsTxt + " " + totalCorrect + ".";
    document.getElementById("Wrongs").innerHTML = wrongsTxt + " " + totalWrong + ".";
    document.getElementById("Questions").innerHTML = questionsTxt + " " + questionsAnswered + ".";
    totalAccuracy = ((totalCorrect * 100) /questionsAnswered);
    document.getElementById("Accuracy").innerHTML = accuracyTxt + " " + totalAccuracy + "%.";
}

function showExplain(index, value) {
    desactivateButtons();
    desactivateText();
    if (index == 0) {
        message = "You choose : \"" + value + "\" as your answer.\nThat's incorrect!\nTry again!";
    } else if (index == 1) {
        message = "You choose : \"" + value + "\" as your answer.\nThat's Correct!\nGood Job, continue!";
    } else if (index == 2) {
        message = "You choose : \"" + value + "\" as your answer.\nThat's Correct!\nGood Job, continue!";
    }
    document.getElementById("AnswerExplain").innerHTML = message;
    document.getElementById("AnswerExplain").style.visibility = "visible";
    document.getElementById("AnswerExplain").disabled = false;
}

function closeExplain() {
    document.getElementById("AnswerExplain").innerHTML = "";
    document.getElementById("AnswerExplain").style.visibility = "hidden";
    document.getElementById("AnswerExplain").disabled = true;
}

function restartQuiz() {
    location.reload();
}

function closeQuiz() {
    window.close();
}