var userAns1;
var userAns2;
var userAns3;
var userAns4;
var userAns5;


var answer1 = ["muhammadu", "buhari", "muhammadu buhari"];
var answer2 = ["donald", "trump", "donald trump"];
var answer3 = "nigeria";
var answer4 = "excellence";
var answer5 = "1960";

var result = 0;

var name;


function question() {
    console.log('Question ran');
    userAns1 = prompt("President of Nigeria").toLowerCase();
    userAns2 = prompt("President of USA").toLowerCase();
    userAns3 = prompt("FCT is the capital of ____").toLowerCase();
    userAns4 = prompt("Lagos State is the Centre of ____").toLowerCase();
    userAns5 = prompt("Year of Nigeria's Independence");
}


function calc() {
    console.log('Calc ran');
    
    if (userAns1 == "") {
        result += 0;
    } else if (answer1.includes(userAns1)) {
        result += 20;
    } else {
        result += 0;
    } 

    if (answer2.includes(userAns2)) {
        result += 20;
    } else {
        result += 0;
    }

    if (userAns3 == answer3) {
        result += 20;
    } else {
        result += 0;
    }

    if (userAns4 == answer4) {
        result += 20;
    } else {
        result += 0;
    }
    
    if (userAns5 == 1960) {
        result += 20;
    } else {
        result += 0;
    }


    var displayScore = document.querySelector("#d");
    displayScore.innerHTML = name + " your score is: " + result;
    //alert(displayScore);
}



function startGame() {
    name = prompt("Oh Na Na... What's your name?");
    console.log(typeof name, name);
    if (name == null || name == "") {
        alert("READ!!! Type your name")
        startGame();
    }
    else {
        question();
        calc();  
    }
}



